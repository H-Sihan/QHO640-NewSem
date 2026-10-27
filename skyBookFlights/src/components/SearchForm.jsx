import React, { useState } from "react";

export default function SearchForm({ onSearch }) {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    return <section>
        <h2>Search Flights</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="from">From: </label>
            <input type="text" id="from" value={from} onChange={e => setFrom(e.target.value)}
                placeholder="Departure From" />

            <label htmlFor="to">To: </label>
            <input type="text" id="to" value={to} onChange={e => setTo(e.target.value)}
                placeholder="Arrival to" />

            <button type="submit">Search</button>
            <button type="button" onClick={showAll}>Show all</button>
        </form>
    </section>

    function handleSubmit(e) {
        e.preventDefault();
        onSearch({ from: from, to: to });
    }

    function showAll() {
        setFrom('');
        setTo('');
        onSearch({ from: '', to: '' })
    }
}