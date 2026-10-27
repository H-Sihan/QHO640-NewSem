import React from "react";

export default function FlightList({flights, onSelect}){
    if (flights.length === 0){
        return <section>
            <h2>Available flights</h2>
            <p>No flights match your search</p>
        </section>;
    }

    const rows = flights.map(flight => 
            <tr key = {flight.id}>
                <td>{flight.flight_no}</td>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.date}</td>
                <td>{flight.time}</td>
                <td>{flight.price}</td>
                <td>{flight.seatAvailable}</td>
                <td>
                    <button onClick={() => onSelect(flight)}
                        disabled={flight.seatAvailable === 0}>
                            {flight.seatAvailable === 0 ? 'Full' : 'Book'}
                        </button>
                </td>
            </tr>
        );

        return <section>
            <h2>Available flights</h2>
            <table>
                <thead>
                    <tr>
                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Seat left</th><th></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </section>;
}