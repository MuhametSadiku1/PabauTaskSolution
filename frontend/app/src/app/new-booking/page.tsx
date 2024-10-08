import styles from "./NewBooking.module.css";
import Form from "../components/Form";

const NewBookingPage: React.FC = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Booking Form</h1>
      <Form />
    </div>
  );
};

export default NewBookingPage;
