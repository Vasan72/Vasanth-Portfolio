import React from "react";

const Contact = () => {
  const config = {
    email: "vasanthakumarvk677429@gmail.com",
    phone_no: "9360367989",
  };
  return (
    <section
      id="contact"
      className="flex flex-row py-32 px-5 bg-primary text-black justify-center"
    >
      <div className="w-full flex items-center flex-col ">
        <h1 className="text-4xl border-b-4 mb-5  border-[#ff4321] font-bold w-[160px]">
          Contact
        </h1>
        <p className=" pb-3 ">
          If you want to discuss more in details, please contact me
        </p>
        <p className="pb-3">
          <span className="pr-1 font-bold">Email:</span>
          {config.email}
        </p>
        <p className="pb-3">
          <span className="pr-1 font-bold">Phone:</span>
          {config.phone_no}
        </p>
      </div>
    </section>
  );
};

export default Contact;
