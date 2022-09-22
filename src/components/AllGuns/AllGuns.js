import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Gun from "../Gun/Gun";

const AllGuns = ({ cartIncrease, totalPrice }) => {
  const [gunsData, setGunsData] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGunsData(data));
  }, []);
  return (
    <div className="dark:bg-slate-800">
      <h1 className="text-center text-4xl py-5 font-bold dark:text-white">
        Fake <span className="text-orange-600 no-underline">Gun</span> Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-10 w-[85%] mx-auto py-10">
        {gunsData.map((gun) => (
          <Gun
            gun={gun}
            key={gun.id}
            cartIncrease={cartIncrease}
            totalPrice={totalPrice}
          />
        ))}
      </div>
    
    </div>
  );
};

export default AllGuns;
