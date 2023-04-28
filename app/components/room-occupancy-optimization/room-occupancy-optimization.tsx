'use client';
import React, { FormEvent } from 'react';
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
  const [roomsUsage, setRoomsUsage] = React.useState<RoomsUsage>({
    premium: 0,
    economy: 0,
  });
  const premiumRoomsInputRef = React.useRef<HTMLInputElement>(null);
  const economyRoomsInputRef = React.useRef<HTMLInputElement>(null);

  const calculateUsage: React.FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    if (!premiumRoomsInputRef.current || !economyRoomsInputRef.current) {
      return;
    }

    const rooms: Rooms = {
      premium: Number(premiumRoomsInputRef.current.value),
      economy: Number(economyRoomsInputRef.current.value),
    };

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
    <section className="room-occupancy-optimization bg-orange-400 rounded-xl py-8 px-10 text-gray-800">
      <header className="room-occupancy-optimization__header text-center text-2xl mb-5">
        <h2 className="room-occupancy-optimization__title">
          Room occupancy optimization
        </h2>
      </header>
      <form
        onSubmit={calculateUsage}
        className="grid grid-cols-2 grid-rows-2 gap-3 justify-center"
      >
        <div className="room-occupancy-optimization__premium-usage premium-usage">
          <div className="premium-usage__rooms">
            <label
              htmlFor="premium-usage__rooms-input"
              className="premium-usage__rooms-label"
            >
              Premium Rooms&nbsp;
            </label>
            <input
              className="premium-usage__rooms-input text-black"
              id="premium-usage__rooms-input"
              type="number"
              ref={premiumRoomsInputRef}
            />
          </div>

          <h3 className="premium-usage__title text-right">
            <span>Usage&nbsp;</span>
            <span
              className="premium-usage__value"
              data-testid="premium-usage__value"
            >
              {roomsUsage.premium + ' EUR'}
            </span>
          </h3>
        </div>

        <div className="room-occupancy-optimization__economy-usage">
          <div className="economy-usage__rooms">
            <label
              htmlFor="economy-usage__rooms-input"
              className="economy-usage__rooms-label"
            >
              Economy Rooms&nbsp;
            </label>
            <input
              className="economy-usage__rooms-input text-black"
              id="economy-usage__rooms-input"
              type="number"
              ref={economyRoomsInputRef}
            />
          </div>

          <div className="economy-usage__title text-right">
            <span>Usage&nbsp;</span>
            <span
              className="economy-usage__value"
              data-testid="economy-usage__value"
            >
              {roomsUsage.economy + ' EUR'}
            </span>
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="room-occupancy-optimisation__button rounded-3xl bg-black text-orange-400 px-8 hover:bg-gray-800 active:translate-y-0.5">
            calculate usage
          </button>
        </div>
      </form>
    </section>
  );
};
