import { PiUniteDuotone, PiGithubLogoLight } from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";

const Header = () => {
  return (
    <div className=" shadow-md w-full flex bg-black">
      <nav className="flex flex-row justify-between items-center p-4 w-full">
        <div className="brand logo flex items-center lg:text-2xl text-pink-500 text-xl ">
          <PiUniteDuotone className="text-5xl text-pink-500 " />

          <span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600/50 from-amber-400">
            {" "}
            Xtension
          </span>
        </div>
        <div className="description ">unicode extension</div>
        <div className="icons flex   items-center gap-4">
          <a
            href="https://github.com/petsamuel/uni-ex"
            className="text-white flex gap-1 ring-2 p-3  rounded-xl transition-all ease-in-out  hover:scale-95 active:scale-90"
          >
            {" "}
            Github{" "}
            <PiGithubLogoLight className="lg:text-2xl text-sm cursor-pointer text-rose-400" />
          </a>

          <a
            href="https://buymeacoffee.com/bieefilled"
            className="text-white flex gap-1 ring-2 p-3 rounded-xl transition-all ease-in-out  hover:scale-95 active:scale-90"
          >
            Support{" "}
            <SiBuymeacoffee className=" text-sm lg:text-2xl text-amber-300 ring-amber-600/50 cursor-pointer " />{" "}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
