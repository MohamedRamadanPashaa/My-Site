import { useEffect, useState } from "react";
import Notification from "../ui/notification";

import classes from "./contact-form.module.css";

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [notification, setNotification] = useState();

  async function sendMessage(event) {
    event.preventDefault();
    setNotification({
      status: "pending",
      title: "Sending Message...",
      message: "Your message is on it's way",
    });

    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      } else {
        console.log(data);
        setEnteredEmail("");
        setEnteredName("");
        setEnteredMessage("");
        setNotification({
          status: "success",
          title: "Success!",
          message: "Message sent successfully!",
        });
      }
    } catch (error) {
      console.log(error);
      setNotification({
        status: "error",
        title: "Error!",
        message: error.message || "Something went wrong!",
      });
    }
  }

  useEffect(() => {
    if (notification && notification.status !== "pending") {
      const timer = setTimeout(() => {
        setNotification();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification {...notification} setNotification={setNotification} />
      )}
    </section>
  );
};

export default ContactForm;
