import React, { ReactNode } from "react";
import Image from "next/image";

interface LandingCardProps {
  image: string;
  title: string;
  subtitle: ReactNode;
}

const LandingCard: React.FC<LandingCardProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="relative">
      <div className="rounded-3xl p-px bg-linear-to-b from-[#D8D8D8] to-white w-[386.4002990722656px] h-[509px]">
        <div className="relative w-full h-full rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt="section badge"
            fill
            className="object-cover bg-linear-to-b from-white to-[#E5DBCC]"
          />
        </div>
      </div>

      <div className="absolute bottom-0">
        {/* <div
  className="
    glass-powder w-[386.4002990722656px] h-[64px] rounded-2xl
    bg-[var(--glass-bg)]
    backdrop-blur-[12px]
    border border-[rgba(255,255,255,0.12)]
    shadow-[var(--halo)]
    [mask-image:linear-gradient(to_bottom,transparent,black_22%,black_78%,transparent)]
  "
/> */}
        <div
          className="relative w-[386.4002990722656px] h-[10.1px] 
      bg-linear-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.22)] backdrop-blur-[6.38px] "
        />
        <div
          className="w-full h-[215.1px] rounded-b-[14.88px]
             bg-gradient-to-b from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.05)]
             backdrop-blur-[6.38px]
             shadow-[0_-16px_32px_-12px_rgba(0,0,0,0.25)]"
        >
          <div className="flex-col text-center py-2">
            <h3 className="text-base text-[#F5F5F5] tracking-tighter">
              {title}
            </h3>
            <h1 className="text-[32px] text-white font-semibold my-3 tracking-tighter">
              {subtitle}
            </h1>
            <button
              className="text-white w-[158px] h-[41.451934814453125px] tracking-tight
          bg-linear-to-b from-[#01020F] to-[#2D2E37] rounded-full text-lg font-medium shadow-[0_0_0_1.08px_#151514,0_1.08px_2.16px_1.08px_rgba(21,21,20,0.4),inset_0_1.08px_0_rgba(255,255,255,0.2)]"
            >
              Accounts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
