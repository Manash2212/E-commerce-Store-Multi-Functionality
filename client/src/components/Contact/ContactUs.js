import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const ContactUs = () => {
  const [present, setPresent] = useState(true);
  return (
    <div className="contact my-10 w-full">
      <div className="container py-10 px-5 w-full mx-auto flex flex-col justify-center font-primary ">
        <div className="col1 w-full text-center py-5">
          <h1 className=" text-xl  uppercase">Contact us</h1>
        </div>
        <div className="col2 my-20 flex justify-around text-center border-2 border-red-500 py-10">
          <div className="child flex flex-col items-center justify-center gap-4 font-light tracking-wider border-2 border-red-500 relative w-[200px] h-[120px]">
            <h3 className="text-xl">Phone</h3>
            <IoCallOutline className="text-2xl" />
            <h3 className=" ">+91-8583866889</h3>
          </div>
          <div className="child flex flex-col items-center justify-center gap-4 font-light tracking-wider">
            <h3 className="text-xl">Whatsapp</h3>
            <FaWhatsapp className="text-2xl" />
          </div>
          <div className="child flex flex-col items-center justify-center gap-4 font-light tracking-wider">
            <h3 className="text-xl">E-mail</h3>
            <MdOutlineMarkEmailUnread className="text-2xl" />
          </div>
        </div>
        <div className="col3">
          <h2 className="">
            Phone : Available Monday to Saturday, 9:30 am - 7:30 pm
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
