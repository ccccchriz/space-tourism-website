import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "./technology/image-launch-vehicle-portrait.jpg",
      landscape: "./technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "./technology/image-spaceport-portrait.jpg",
      landscape: "./technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "./technology/image-space-capsule-portrait.jpg",
      landscape: "./technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default function Technology() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <MainLayout background="technology">
      <div className="grid place-items-center desktop:grid-cols-[auto_1fr_auto] w-full desktop:pl-36 gap-x-12 gap-y-4 ">
        <h2 className="flex gap-4 uppercase font-secondary text-white before:content-['03'] before:opacity-25 tracking-widest mt-8 mb-8 desktop:text-3xl desktop:col-[1/4] desktop:w-full">
          Space launch 101
        </h2>
        <picture className="mb-8 desktop:mb-0 desktop:row-[2/4] desktop:col-[3/4]">
          <source
            media="(min-width: 64rem)"
            srcSet={`${data[currentTab].images.portrait}`}
          />
          <img src={data[currentTab].images.landscape} alt="" />
        </picture>
        <div
          role="tablist"
          className="flex flex-wrap gap-4 mx-4 mb-4 desktop:row-[2/4] desktop:flex-col"
        >
          {data.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index == currentTab}
              onClick={() => setCurrentTab(index)}
              className={`tracking-widest uppercase font-secondary text-white p-4 border border-white rounded-full size-10 flex justify-center items-center border-opacity-25 desktop:size-20 ${
                index == currentTab
                  ? "bg-white !text-black"
                  : "hover:border-opacity-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <h3 className="uppercase font-primary text-center text-light-purple grid mt-4 desktop:text-left desktop:w-full desktop:[align-self:end]">
          The terminology...
          <span className="text-3xl text-white">{data[currentTab].name}</span>
        </h3>
        <p className="font-secondary text-center text-light-purple mx-4 mb-16 mt-4 tablet:max-w-[28rem] leading-7 desktop:text-left desktop:max-w-none desktop:[align-self:start] desktop:ml-0">
          {data[currentTab].description}
        </p>
      </div>
    </MainLayout>
  );
}
