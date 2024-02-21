import "./Css/about.css"
import { useState, useEffect } from "react";
// import img from "../assets/WhatsApp Image 2024-02-15 at 15.57.51_80afc475.jpg"
import imh from "../assets/istockphoto-1337144146-612x612.jpg"
export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="about-main sm:h-[max-content] h-[max-content]">
        <div className="sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] flex justify-center text-center font-[500] font-serif">
        <div className={`text ${isVisible ? "visible" : ""} w-[25%] flex justify-center text-justify`}>
          <span>About</span> <span className="text-[skyblue]">Me</span>
        </div>
        </div>
        <div className="p-[3%] sm:h-[40%] h-[25%] w-[100%] flex justify-center">
          <img src={imh} alt="img" className="sm:w-[20%] w-[40%] rounded-[50%] border-[2px] border-solid border-[red] p-[10px]"/>
        </div>
        <div className={`line ${isVisible ? "visible" : ""} pt-[5px] text-center sm:text-[40px] text-[18px]`}>
          Hi there! glad to see here
        </div>
        <div className="w-[80%] pt-[3%] text-justify mr-[10%] ml-[10%] sm:text-[large] text-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa recusandae placeat animi obcaecati corrupti vero voluptatem impedit, esse tenetur laboriosam mollitia ut molestiae quidem doloribus nam expedita voluptate atque voluptas facilis suscipit dolorem? Iusto adipisci at earum numquam dolorum odit soluta ipsa nemo corporis aut, omnis nam laboriosam ex dolores sapiente. Quaerat dolores qui at delectus laborum velit fuga, aspernatur blanditiis magni alias animi tempore odit facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, velit ad ipsum esse quo nesciunt enim? Possimus nam pariatur, sit hic aspernatur id ab atque nesciunt obcaecati deserunt quam aut repellat delectus aliquam illum nihil beatae? Obcaecati aspernatur a molestiae.
        </div>
    </div>
  )
}
