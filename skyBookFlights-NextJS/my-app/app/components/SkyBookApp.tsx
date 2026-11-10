'use client'
import flightData from '@/app/data/flights';
import FlightList from './FlightList';
import type { Flight } from '@/types/flight';

export default function SkyBookApp() {
    function selectFlight(flight: Flight) {
        alert(`You chose flights ${flight.flightNo}`);
    }

    return (
        <>
            <header>
                <h1>SkyBook Flight</h1>
            </header>

            <main>
                <FlightList
                    flights={flightData}
                    onSelect={selectFlight}>
                </FlightList>

            </main>

        </>
    );
}