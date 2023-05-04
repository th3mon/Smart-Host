import { RoomOccupancyOptimization } from '@/app/components/room-occupancy-optimization';
import React from 'react';

const getGuests = async (): Promise<number[]> => {
  const url: string =
    'https://gist.githubusercontent.com/lwhiteley/b01cf0964e19704df06fccf44d0c3c4d/raw/580a0aa9675985674dd1a70ffa799a4288c94bb3/guests.json';

  const response = await fetch(url);

  return await response.json();
};
export default async function Home() {
  const guestsInitial: number[] = await getGuests();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RoomOccupancyOptimization guests={guestsInitial} />
    </main>
  );
}
