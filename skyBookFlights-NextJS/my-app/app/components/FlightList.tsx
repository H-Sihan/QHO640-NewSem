//import type {Flight} from '@types/flight'

export interface Flight {
    id: number;
    flightNo: string;
    from: string;
    to: string;
    date: string;
    time: string;
    price: number;
    seatsAvaiable: number;
};

interface FlightListProps {
    flights: Flight[];
    onSelect: (flight: Flight) => void;
};

export default function FlightList({
    flights, onSelect }: FlightListProps) {
    if (flights.length === 0) {
        return (
            <section>
                <h2>Avaiable flights</h2>
                <p>No flights match your search...</p>
            </section>
        )
    }
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

            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.id}>
                        <td>{flight.flightNo}</td>
                        <td>{flight.from}</td>
                        <td>{flight.to}</td>
                        <td>{flight.date}</td>
                        <td>{flight.time}</td>
                        <td>{flight.price}</td>
                        <td>{flight.seatsAvaiable}</td>

                        <td>
                            <button onClick={()=> onSelect(flight)}
                                disabled={flight.seatsAvaiable === 0}>
                                    {flight.seatsAvaiable === 0 ? 'Full' : 'Book'}
                                </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>;
}