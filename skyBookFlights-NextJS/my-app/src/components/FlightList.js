export default function FlightList({ flights, onSelect }) {
  if (flights.length === 0) {
    return (
      <section>
        <h2>Available flights</h2>
        <p>No flights match your search.</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Available flights</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Flight</th><th>From</th><th>To</th><th>Date</th>
              <th>Time</th><th>Price</th><th>Seats left</th><th></th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flightNo}</td>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.date}</td>
                <td>{flight.time}</td>
                <td>£{flight.price}</td>
                <td>{flight.seatsAvailable}</td>
                <td>
                  <button
                    onClick={() => onSelect(flight)}
                    disabled={flight.seatsAvailable === 0}
                  >
                    {flight.seatsAvailable === 0 ? 'Full' : 'Book'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
