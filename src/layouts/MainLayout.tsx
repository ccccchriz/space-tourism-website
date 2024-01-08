import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
  background: keyof typeof backgrounds;
}

const backgrounds = {
  home: "bg-cover bg-[url('home/background-home-mobile.jpg')] tablet:bg-[url('home/background-home-tablet.jpg')] desktop:bg-[url('home/background-home-desktop.jpg')]",
  destination:
    "bg-cover bg-[url('destination/background-destination-mobile.jpg')] tablet:bg-[url('destination/background-destination-tablet.jpg')] desktop:bg-[url('destination/background-destination-desktop.jpg')]",
  crew: "bg-cover bg-[url('crew/background-crew-mobile.jpg')] tablet:bg-[url('crew/background-crew-tablet.jpg')] desktop:bg-[url('crew/background-crew-desktop.jpg')]",
};

export default function MainLayout({ children, background }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main
        className={`grow grid place-items-center bg-no-repeat ${backgrounds[background]}`}
      >
        <h1 className="sr-only">Space Tourism</h1>
        {children}
      </main>
    </>
  );
}
