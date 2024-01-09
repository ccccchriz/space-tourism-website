import MainLayout from "../layouts/MainLayout";
import douglashUrl from "../assets/crew/image-douglas-hurley.webp";
import markUrl from "../assets/crew/image-mark-shuttleworth.webp";
import victorUrl from "../assets/crew/image-victor-glover.webp";
import anoushehUrl from "../assets/crew/image-anousheh-ansari.webp";
import { useState } from "react";

const data = [
  {
    name: "Douglas Hurley",
    image: douglashUrl,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: markUrl,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: victorUrl,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: anoushehUrl,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export default function Crew() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <MainLayout background="crew">
      <div className="grid place-items-center w-full h-full">
        <h2 className="w-full flex justify-center gap-4 uppercase font-secondary text-white before:content-['02'] before:opacity-25 tracking-widest mt-8 mb-8 tablet:pl-10 tablet:justify-start">
          Meet your crew
        </h2>
        <img
          src={data[currentTab].image}
          alt=""
          className="max-w-64 mx-4 border-b-2 border-b-light-purple tablet:row-[5/6] tablet:border-none tablet:mb-0 tablet:max-w-[28rem] tablet:mt-10"
        ></img>
        <div role="tablist" className="flex flex-wrap gap-4 mt-4 row-[4/5]">
          {data.map((el, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index == currentTab}
              onClick={() => setCurrentTab(index)}
              className={`tracking-widest uppercase font-secondary size-6 rounded-full bg-white bg-opacity-15 ${
                index == currentTab ? "!bg-opacity-100 " : "hover:bg-opacity-50"
              }`}
            >
              <span className="sr-only">{el.role}</span>
            </button>
          ))}
        </div>
        <h3 className="uppercase font-primary text-center text-white text-opacity-50 grid mt-4">
          {data[currentTab].role}
          <span className="text-2xl text-white text-opacity-100">
            {data[currentTab].name}
          </span>
        </h3>
        <p className="font-secondary text-center text-light-purple mx-4 mb-16 mt-4 tablet:max-w-[36rem] leading-7">
          {data[currentTab].bio}
        </p>
      </div>
    </MainLayout>
  );
}
