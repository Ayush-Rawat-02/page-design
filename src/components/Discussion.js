import Image from "next/image";
import image from "../assets/user.png";
import { FaRegHeart, FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import discussions from "../../dummy_data/discussionsData";

export default function Discussion({ children }) {
  return (
    <div className="flex-[2] h-[94%] overflow-hidden bg-white py-4">
      <div className="px-8">{children}</div>
      <div className="h-[98%] overflow-y-scroll px-8 no-scrollbar flex-flex-col">
        {discussions.map((item, i) => {
          return (
            <div
              key={i}
              className="flex shadow-3xl justify-between gap-2 my-4 p-4 bg-white"
            >
              <Image
                src={image}
                className="h-[2.25rem] w-[2.25rem] bg-blue-500 rounded-full"
              />
              <div className="flex flex-col w-full gap-2">
                <div className="flex gap-4">
                  <p className="text-[15px] sm:text-lg font-bold text-gray-700 font-[sans-serif]">
                    {item.title}
                  </p>
                  <button className="bg-[#124396] text-[12px] sm:text-sm text-white rounded-xl px-2">
                    Sector 2
                  </button>
                </div>
                <p className="text-gray-700 sm:text-[17px] text-sm">
                  {item.body}
                </p>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <FaRegHeart className="w-[0.8rem] h-[0.8rem] sm:w-auto sm:h-auto" />
                    <p className="text-[12px] sm:text-[15px]">{item.likes}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineRemoveRedEye className="w-[0.8rem] h-[0.8rem] sm:w-auto sm:h-auto" />
                    <p className="text-[12px] sm:text-[15px]">{item.views}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaRegCommentAlt className="w-[0.8rem] h-[0.8rem] sm:w-auto sm:h-auto" />
                    <p className="text-[12px] sm:text-[15px]">
                      {item.comments} Comments
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IoShareSocialOutline className="w-[0.8rem] h-[0.8rem] sm:w-auto sm:h-auto" />
                    <p className="text-[12px] sm:text-[15px]">Share</p>
                  </div>
                </div>
              </div>
              <p className="text-blue-600 text-[12px] sm:text-sm w-[5rem] sm:w-[6rem]">
                2 mins ago
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
