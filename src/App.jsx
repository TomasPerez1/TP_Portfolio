//import Spline from "@splinetool/react-spline";
import { en, esp } from "./text_content";
//import {SideNav, Toggle, ContactMe, Skills} from "./components"
import SideNav from "./components/SideNav";
import Toggle from "./components/Toggle";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-background h-screen w-screen ">
      <div className="border-2 border-green-600 w-2/3">
        <div className="text-4xl flex gap-2">
          <h1 className="first-letter:text-primary">Tomas</h1>
          <h1 className="first-letter:text-primary">Perez</h1>
        </div>
        <h2 className="text-xl">Fullstack developer</h2>
        <h3>Bringing software solutions and products to the Web</h3>
      </div>
      {/* 
      <ContactMe/>
      <Skills/> 
      <SideNav/> */}
    </div>
  );
}

export default App;
