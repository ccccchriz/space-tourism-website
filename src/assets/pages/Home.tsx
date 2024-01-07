import MainLayout from "../../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h2 className="grid gap-6 uppercase font-secondary text-base text-light-purple text-center tracking-widest">
        So you want to travel to{" "}
        <span className="font-primary text-7xl text-white">space</span>
      </h2>
      <p className="font-secondary text-base text-light-purple text-center px-8">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button className="grid place-items-center  uppercase font-primary mb-8 before:absolute before:size-40 before:bg-white before:bg-opacity-10 before:rounded-full before:z-0 before:content-none hover:before:content-[''] hover:before:animate-pulse">
        <span className="bg-white size-32 rounded-full grid place-items-center z-0">
          explore
        </span>
      </button>
    </MainLayout>
  );
}
