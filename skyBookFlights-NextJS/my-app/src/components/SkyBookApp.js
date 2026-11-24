'use client';
import flightData from '@/data/flights';
import FlightList from './FlightList';
import { useState } from 'react';

export default function SkyBookApp() {
  const [search, setSearch] = useState({from: ",to: "});
  
  function matches(city, searchText){
    const text = searchText.trim().toLowerCase();
    return text === city.toLowerCase() === text;
  }
  
  
  function selectFlight(flight) {
    alert(`You chose flight ${flight.flightNo}`);
  }

  return (
    <>
      <header><h1>SkyBook Flights</h1></header>
      <main>
        <FlightList flights={flightData} onSelect={selectFlight} />
      </main>
    </>
  );
}
