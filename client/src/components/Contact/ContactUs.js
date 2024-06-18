import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact my-20 w-full">
      <div className="container py-5 px-5 w-full mx-auto flex flex-col justify-center font-primary ">
        <div className="col1 w-full text-center py-2">
          <h1 className=" text-xl  uppercase underline underline-offset-8">
            Contact us
          </h1>
        </div>
        <div className="col2 my-20 flex justify-around text-center shadow-md py-10">
          <div className="child flex flex-1 flex-col items-center justify-center gap-4 font-light tracking-wider ">
            <h3 className="text-xl">Phone</h3>
            <IoCallOutline className="text-2xl" />
            <h3 className="  opacity-0 hover:opacity-100 cursor-pointer">
              033-3134-3134
            </h3>
          </div>
          <div className="child flex flex-col items-center justify-center gap-4 font-light tracking-wider border-x-2 border-gray-200 flex-1">
            <h3 className="text-xl">Whatsapp</h3>
            <FaWhatsapp className="text-2xl" />
            <h3 className=" opacity-0 hover:opacity-100 cursor-pointer ">
              +91-8583866889
            </h3>
          </div>
          <div className="child flex flex-1 flex-col items-center justify-center gap-4 font-light tracking-wider">
            <h3 className="text-xl">E-mail</h3>
            <MdOutlineMarkEmailUnread className="text-2xl" />
            <h3 className=" opacity-0 hover:opacity-100 cursor-pointer">
              manashhalder2212@gmail.com
            </h3>
          </div>
        </div>
      </div>
      <div className="col3 mb-2 text-center bg-gray-100/50 py-5 ">
        <h2 className="">
          Phone : Available Monday to Saturday, 9:30 am - 7:30 pm
        </h2>
      </div>
    </div>
  );
};

export default ContactUs;
