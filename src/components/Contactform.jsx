import React, { useState } from "react";
import axios from "axios";

const Contactform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://server-nec1.onrender.com/client", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        console.log(response.data);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className=" text-[32px] font-LeagueGothic text-Secondary">
            SEND A MESSAGE
          </h1>
        </div>
        <div>
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <div className="flex gap-5 max-md:flex-wrap">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none flex-1 font-Inter font-light"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none flex-1 font-Inter font-light"
              />
            </div>
            <div className=" flex-1 flex">
              <textarea
                name="text"
                id="subject"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" p-4 rounded-xl bg-Primary text-[16px] text-white 
                placeholder:text-Ter3 placeholder:text-[16px] outline-none h-[200px] w-full font-Inter font-light "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className=" bg-Secondary text-Primary font-Inter font-bold p-4 rounded-xl w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
