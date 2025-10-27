import React from "react";
import Image from "next/image";

function LandingCard() {
  return (
    <div className="relative">
      <Image
        src="/image/landingCenter.png"
        alt="section badge"
        height={509}
        width={357.8761291503906}
      />{" "}
      <div className="absolute bottom-0">
        <div
          className="relative w-[357.88px] h-[10.1px]
            bg-linear-to-b  from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.22)] backdrop-blur-[6.38px]"
        ></div>
        <div
          className="w-full h-[215.1px] 
          rounded-b-[14.88px] 
          bg-linear-to-b from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.05)]
          backdrop-blur-[6.38px]"
        >
          <div className="flex-col  text-center py-2">
            <h3 className="text-base text-[#F5F5F5] tracking-tighter">Transactions</h3>
            <h1 className="text-[32px] text-white font-semibold my-3 tracking-tighter">
              Up to
              <br />
              $1 million
            </h1>{" "}
            <button
              className="w-[158px] h-[41.451934814453125px] tracking-tight
          bg-linear-to-b from-[#01020F] to-[#2D2E37] rounded-full text-lg font-medium shadow-[0_0_0_1.08px_#151514,0_1.08px_2.16px_1.08px_rgba(21,21,20,0.4),inset_0_1.08px_0_rgba(255,255,255,0.2)]"
            >
              Accounts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;




