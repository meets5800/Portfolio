import "./Css/home.css";
import { useState, useEffect } from "react";

import { HomeSymbol } from "./HomeSymbol";
import { HomeButtons } from "./HomeButtons";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="home-main sm:h-[max-content] h-[max-content]">
      <div className="first pr-[0%] sm:pr-[40%]">
        <p className="name sm:text-[50px] text-[30px] sm:w-[100%] w-[100%] sm:tracking-[6px] tracking-[3px]">Hi, I am Meet Sutariya</p>
        <p className="wd text-[24px] sm:text-[40px] w-[100%] sm:w-[10%] sm:tracking-[6px] tracking-[3px]">Web Developer</p>
        <p className={`data ${isVisible ? "visible" : ""} sm:text-[16px] text-[12px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          sunt exercitationem veniam. Consequatur, iusto assumenda. Excepturi,
          praesentium a ut ad quae doloremque veniam facere dicta facilis.
          Debitis iusto eaque assumenda similique odit maiores. Sint assumenda,
          dolores minima magnam aliquid incidunt non beatae, ullam officia
          dolorum tenetur quod et deserunt mollitia, molestias eius Lorem ipsum
          dolor sit amet consectetur adipisicing elit. In numquam obcaecati ex
          blanditiis est, laborum facere fugit, at repellat maxime repudiandae
          libero sequi delectus rerum exercitationem! Placeat fugit commodi,
          perferendis provident ea expedita consequuntur dignissimos saepe
          suscipit perspiciatis sit dolorem blanditiis aliquam qui
          reprehenderit, facere et distinctio ipsa, explicabo dicta! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Expedita doloribus
          molestiae optio eum quibusdam dolores nam adipisci. Expedita delectus
          numquam, veritatis repellat sed voluptatibus quasi assumenda maxime
          eveniet blanditiis itaque.
        </p>
        <HomeButtons/>
        <HomeSymbol/>
      </div>
    </div>
  );
};
