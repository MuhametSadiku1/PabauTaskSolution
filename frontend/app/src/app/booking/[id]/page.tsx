import styles from "./BookingDetail.module.css";

async function getBooking(id) {
  const res = await fetch(
    `http://host.docker.internal:5000/api/booking/${id}`,
    {
      cache: "no-store",
      mode: "no-cors",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BookingDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const booking = await getBooking(id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Booking Details</h1>
      <p className={styles.details}>
        This Booking is with {booking.doctor_name} for {booking.service} and it
        ends at {booking.end_time}.
      </p>
      <a href="/" className={styles.backButton}>
        Back to Home
      </a>
    </div>
  );
};

export default BookingDetailPage;
