import { useSelector } from "react-redux";
import SideTabs from "./SideNav";

export default function SideBar() {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      <div className="sticky top-0 h-fit w-full rounded-br-2xl rounded-tl-2xl bg-white px-5 py-10">
        <div className="flex flex-col items-center gap-2">
          <img src={user.image} alt="leou" className="size-40 rounded-full" />
          <p className="mt-3 text-center text-xl">{user.name}</p>
          <p className="text-center text-sm">{user.role}</p>
          <button className="rounded-lg bg-apple-500 px-3 py-2 text-sm text-white outline-none duration-300 hover:bg-black">
            Upload New Avatar
          </button>
          <p>Bio</p>
          <p className="text-sm">{user.bio}</p>
        </div>
        <SideTabs />
      </div>
    </section>
  );
}
