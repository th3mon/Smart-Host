import React from 'react';
import { fillPremiumRooms } from './fill-premium-rooms';
import { dropUpgradedGuests } from './drop-upgraded-guests';
import { getRoomsUsage } from './get-rooms-usage';
import { Guests, pickGuests } from './pick-guests';
import { calculateEmptyRooms } from './calculate-empty-rooms';

const guestsInitial = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

export type Rooms = {
  premium: number;
  economy: number;
};

type RoomsUsage = {
  premium: number;
  economy: number;
};

export const RoomOccupancyOptimization: React.FunctionComponent = () => {
  const [rooms, setRooms] = React.useState<Rooms>({
    premium: 0,
    economy: 0,
  });
  const [roomsUsage, setRoomsUsage] = React.useState<RoomsUsage>({
    premium: 0,
    economy: 0,
  });

  const calculateUsage: React.FormEventHandler<HTMLFormElement> = (): void => {
    const guests: Guests = pickGuests(guestsInitial);
    const emptyRooms = calculateEmptyRooms(guests, rooms);

    const economyRoomsUsage: number = getRoomsUsage(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      }),
      rooms.economy
    );

    const premiumRoomsUsage: number = getRoomsUsage(
      fillPremiumRooms({
        guests,
        emptyRooms,
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
