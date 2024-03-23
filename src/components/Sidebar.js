"use client";
import Image from "next/image";
import image from "../assets/user.png";
import { FaBell } from "react-icons/fa";
import {
  MdMessage,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useState } from "react";

export default function Sidebar({ tab, setTab }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed top-0 xl:static h-full flex items-center text-white">
      {toggle && (
        <div className="flex flex-col h-full min-w-[13.5rem] bg-[#0f337a]">
          <div className="flex justify-between border-b-[2px] p-2 items-center">
            <div className="flex items-center">
              <Image src={image} width={60} className="rounded-full" />
              <h1>Hello, User</h1>
            </div>
            <FaBell />
          </div>
          <div
            onClick={() => setTab(0)}
            className={`flex gap-2 items-center p-4 cursor-pointer ${
              tab == 0 && "bg-black/40"
            }`}
          >
            <MdMessage />
            <h1>Discussion Forum</h1>
          </div>
          <div
            onClick={() => setTab(1)}
            className={`flex gap-2 items-center p-4 cursor-pointer ${
              tab == 1 && "bg-black/40"
            }`}
          >
            <RiMoneyDollarCircleFill />
            <h1>Market Stories</h1>
          </div>
          <div className="flex gap-2 items-center p-4">
            <RiMoneyDollarCircleFill />
            <h1>Sentiments</h1>
          </div>
          <div className="flex gap-2 items-center p-4">
            <RiMoneyDollarCircleFill />
            <h1>Sector</h1>
          </div>
        </div>
      )}
      <div
        className="w-[1rem] h-[5rem] bg-blue-800 flex items-center cursor-pointer"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? <MdArrowBackIos /> : <MdArrowForwardIos />}
      </div>
    </div>
  );
}
