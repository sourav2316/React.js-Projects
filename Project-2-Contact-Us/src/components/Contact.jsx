import styles from "../components/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h1 className={`${styles.contact}`}>CONTACT US</h1>
      <p className={`${styles.contactText}`}>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHEATHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>
    </div>
  );
};

export default Contact;
