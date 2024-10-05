import styles from "./Booking.module.css";

const Booking: React.FC<{ booking: any }> = async ({ booking }) => {
  return (
    <a href={`booking/${booking.id}`} className={styles.bookingLink}>
      <div>
        A Booking on {booking.date} starting at {booking.start_time}
      </div>
    </a>
  );
};

export default Booking;
