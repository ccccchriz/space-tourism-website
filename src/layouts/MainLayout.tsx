import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  background: keyof typeof backgrounds;
}

const backgrounds = {
  home: "bg-cover bg-[url('/home/background-home-mobile.jpg')] tablet:bg-[url('/home/background-home-tablet.jpg')] desktop:bg-[url('/home/background-home-desktop.jpg')]",
  destination:
    "bg-cover bg-[url('/destination/background-destination-mobile.jpg')] tablet:bg-[url('/destination/background-destination-tablet.jpg')] desktop:bg-[url('/destination/background-destination-desktop.jpg')]",
  crew: "bg-cover bg-[url('/crew/background-crew-mobile.jpg')] tablet:bg-[url('/crew/background-crew-tablet.jpg')] desktop:bg-[url('/crew/background-crew-desktop.jpg')]",
  technology:
    "bg-cover bg-[url('/technology/background-technology-mobile.jpg')] tablet:bg-[url('/technology/background-technology-tablet.jpg')] desktop:bg-[url('/technology/background-technology-desktop.jpg')]",
};

export default function MainLayout({ children, background }: MainLayoutProps) {
  return (
    <>
      <div
        className={`${backgrounds[background]} min-h-screen  bg-no-repeat bg-cover`}
      >
        <Header />
        <main className={`grow grid justify-items-center h-full`}>
          <h1 className="sr-only">Space Tourism</h1>
          {children}
        </main>
      </div>
    </>
  );
}
