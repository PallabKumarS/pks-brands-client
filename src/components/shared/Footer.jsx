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
            <span className="text-yellow-400">
              <DiSpark className="text-7xl"></DiSpark>
            </span>{" "}
            <span className="text-orange-500 text-2xl">Splash</span>
          </div>
          <p className="font-bold text-xl">
            Providing reliable tech since 1992
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <AiOutlineTwitter className="text-3xl"></AiOutlineTwitter>
            </a>
            <a>
              <AiOutlineYoutube className="text-3xl"></AiOutlineYoutube>
            </a>
            <a>
              <AiOutlineFacebook className="text-3xl"></AiOutlineFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
