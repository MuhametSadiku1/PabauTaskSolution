"use client";

import { useRouter } from "next/navigation";
import styles from "./Form.module.css";

const Form: React.FC = async () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("http://host.docker.internal:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    alert("Booking successful: " + data);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="service">Service:</label>
        <input type="text" id="service" name="service" required />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="doctor_name">Doctor&apos;s Name:</label>
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
  );
};

export default Form;
