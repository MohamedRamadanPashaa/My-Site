import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status, setNotification } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses} onClick={() => setNotification()}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
