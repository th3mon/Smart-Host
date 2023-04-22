import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RoomOccupancyOptimization } from './room-occupancy-optimization';

describe('Room Occupancy Optimization', () => {
  it('should render', () => {
    render(<RoomOccupancyOptimization />);
  });

  it('should render premium usage', () => {
    render(<RoomOccupancyOptimization />);
    const premiumUsage = screen.getByText(/premium usage/i);

    expect(premiumUsage).toBeInTheDocument();
  });

  it('should render economy usage', () => {
    render(<RoomOccupancyOptimization />);
    const economyUsage = screen.getByText(/economy usage/i);

    expect(economyUsage).toBeInTheDocument();
  });

  it('[TEST 1] should have 738 EUR premium usage and 167 EUR economy usage', async () => {
    const premiumRooms = 3;
    const economyRooms = 3;
    render(<RoomOccupancyOptimization />);
    const premiumUsage = screen.getByTestId('premium-usage__value');
    const economyUsage = screen.getByTestId('economy-usage__value');

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
    const premiumRooms = 7;
    const economyRooms = 5;
    render(<RoomOccupancyOptimization />);
    const premiumUsage = screen.getByTestId('premium-usage__value');
    const economyUsage = screen.getByTestId('economy-usage__value');

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
    const premiumRooms = 2;
    const economyRooms = 7;
    render(<RoomOccupancyOptimization />);
    const premiumUsage = screen.getByTestId('premium-usage__value');
    const economyUsage = screen.getByTestId('economy-usage__value');

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
    const premiumRooms = 7;
    const economyRooms = 1;
    render(<RoomOccupancyOptimization />);
    const premiumUsage = screen.getByTestId('premium-usage__value');
    const economyUsage = screen.getByTestId('economy-usage__value');

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
