import logoUrl from "../assets/shared/logo.svg";
import hamburgerUrl from "../assets/shared/icon-hamburger.svg";
import closeUrl from "../assets/shared/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LocationState {
  from: {
    pathname: string;
  };
}

export default function Header() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const nav = useRef<HTMLElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (!nav.current!.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  const handleKeyboard = (event: KeyboardEvent) => {
    if (event.key == "Escape") {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, []);

  let location: string | number = useLocation().pathname;

  switch (location) {
    case "/destinations":
      location = 1;
      break;
    case "/crew":
      location = 2;
      break;
    case "/technology":
      location = 3;
      break;
    default:
      location = 0;
  }

  console.log(location);

  return (
    <header className="bg-lighter-black p-4 flex justify-between items-center">
      <Link to="/">
        <img
          src={logoUrl}
          alt="Space Tourism logo - home"
          className="size-10 rounded-full tablet:ml-6"
        />
      </Link>

      <button
        aria-expanded={isExpanded}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          setIsExpanded((value) => !value);
        }}
        className="z-50 tablet:hidden"
      >
        {isExpanded ? (
          <img src={closeUrl} alt="close menu"></img>
        ) : (
          <img src={hamburgerUrl} alt="open mneu"></img>
        )}
      </button>
      <nav
        ref={nav}
        className={`bg-opacity-5 bg-black backdrop-blur-2xl ${
          isExpanded ? "absolute" : "hidden"
        } tablet:flex right-0 top-0 h-full w-full max-w-64 tablet:max-w-min p-4 pt-20 tablet:pt-4 z-40`}
      >
        <ul className="flex flex-col tablet:flex-row gap-4 uppercase text-white font-secondary text-xl tracking-widest">
          <li
            className={`flex gap-2 before:content-['00'] before:font-bold tablet:before:content-none py-2 tablet:border-b-2 tablet:border-opacity-0 tablet:border-b-white ${
              location == 0
                ? "tablet:border-opacity-100"
                : "tablet:hover:border-opacity-25"
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`flex gap-2 before:content-['00'] before:font-bold tablet:before:content-none py-2 tablet:border-b-2 tablet:border-opacity-0 tablet:border-b-white ${
              location == 1
                ? "tablet:border-opacity-100"
                : "tablet:hover:border-opacity-25"
            }`}
          >
            <Link to="/destinations">Destination</Link>
          </li>
          <li
            className={`flex gap-2 before:content-['00'] before:font-bold tablet:before:content-none py-2 tablet:border-b-2 tablet:border-opacity-0 tablet:border-b-white ${
              location == 2
                ? "tablet:border-opacity-100"
                : "tablet:hover:border-opacity-25"
            }`}
          >
            <Link to="/crew">Crew</Link>
          </li>
          <li
            className={`flex gap-2 before:content-['00'] before:font-bold tablet:before:content-none py-2 tablet:border-b-2 tablet:border-opacity-0 tablet:border-b-white ${
              location == 3
                ? "tablet:border-opacity-100"
                : "tablet:hover:border-opacity-25"
            }`}
          >
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
