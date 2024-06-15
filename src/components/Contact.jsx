import "../assets/css/Contact.css";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <>
      <h1 className="contact-me">Contact US</h1>
      <form action="" className="form-contact">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
        <input
          type="submit"
          value="Submit"
          className="btn-submit"
          id="submit"
          name="submit"
        />
      </form>
      <button className="btn-back" onClick={handleBack}>
        Back to Home
      </button>
    </>
  );
};

export default Contact;
