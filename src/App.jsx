import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const getMode=function(){
    const initialModel = localStorage.getItem("mode");
    if (initialModel == null) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };
  const [dark, setDark] = useState(getMode());
  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(dark));
  }, [dark]);
  return (
    <>
      <div className={dark ? "dark-mode" : "app"}>
        <header className="flex bg-blue-200 transition duration-[.4s]">
          <div className="w-[1300px] m-[0px_auto] p-[0px_auto]">
            <div className="flex items-center justify-between h-[8vh]">
              <ul className="flex items-center ">
                <li className="text-white pl-[25px]">Home</li>
                <li className="text-white pl-[25px]">About Us</li>
                <li className="text-white pl-[25px]">Contact Us</li>
              </ul>
              <label className="inline-block w-[60px] h-[35px] relative">
                <input
                  onChange={() => setDark(!dark)}
                  type="checkbox"
                  checked={dark}
                  className="opacity-0 w-0 h-0"
                />
                <span className=" slider absolute top-0 bottom-0 left-0 right-0 bg-amber-50 transition-[.4s] before:content-[''] before:absolute before:w-[26px] before:h-[26px] before:left-1 before:bottom-1 before:bg-amber-400 before:transition-[.4s] rounded-4xl before:rounded-4xl cursor-pointer "></span>
              </label>
            </div>
          </div>
        </header>
        <div className="content flex p-[120px_0px] flex-col text-center ">
          <div className="container">
            <h1>{dark ? "Dark Mode Enable" : "Light Mode Enable"}</h1>
            <p>{dark?'This is Dark Mode':'This is Light Mode'}</p>
          </div>
          <div className="container">
            <div className="card flex items-center justify-between m-[100px_0px] ">
              <div className="card-item    w-[calc(33.33%-20px)] bg-white">
                <img
                  src="./Image/1.jpg"
                  className="w-[100%]  h-[300px] object-cover"
                  alt=""
                />
                <h2>First Card</h2>
                <p>This is First Card</p>
              </div>
              <div className="card-item  w-[calc(33.33%-20px)] bg-white">
                <img
                  src="./Image/1.jpg"
                  className="w-[100%] h-[300px] object-cover"
                  alt=""
                />
                <h2>Two Card</h2>
                <p>This is Two Card</p>
              </div>
              <div className="card-item  w-[calc(33.33%-20px)] bg-white">
                <img
                  src="./Image/1.jpg"
                  className="w-[100%] h-[300px] object-cover"
                  alt=""
                />
                <h2>Three Card</h2>
                <p>This is Three Card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
