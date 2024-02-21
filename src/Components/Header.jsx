import "./Css/header.css"
import { NavLink } from "react-router-dom"
export const Header = () => {
  return (
    <div className="main sm:flex sm:items-center sm:flex-row sm:pt-[1.5%] sm:pr-[10%] sm:pb-[1%] sm:pl-[10%] p-[10%]">
        <div className="portfolio">
        <NavLink to="/"><div style={{color:"white"}}>Portfolio</div></NavLink>
        </div>
        <div className="sm:flex sm:justify-between sm:flex-row sm:w-[40%] w-[10%] flex flex-row gap-3 sm:pt-[0] pt-[4%]">
            <div className="home">
                <NavLink to="/"><button className="header-buttons abc">Home</button></NavLink>
            </div>
            <div className="about">
                <NavLink to="/about"><button className="header-buttons abc">About</button></NavLink>
            </div>
            <div className="education">
                <NavLink to="/education"><button className="header-buttons abc">Education</button></NavLink>
            </div>
            <div className="skills">
                <NavLink to="/skills"><button className="header-buttons abc">Skills</button></NavLink>
            </div>
            <div className="contact">
                <NavLink to="contact"><button className="header-buttons abc">Contact</button></NavLink>
            </div>
        </div>
    </div>
  )
}
