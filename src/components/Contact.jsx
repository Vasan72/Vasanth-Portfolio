import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [inputError, setInputError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setInputError("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_g7x7acs",
        "template_tg4zcrk",
        form.current,
        "g21vgIL33BgluOnDZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true);
          setInputError("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setInputError("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="md:w-full flex flex-row py-20 px-4 md:px-16 bg-primary text-black justify-center"
    >
      <div className="flex flex-col justify-center items-center px-5">
        <h1 className="text-4xl border-b-4 border-[#ff4321] font-bold mb-5 w-[190px] ">
          ContactUs
        </h1>
        {inputError && <p className="text-red-500 mb-5">{inputError}</p>}
        {messageSent && (
          <p className="text-green-500 mb-5">Message sent successfully!</p>
        )}
        <div className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="justify-center flex flex-col "
          >
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="input-box hover:outline outline-[#ff4321] outline-2 md:w-[600px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="input-box hover:outline outline-[#ff4321] outline-2 md:w-[600px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea
              name="message"
              className="input-box hover:outline outline-[#ff4321] outline-2 md:w-[600px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input
              type="submit"
              value="Send"
              className="py-2 px-1 bg-[#ff4321]  mt-5 rounded-md  md:w-[600px]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
