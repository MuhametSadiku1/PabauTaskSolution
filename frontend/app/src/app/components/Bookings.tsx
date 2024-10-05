import Booking from "./Booking";
import styles from "./Bookings.module.css";

const Bookings: React.FC<{ bookings: any[] }> = async ({ bookings }) => {
  return (
    <div className={styles.bookingListContainer}>
      {bookings.map((booking, index) => (
        <Booking key={index} booking={booking} />
      ))}
    </div>
  );
};

export default Bookings;
