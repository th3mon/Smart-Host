import { RoomOccupancyOptimization } from '@/app/components/room-occupancy-optimization';
import type { Meta, StoryObj } from '@storybook/react';

const guests: number[] = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

const meta: Meta<typeof RoomOccupancyOptimization> = {
  title: 'Components/RoomOccupancyOptimization',
  component: RoomOccupancyOptimization,
};

export default meta;

type Story = StoryObj<typeof RoomOccupancyOptimization>;
export const Default: Story = {
  args: {
    guests,
  },
};
