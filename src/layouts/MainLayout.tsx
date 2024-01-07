import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="grow grid place-items-center bg-no-repeat bg-cover bg-[url('home/background-home-mobile.jpg')] tablet:bg-[url('home/background-home-tablet.jpg')] desktop:bg-[url('home/background-home-desktop.jpg')]">
        <h1 className="sr-only">Space Tourism</h1>
        {children}
      </main>
    </>
  );
}
