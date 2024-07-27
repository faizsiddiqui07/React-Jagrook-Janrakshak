import React from "react";
import moment from 'moment'
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import bg_header from "../assets/backgroundImage.png";
import { Link } from "react-router-dom";
import Header_Category from './Header_Category'

const Header = () => {
  return (
    <div>
      <div className="px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]">
        <span className="text-[12px] sm:text-[13px] font-medium">
          {moment().format("LLLL")}
        </span>
        <div className="flex gap-x-[2px]">
          <Link
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:bg-[#ffffff17]"
            to="https://www.google.com/"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:bg-[#ffffff17]"
            to=""
          >
            <FaInstagram />
          </Link>
          <Link
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:bg-[#ffffff17]"
            to=""
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:bg-[#ffffff17]"
            to=""
          >
            <FaXTwitter />
          </Link>
          <Link
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b] hover:bg-[#ffffff17]"
            to=""
          >
            <AiFillYoutube />
          </Link>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: "cover",
        }}
      >
        <div className="px-8 py-14">
          <div className="flex justify-center items-center flex-wrap">
            <div className="md:w-4/12 w-full">
              <div className="flex flex-col justify-center items-center md:items-start">
                <Link to={"/"}>
                  <h2 className="text-[#52b6ef] text-3xl md:text-4xl font-semibold">
                    <span className="text-[#00a650]">जागरुक</span> जनरक्षक
                  </h2>
                </Link>
              </div>
            </div>
            <div className="md:w-8/12 w-full hidden md:block">
              <div className="w-full flex justify-end"></div>
            </div>
          </div>
        </div>
      </div>
      <Header_Category />
    </div>
  );
};

export default Header;
