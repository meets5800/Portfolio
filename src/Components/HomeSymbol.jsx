import linkedin from "../assets/linkedin.png";
import x from "../assets/X.png";
import insta from "../assets/insta.png";
import "./Css/homesymbols.css";
import { useState,useEffect } from "react";
export const HomeSymbol = () => {
    const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  setTimeout(() => {
    setIsVisible(true);
  }, 3000);
}, []);
  return (
    <div className={`symbols ${isVisible ? 'visible' : ''} sm:flex sm:justify-start flex justify-center h-[50px] w-[100%]`}>
      <p className="line1 sm:text-[large] text-[15px] sm:flex flex sm:w-[20%] w-[30%] h-[100%] mt-0 items-center font-[500]">Connect with me:</p>
      <div className="sm:flex flex sm:justify-around sm:w-[30%] w-[50%] justify-around sm:gap-[10px] gap-[4px]">
        <button className="bg-[rgb(3,21,32)] border-none">
            <a href="https://www.linkedin.com/in/meets5800/" target="_blank">
            <img src={linkedin} alt="ld" className="sm:w-[40px] w-[25px] rounded-[50%] border-none "/>
            </a>
        </button>
        <button className="bg-[rgb(3,21,32)] border-none">
            <a href="https://www.instagram.com/sutariya_meeet/" target="_blank">
            <img src={insta} alt="insta" className="sm:w-[40px] w-[25px] rounded-[50%] border-none "/>
            </a>
        </button>
        <button className="bg-[rgb(3,21,32)] border-none">
            <a href="https://github.com/meets5800" target="_blank">
            <img src={x} alt="x" className="sm:w-[45px] w-[30px] rounded-[50%] border-none "/>
            </a>
        </button>
      </div>
    </div>
  );
};
