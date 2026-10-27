import React, { useState } from "react";
import flights from "./data/flights";
import FlightList from "./components/FlightList";
import SearchForm from "./components/SearchForm";

export default function App() {
    const [search, setSearch] = useState({ from: '', to: '' });

    const results = flights.filter(flight =>
        matches(flight.from, search.from) && matches(flight.to, search.to));

    return <div>
        <header>
            <h1>SkyBook Flights</h1>
        </header>
        <main>
            <SearchForm onSearch={setSearch} />
            <FlightList flights={flights} onSelect={selectFlight} />
        </main>
    </div>;

    function matches(city, searchText) {
        const text = searchText.trim().toLowerCase();
        return text === '' || city.toLowerCase === text;
    }

    function selectFlight(flight) {
        alert(`You chose flight ${flight.flight_no}`);
    }
}