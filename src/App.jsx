import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { data } from "autoprefixer";

function App() {
  const [data, setData] = useState();
  const [weather, setweather] = useState();
  const [location, setlocation] = useState();
  const date = new Date(1696522403747).toLocaleTimeString();

  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json?key=&q=London")
      .then((res) => {
        setweather(res.data.current);
        setlocation(res.data.location);
        console.log(res.data.current.cloud);
      });
  }, []);

  return (
    <div className="grid grid-row-3 bg-hero-pattern bg-full text-white h-screen bg-no-repeat bg-cover">
      <nav className="flex justify-between px-5 py-9 text-gray-500">
        <div className="text-2xl p-2 flex gap-3">
          Links
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input className="h-8 border-b-2 bg-transparent"></input>
        </div>
        <div className="text-left ">
          <div className="flex items-center">
            <img src={weather?.condition.icon} />
            <p className="text-3xl">{weather?.cloud}</p>
          </div>
          <div>{location?.country}</div>
        </div>
      </nav>
      <main className="text-5xl flex flex-col gap-7 mt-[3.5em] mb-7 items-center text-center">
        <p className="text-[4em]">{date}</p>
        <p className="text-[1.4em] mb-6">Good afternoon, L3inad</p>
        <p className="text-[.9em] mb-6">What is your main focus for today?</p>
        <hr className="border w-2/6" />
      </main>
      <footer className="flex justify-between mt-[4vh] p-6">
        <div>
          <img />
          <div className="text-left">
            <h1>The Coromandel, New Zealand</h1>
            <p>Jasper Boer / Unsplash</p>
          </div>
        </div>
        <div>The mind is everything. What you think you'll become.</div>
        <div>Todo</div>
      </footer>
    </div>
  );
}

export default App;
