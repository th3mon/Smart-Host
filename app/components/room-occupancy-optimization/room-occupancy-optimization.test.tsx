import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RoomOccupancyOptimization } from './room-occupancy-optimization';

const guests = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];
describe('Room Occupancy Optimization', () => {
  it('should render', () => {
    render(<RoomOccupancyOptimization guests={guests} />);
  });

  it('should render premium usage', () => {
    render(<RoomOccupancyOptimization guests={guests} />);
    const premiumUsage: HTMLElement = screen.getByTestId('premium-usage-value');

    expect(premiumUsage).toBeInTheDocument();
  });

  it('should render economy usage', () => {
    render(<RoomOccupancyOptimization guests={guests} />);
    const economyUsage: HTMLElement = screen.getByTestId('economy-usage-value');

    expect(economyUsage).toBeInTheDocument();
  });

  it('[TEST 1] should have 738 EUR premium usage and 167 EUR economy usage', async () => {
    const premiumRooms: number = 3;
    const economyRooms: number = 3;
    render(<RoomOccupancyOptimization guests={guests} />);
    const premiumUsage: HTMLElement = screen.getByTestId('premium-usage-value');
    const economyUsage: HTMLElement = screen.getByTestId('economy-usage-value');

    await userEvent.type(
      screen.getByLabelText(/Premium Rooms/i),
      String(premiumRooms)
    );

    await userEvent.type(
      screen.getByLabelText(/Economy Rooms/i),
      String(economyRooms)
    );

    fireEvent.submit(screen.getByText(/calculate usage/i));

    expect(premiumUsage).toHaveTextContent('738 EUR');
    expect(economyUsage).toHaveTextContent('167 EUR');
  });

  it('[TEST 2] should have 1054 EUR premium usage and 189 EUR economy usage', async () => {
    const premiumRooms: number = 7;
    const economyRooms: number = 5;
    render(<RoomOccupancyOptimization guests={guests} />);
    const premiumUsage: HTMLElement = screen.getByTestId('premium-usage-value');
    const economyUsage: HTMLElement = screen.getByTestId('economy-usage-value');

    await userEvent.type(
      screen.getByLabelText(/Premium Rooms/i),
      String(premiumRooms)
    );

    await userEvent.type(
      screen.getByLabelText(/Economy Rooms/i),
      String(economyRooms)
    );

    fireEvent.submit(screen.getByText(/calculate usage/i));

    expect(premiumUsage).toHaveTextContent('1054 EUR');
    expect(economyUsage).toHaveTextContent('189 EUR');
  });

  it('[TEST 3] should have 583 EUR premium usage and 189 EUR economy usage', async () => {
    const premiumRooms: number = 2;
    const economyRooms: number = 7;
    render(<RoomOccupancyOptimization guests={guests} />);
    const premiumUsage: HTMLElement = screen.getByTestId('premium-usage-value');
    const economyUsage: HTMLElement = screen.getByTestId('economy-usage-value');

    await userEvent.type(
      screen.getByLabelText(/Premium Rooms/i),
      String(premiumRooms)
    );

    await userEvent.type(
      screen.getByLabelText(/Economy Rooms/i),
      String(economyRooms)
    );

    fireEvent.submit(screen.getByText(/calculate usage/i));

    expect(premiumUsage).toHaveTextContent('583 EUR');
    expect(economyUsage).toHaveTextContent('189 EUR');
  });

  it('[TEST 4] should have 1153 EUR premium usage and 45 EUR economy usage', async () => {
    const premiumRooms: number = 7;
    const economyRooms: number = 1;
    render(<RoomOccupancyOptimization guests={guests} />);
    const premiumUsage: HTMLElement = screen.getByTestId('premium-usage-value');
    const economyUsage: HTMLElement = screen.getByTestId('economy-usage-value');

    await userEvent.type(
      screen.getByLabelText(/Premium Rooms/i),
      String(premiumRooms)
    );

    await userEvent.type(
      screen.getByLabelText(/Economy Rooms/i),
      String(economyRooms)
    );

    fireEvent.submit(screen.getByText(/calculate usage/i));

    expect(premiumUsage).toHaveTextContent('1153 EUR');
    expect(economyUsage).toHaveTextContent('45 EUR');
  });
});
