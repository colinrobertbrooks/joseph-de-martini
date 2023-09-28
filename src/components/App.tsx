import backgroundImg from "../assets/images/poet.min.png";
import Signature from "./Signature";

const App = () => (
  <div className="h-screen relative flex justify-center items-center ">
    <img
      className="absolute h-full w-full object-cover object-center lg:object-top"
      src={backgroundImg}
      alt="The Poet"
    />
    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[rgba(45,40,35,0.1)] to-[rgba(45,40,35,0.2)]"></div>
    <Signature className="absolute top-[12vh] w-[72vw] max-w-[1200px] h-auto text-[#fad895]">
      <title>Joseph De Martini</title>
    </Signature>
  </div>
);

export default App;
