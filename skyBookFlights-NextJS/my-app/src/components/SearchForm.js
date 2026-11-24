'use client';
import { useState } from "react";

export default function SearchForm({ onSearch }) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        onSearch({ from, to });
    }

    function showAll() {
        setFrom("");
        setTo("");
        onSearch({ from: "", to: "" });
    }

    return (
        <section>
            <h2>Search Flights</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="from">From</label>
                <input id="from" value={from}
                    onChange={(event) => setFrom(event.target.value)}
                    placeholder="e.g. London" />

                <label htmlFor="to">To</label>
                <input id="to" value={to}
                    onChange={(event) => setFrom(event.target.value)}
                    placeholder="e.g. Belfast" />

                <button type="submit">Search</button>
                <button type="button" onClick={showAll}>Show all</button>
            </form>
        </section>
    );
}