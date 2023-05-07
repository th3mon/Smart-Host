import { RoomOccupancyOptimization } from '@/app/components/room-occupancy-optimization';
import React from 'react';

const getGuests = async (): Promise<number[]> => {
  const url: string =
    'https://gist.githubusercontent.com/lwhiteley/b01cf0964e19704df06fccf44d0c3c4d/raw/580a0aa9675985674dd1a70ffa799a4288c94bb3/guests.json';
  // 'https://run.mocky.io/v3/fd1b5cdc-a3a4-4ffc-ac53-deeffedac92b'; // mocky 200
  // 'https://run.mocky.io/v3/9ffcbbd4-6d09-4487-9d42-d4a443836383'; // mocky 500

  const response = await fetch(url);

  return await response.json();
};

const ErrorComponent: React.FunctionComponent = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <p className="text-center text-red-500">
      There was an error fetching the guests. Please try again later.
    </p>
  </div>
);
export default async function Home() {
  try {
    const guestsInitial: number[] = await getGuests();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <RoomOccupancyOptimization guests={guestsInitial} />
      </main>
    );
  } catch {
    return <ErrorComponent />;
  }
}
