//import Spline from "@splinetool/react-spline";
import {en, esp} from "./text_content";
//import {SideNav, Toggle, ContactMe, Skills} from "./components"
import SideNav from "./components/SideNav"
import Toggle from "./components/Toggle";
import ContactMe from "./components/ContactMe";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="bg-background h-screen w-screen">
       <Toggle/>
      <ContactMe/>
      <Skills/> 
      <SideNav/>
    </div>
  );
}

export default App;
