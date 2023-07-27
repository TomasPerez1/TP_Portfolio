import Spline from "@splinetool/react-spline";
import en from "../text_content";

function App() {
  return (
    <>
      <div className="">
        <h1 className="border-2 border-yellow-500">Hola beba</h1>
      </div>
      <div className="grid gap-2 grid-cols-3 border-2 border-red-400">
        <p>{en.side_nav.skills}</p>
        <p>{en.side_nav.about}</p>
        <p>{en.side_nav.proyects}</p>

        {/*       <Spline scene="https://prod.spline.design/A002HD6f1vPCzyki/scene.splinecode" />
         */}
      </div>
    </>
  );
}

export default App;
