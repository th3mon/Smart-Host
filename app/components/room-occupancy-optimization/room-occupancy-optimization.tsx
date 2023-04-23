import React from 'react';
import { fillPremiumRooms } from './fill-premium-rooms';
import { fillEconomyRooms } from './fill-economy-rooms';
import { getRoomsUsage } from './get-rooms-usage';
import { pickGuests } from '@/app/components/room-occupancy-optimization/pick-guests';

const guestsInitial = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

type Rooms = {
  premium: number;
  economy: number;
};

type RoomsUsage = {
  premium: number;
  economy: number;
};

export const RoomOccupancyOptimization: React.FunctionComponent = () => {
  const [guests] = React.useState<number[]>(guestsInitial);
  const [rooms, setRooms] = React.useState<Rooms>({
    premium: 0,
    economy: 0,
  });
  const [roomsUsage, setRoomsUsage] = React.useState<RoomsUsage>({
    premium: 0,
    economy: 0,
  });

  const calculateUsage: React.FormEventHandler<HTMLFormElement> = (): void => {
    const { economyGuests, premiumGuests } = pickGuests(guests);
    const emptyEconomyRooms: number = rooms.economy - economyGuests.length;
    const emptyPremiumRooms: number = rooms.premium - premiumGuests.length;

    const economyRoomsUsage: number = getRoomsUsage(
      fillEconomyRooms({
        economyGuests,
        premiumGuests,
        emptyEconomyRooms,
        emptyPremiumRooms,
      }),
      rooms.economy
    );

    const premiumRoomsUsage: number = getRoomsUsage(
      fillPremiumRooms({
        emptyEconomyRooms,
        emptyPremiumRooms,
        economyGuests,
        premiumGuests,
      }),
      rooms.premium
    );

    setRoomsUsage({
      ...roomsUsage,
      premium: premiumRoomsUsage,
      economy: economyRoomsUsage,
    });
  };

  return (
    <form className="room-occupancy-optimization" onSubmit={calculateUsage}>
      <div className="room-occupancy-optimization__premium-usage premium-usage">
        <div className="premium-usage__title">
          <h2>Premium Usage</h2>
        </div>

        <div className="premium-usage__rooms">
          <label
            htmlFor="premium-usage__rooms-input"
            className="premium-usage__rooms-label"
          >
            Premium Rooms
          </label>
          <input
            className="premium-usage__rooms-input"
            id="premium-usage__rooms-input"
            type="number"
            value={rooms.premium}
            onChange={(event) => {
              setRooms({ ...rooms, premium: Number(event?.target?.value) });
            }}
          />

          <p data-testid="premium-test">{rooms.premium}</p>
        </div>

        <div
          className="premium-usage__value"
          data-testid="premium-usage__value"
        >
          {roomsUsage.premium + ' EUR'}
        </div>
      </div>

      <div className="room-occupancy-optimization__economy-usage">
        <div className="economy-usage__title">
          <h2>Economy Usage</h2>
        </div>

        <div className="economy-usage__rooms">
          <label
            htmlFor="economy-usage__rooms-input"
            className="economy-usage__rooms-label"
          >
            Economy Rooms
          </label>
          <input
            className="economy-usage__rooms-input"
            id="economy-usage__rooms-input"
            type="number"
            value={rooms.economy}
            onChange={(event) => {
              setRooms({ ...rooms, economy: Number(event?.target?.value) });
            }}
          />

          <p data-testid="economy-test">{rooms.economy}</p>
        </div>

        <div
          className="economy-usage__value"
          data-testid="economy-usage__value"
        >
          {roomsUsage.economy + ' EUR'}
        </div>
      </div>

      <button>calculate usage</button>
    </form>
  );
};
