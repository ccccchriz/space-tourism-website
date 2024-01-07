import MainLayout from "../../layouts/MainLayout";
import moonUrl from "../../assets/destination/image-moon.webp";
import marsUrl from "../../assets/destination/image-mars.webp";
import europaUrl from "../../assets/destination/image-europa.webp";
import titanUrl from "../../assets/destination/image-titan.webp";
import { useState } from "react";

const data = [
  {
    name: "Moon",
    image: moonUrl,
    alt: "earths moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsUrl,
    alt: "planet mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaUrl,
    alt: "titan, jupiters moon",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanUrl,
    alt: "titan, saturns moon",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function Destinations() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <MainLayout background="destination">
      <h2 className="flex gap-4 uppercase font-secondary text-white before:content-['01'] before:opacity-25 tracking-widest">
        Pick your destination
      </h2>
      <img
        src={data[currentTab].image}
        alt={data[currentTab].alt}
        className="max-w-24"
      ></img>
      <ul className="flex flex-wrap gap-4 mx-4">
        {data.map((el, index) => (
          <li
            key={index}
            className={`font-secondary text-white ${
              index == currentTab && "border-b-[0.1875rem] border-b-white"
            }`}
          >
            <button
              role="tab"
              aria-selected={index == currentTab}
              onClick={() => setCurrentTab(index)}
              className="tracking-widest uppercase"
            >
              {el.name}
            </button>
          </li>
        ))}
      </ul>
      <h3 className="font-primary text-6xl text-white uppercase">
        {data[currentTab].name}
      </h3>
      <p className="font-secondary text-light-purple text-center mx-4">
        {data[currentTab].description}
      </p>
      <p className="uppercase tracking-widest font-secondary text-light-purple grid text-center">
        Average distance{" "}
        <span className="font-primary text-3xl text-white tracking-normal">
          {data[currentTab].distance}
        </span>
      </p>
      <p className="uppercase tracking-widest font-secondary text-light-purple grid text-center">
        Travel time{" "}
        <span className="font-primary text-3xl text-white tracking-normal">
          {data[currentTab].travel}
        </span>
      </p>
    </MainLayout>
  );
}
