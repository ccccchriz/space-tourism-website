import Header from "../components/Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="grow bg-no-repeat bg-cover bg-[url('home/background-home-mobile.jpg')] tablet:bg-[url('home/background-home-tablet.jpg')] desktop:bg-[url('home/background-home-desktop.jpg')]">
        {children}
      </main>
    </>
  );
}
