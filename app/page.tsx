import { RoomOccupancyOptimization } from '@/app/components/room-occupancy-optimization/room-occupancy-optimization';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RoomOccupancyOptimization />
    </main>
  );
}
