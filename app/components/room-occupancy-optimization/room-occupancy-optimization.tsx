import React from 'react';

import { pickEconomyGuests } from './pick-economy-guests';
import { pickPremiumGuests } from './pick-premium-guests';
import { fillPremiumRooms } from './fill-premium-rooms';
import { fillEconomyRooms } from './fill-economy-rooms';
import { getUsage } from './get-usage';

const guestsInitial = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

export const RoomOccupancyOptimization: React.FunctionComponent = () => {
  const [guests] = React.useState<number[]>(guestsInitial);
  const [premiumRooms, setPremiumRooms] = React.useState<number>(0);
  const [premiumUsage, setPremiumUsage] = React.useState<number>(0);
  const [economyRooms, setEconomyRooms] = React.useState<number>(0);
  const [economyUsage, setEconomyUsage] = React.useState<number>(0);

  const calculateUsage: React.FormEventHandler<HTMLFormElement> = (): void => {
    const economyGuests: number[] = pickEconomyGuests(guests);
    const premiumGuests: number[] = pickPremiumGuests(guests);
    const emptyEconomyRooms: number = economyRooms - economyGuests.length;
    const emptyPremiumRooms: number = premiumRooms - premiumGuests.length;

    const economyUsage: number = getUsage(
      fillEconomyRooms({
        economyGuests,
        premiumGuests,
        emptyEconomyRooms,
        emptyPremiumRooms,
      }),
      economyRooms
    );

    const premiumUsage: number = getUsage(
      fillPremiumRooms({
        emptyEconomyRooms,
        emptyPremiumRooms,
        economyGuests,
        premiumGuests,
      }),
      premiumRooms
    );

    setEconomyUsage(economyUsage);
    setPremiumUsage(premiumUsage);
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
            value={premiumRooms}
            onChange={(event) => {
              setPremiumRooms(Number(event?.target?.value));
            }}
          />

          <p data-testid="premium-test">{premiumRooms}</p>
        </div>

        <div
          className="premium-usage__value"
          data-testid="premium-usage__value"
        >
          {premiumUsage + ' EUR'}
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
            value={economyRooms}
            onChange={(event) => {
              setEconomyRooms(Number(event?.target?.value));
            }}
          />

          <p data-testid="economy-test">{economyRooms}</p>
        </div>

        <div
          className="economy-usage__value"
          data-testid="economy-usage__value"
        >
          {economyUsage + ' EUR'}
        </div>
      </div>

      <button>calculate usage</button>
    </form>
  );
};
