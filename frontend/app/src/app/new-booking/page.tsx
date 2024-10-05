import { useRouter } from "next/router";
import styles from "./NewBooking.module.css";

const NewBookingPage: React.FC = async () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        alert("Booking successful: " + data);
        event.target.reset();
        router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error with your booking. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="service">Service:</label>
          <input type="text" id="service" name="service" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="doctor_name">Doctor's Name:</label>
          <input type="text" id="doctor_name" name="doctor_name" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="start_time">Start Time:</label>
          <input type="text" id="start_time" name="start_time" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="end_time">End Time:</label>
          <input type="text" id="end_time" name="end_time" required />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default NewBookingPage;
