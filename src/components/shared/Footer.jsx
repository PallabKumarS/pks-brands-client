import { DiSpark } from "react-icons/di";
import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer footer-center p-10 bg-base-200">
        <aside>
          <div className="flex align-middle items-center">
            <span className="text-lime-400">
              <DiSpark className="text-7xl"></DiSpark>
            </span>{" "}
            <span className="text-sky-500 text-2xl font-semibold">Splash</span>
          </div>
          <p className="font-bold text-2xl text-sky-500">
            Providing Reliable Tech Since 2014
          </p>
          <p className="text-lime-700 text-lg">Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiOutlineTwitter className="text-3xl text-purple-600"></AiOutlineTwitter>
            </a>
            <a>
              <AiOutlineYoutube className="text-3xl text-purple-600"></AiOutlineYoutube>
            </a>
            <a>
              <AiOutlineFacebook className="text-3xl text-purple-600"></AiOutlineFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
