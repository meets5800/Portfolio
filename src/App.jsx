import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";
import { About } from "./Components/About";
import { Education } from "./Components/Education";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
