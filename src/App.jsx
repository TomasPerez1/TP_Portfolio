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
      <div className="border-2 border-green-600">
        <h1 className="text-3xl">Tomas Perez</h1>
        <h4 className="text-xl">Fullstack web developer</h4>
      </div>
      {/* <Toggle/>
      <ContactMe/>
      <Skills/> 
      <SideNav/> */}
    </div>
  );
}

export default App;
