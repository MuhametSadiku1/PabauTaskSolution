import Bookings from "./components/Bookings";
import styles from "./Home.module.css";

async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store",
    mode: "no-cors",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home: React.FC = async () => {
  const bookings = await getBookings();

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Current Booking Count: {bookings.length}
      </h1>
      <a href={"new-booking"} className={styles.button}>
        Add Booking
      </a>
      <Bookings bookings={bookings} />
    </div>
  );
};

export default Home;
