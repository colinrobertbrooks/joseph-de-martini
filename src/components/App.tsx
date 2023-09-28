import { BsFacebook, BsInstagram } from "react-icons/bs";
import backgroundImg from "../assets/images/poet.min.png";
import Signature from "./Signature";

const App = () => (
  <div className="relative h-[100svh] flex justify-center items-center ">
    <img
      className="absolute h-full w-full object-cover object-center lg:object-top"
      src={backgroundImg}
      alt="The Poet"
    />
    <div className="absolute h-full w-full bg-gradient-to-b from-[rgba(45,40,35,0.1)] to-[rgba(45,40,35,0.2)]" />
    <Signature className="absolute top-[12svh] h-auto max-h-[50svh] w-[92svw] m:w-[72svw] max-w-[1200px] text-[#fad895]">
      <title>Joseph De Martini</title>
    </Signature>
    <div className="absolute bottom-[4svh] flex gap-4">
      <a
        className="text-[#fad895] hover:text-[#fffbf5] focus:text-[#fffbf5]"
        href="https://www.facebook.com/josephdemartiniart"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow Joseph De Martini on Facebook"
      >
        <BsFacebook className="w-8 h-auto" />
      </a>
      <a
        className="text-[#fad895] hover:text-[#fffbf5] focus:text-[#fffbf5]"
        href="https://www.instagram.com/josephdemartiniart"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow @josephdemartiniart on Instagram"
      >
        <BsInstagram className="w-8 h-auto" />
      </a>
    </div>
  </div>
);

export default App;
