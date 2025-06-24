import leou from "../images/leou.jpg";
import SideTabs from "./SideNav";

export default function SideBar() {
  return (
    <section className="w-1/4">
      <div className="sticky top-0 h-fit w-full rounded-br-2xl rounded-tl-2xl bg-white px-5 py-10">
        <div className="flex flex-col items-center gap-2">
          <img src={leou} alt="leou" className="size-40 rounded-full" />
          <p className="mt-3 text-center text-xl">LeoU</p>
          <p className="text-center text-sm">Merchant</p>
          <button className="rounded-lg bg-apple-500 px-3 py-2 text-sm text-white outline-none duration-300 hover:bg-black">
            Upload New Avatar
          </button>
          <p>Bio</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            debitis at quidem fugit aperiam animi impedit odit quia veniam,
            omnis
          </p>
        </div>
        <SideTabs />
      </div>
    </section>
  );
}
