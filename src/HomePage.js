import { useEffect, useState } from "react";
import Loader from "./Loader";
import Scene from "./3D_Scene";

function HomePage() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  return (
    <div className="">
      <h1 className="font-bold text-4xl text-white my-4 px-6">
        Hi , I'm <span className="text-violet-600">Aymen</span>
      </h1>
      <p className="text-white my-4 px-6">
        I developer 3D visuals , user <br />
        interfaces and web applications
      </p>
      <div className="h-44 flex items-center justify-center">
        {load ? <Loader /> : <Scene />}
      </div>
    </div>
  );
}

export default HomePage;
