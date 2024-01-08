import logoUrl from "../assets/shared/logo.svg";
import hamburgerUrl from "../assets/shared/icon-hamburger.svg";
import closeUrl from "../assets/shared/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <header className="bg-lighter-black p-4 flex justify-between items-center">
      <img src={logoUrl} alt="" className="size-10 rounded-full" />
      <button
        aria-expanded={isExpanded}
        onClick={(event: React.MouseEvent) => {
          event.stopPropagation();
          setIsExpanded((value) => !value);
        }}
        className="z-50"
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
        } right-0 top-0 h-full w-full max-w-64 p-4 pt-20 z-40`}
      >
        <ul className="flex flex-col gap-4 uppercase text-white font-secondary text-xl tracking-widest">
          <li className="flex gap-2 before:content-['00'] before:font-bold py-2">
            <Link to="/">Home</Link>
          </li>
          <li className="flex gap-2 before:content-['01'] before:font-bold py-2">
            <Link to="/destinations">Destination</Link>
          </li>
          <li className="flex gap-2 before:content-['02'] before:font-bold py-2">
            <Link to="/crew">Crew</Link>
          </li>
          <li className="flex gap-2 before:content-['03'] before:font-bold py-2">
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
