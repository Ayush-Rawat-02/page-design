import { useState } from "react";
import Discussion from "./Discussion";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Main() {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex items-center w-screen h-screen bg-white">
      <Sidebar tab={tab} setTab={setTab} />
      <div className="hidden xl:flex h-full w-full">
        <Discussion>
          <h1 className="text-2xl text-red-500 font-bold">Discussion Forum</h1>
        </Discussion>
        <Stories>
          <h1 className="text-2xl text-red-500 font-bold">Market Stories</h1>
        </Stories>
      </div>
      <div className="block xl:hidden w-full h-screen">
        <div className="flex w-full">
          <div
            onClick={() => {
              setTab(0);
            }}
            className="flex-1 flex justify-center cursor-pointer bg-[#0f337a] hover:bg-[#0a236a] text-white py-2"
          >
            <h1>Discussion</h1>
          </div>
          <div
            onClick={() => {
              setTab(1);
            }}
            className="flex-1 flex justify-center cursor-pointer bg-[#0f337a] hover:bg-[#0a236a] text-white py-2"
          >
            <h1>Market Stories</h1>
          </div>
        </div>
        {tab == 0 ? <Discussion /> : <Stories />}
      </div>
    </div>
  );
}
