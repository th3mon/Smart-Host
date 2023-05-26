'use client';
import React, { FormEvent } from 'react';
import { getPremiumAndUpgradedEconomyGuests } from './get-premium-and-upgraded-economy-guests';
import { dropUpgradedGuests } from './drop-upgraded-guests';
import { getRoomsUsage } from './get-rooms-usage';
import { Guests, pickGuests } from './pick-guests';
import { calculateEmptyRooms, EmptyRooms } from './calculate-empty-rooms';
import { formatCurrency } from './format-currenct';

export type Rooms = {
  premium: number;
  economy: number;
};

type RoomsUsage = {
  premium: number;
  economy: number;
};

export interface RoomOccupancyOptimizationProps {
  guests: number[];
}

export const RoomOccupancyOptimization: React.FunctionComponent<
  RoomOccupancyOptimizationProps
> = ({ guests: guestsInitial }) => {
  const [roomsUsage, setRoomsUsage] = React.useState<RoomsUsage>({
    premium: 0,
    economy: 0,
  });
  const premiumRoomsInputRef: React.RefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null);
  const economyRoomsInputRef: React.RefObject<HTMLInputElement> =
    React.useRef<HTMLInputElement>(null);

  const calculateUsage: React.FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    if (
      !premiumRoomsInputRef.current ||
      !economyRoomsInputRef.current ||
      !guestsInitial
    ) {
      return;
    }

    const rooms: Rooms = {
      premium: Number(premiumRoomsInputRef.current.value),
      economy: Number(economyRoomsInputRef.current.value),
    };

    const guests: Guests = pickGuests(guestsInitial);
    const emptyRooms: EmptyRooms = calculateEmptyRooms(guests, rooms);

    const economyRoomsUsage: number = getRoomsUsage(
      dropUpgradedGuests({
        guests,
        emptyRooms,
      }),
      rooms.economy
    );

    const premiumRoomsUsage: number = getRoomsUsage(
      getPremiumAndUpgradedEconomyGuests({
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
    <section className="room-occupancy-optimization bg-gray-100 rounded-xl py-7 px-7 text-gray-800">
      <header className="room-occupancy-optimization__header mb-5">
        <h2 className="room-occupancy-optimization__title font-bold text-2xl capitalize">
          Room occupancy optimization
        </h2>
      </header>
      <form onSubmit={calculateUsage} className="flex flex-col">
        <div className="room-occupancy-optimization__premium-usage premium-usage">
          <div className="premium-usage__rooms flex flex-col">
            <label
              htmlFor="premium-usage__rooms-input"
              className="premium-usage__rooms-label"
            >
              Premium Rooms&nbsp;
            </label>
            <input
              className="premium-usage__rooms-input text-gray-600 border border-gray-400 leading-8 px-2 my-2 focus:border-2 focus:border-gray-700 focus:mb-1.5 focus:outline-none"
              id="premium-usage__rooms-input"
              type="number"
              min="0"
              ref={premiumRoomsInputRef}
            />
          </div>
        </div>

        <div className="room-occupancy-optimization__economy-usage mb-4">
          <div className="economy-usage__rooms flex flex-col">
            <label
              htmlFor="economy-usage__rooms-input"
              className="economy-usage__rooms-label"
            >
              Economy Rooms&nbsp;
            </label>
            <input
              className="economy-usage__rooms-input text-gray-600 border border-gray-400 leading-8 px-2 my-2 focus:border-2 focus:border-gray-700 focus:mb-1.5 focus:outline-none"
              id="economy-usage__rooms-input"
              type="number"
              min="0"
              ref={economyRoomsInputRef}
            />
          </div>
        </div>

        <div className="col-span-2 flex justify-center">
          <button className="room-occupancy-optimisation__button bg-pink-600 text-white font-bold min-w-full py-2 capitalize hover:bg-pink-700 transition active:translate-y-0.5">
            calculate usage
          </button>
        </div>
      </form>

      <footer className="room-occupancy-optimization__calculated-usage calculated-usage mt-8">
        <h2 className="calculated-usage__header capitalize text-xl mb-4">
          Calculated usage&nbsp;
        </h2>

        <div className="calculated-usage__values">
          <h3 className="calculated-usage-value__header">Premium&nbsp;</h3>
          <p
            className="calculated-usage__value calculated-usage__premium text-right font-bold"
            data-testid="premium-usage-value"
          >
            {formatCurrency(roomsUsage.premium)}
          </p>

          <h3 className="calculated-usage-value__header">Economy&nbsp;</h3>
          <p
            className="calculated-usage__value calculated-usage__economy text-right font-bold"
            data-testid="economy-usage-value"
          >
            {formatCurrency(roomsUsage.economy)}
          </p>

          <h3 className="calculated-usage-value__header">Summary&nbsp;</h3>
          <p className="calculated-usage__value calculated-usage__summary text-right font-bold">
            {roomsUsage.premium + roomsUsage.economy + ' EUR'}
          </p>
        </div>
      </footer>
    </section>
  );
};
