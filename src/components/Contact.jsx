import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log("FAILED...", error.text);
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
        <div className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="justify-center flex flex-col "
          >
            <label>Name</label>
            <input type="text" name="user_name" className="input-box md:w-[600px]" />
            <label>Email</label>
            <input type="email" name="user_email" className="input-box  md:w-[600px]" />
            <label>Message</label>
            <textarea name="message" className="input-box  md:w-[600px]" />
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
