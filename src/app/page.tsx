import LandingCard from "@/components/landing/LandingCard";
import LandingText from "@/components/landing/LandingText";

export default function Home() {
  const cards = [
    {
      image: "/image/landingLeft.png",
      title: "Our motto",
      subtitle: (
        <>
          For traders,
          <br /> by traders
        </>
      ),
    },
    {
      image: "/image/landingCenter.png",
      title: "Transactions",
      subtitle: (
        <>
          Up to
          <br /> $1 million
        </>
      ),
    },
    {
      image: "/image/landingRight.png",
      title: "Only Broker With",
      subtitle: (
        <>
          A dedicated
          <br /> trading Room
        </>
      ),
    },
  ];

  return (
    <main>
      <div className="flex items-center justify-center w-screen h-screen relative">
        {" "}
        <div className="absolute circle-reveal my-80% flex-col">
          <div className="text-center slide-down">
            <h1 className="text-primary-text text-5xl font-semibold tracking-tighter">
              We are here to smooth your trading path
            </h1>
            <h3
              className="text-primary-text text-[20px] font-normal tracking-ti
            ghter mt-8"
            >
              By offering all account types under an A-Book framework, we are
              the only <br />
              broker that stands beside you—not against you.{" "}
            </h3>
            <button className="text-white bg-[#222CE4] text-lg w-[186.7105255126953px] h-[43px] rounded-full py-1.5 px-3 mt-7">
              Register Now
            </button>
          </div>
          <div className="flex w-screen h-160 justify-center items-center gap-5 ">
            {cards.map((card, index) => (
              <LandingCard
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
        <LandingText />
      </div>
    </main>
  );
}
