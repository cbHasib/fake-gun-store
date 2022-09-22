import React from "react";
import { useState } from "react";
import GunDetailsModal from "../GunDetailsModal/GunDetailsModal";

const Gun = (props) => {
  const { gun, cartIncrease, totalPrice } = props;
  const { name, img, action, bullet, capacity, category, price } = gun;

  const [modalData, setModalData] = useState(null);

  return (
    <div>
      <div className="dark:bg-slate-700 dark:text-white card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64 object-contain" src={img} alt={name} />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">
            {name}
            <div className="badge badge-secondary">${price}</div>
          </h2>
          <ul className="flex gap-3 justify-center align-middle">
            <li>{bullet}</li>|<li>{capacity}</li>
          </ul>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <button
              onClick={() => {
                cartIncrease();
                totalPrice(+price);
              }}
              className="btn w-full btn-info"
            >
              Add to Cart
            </button>
            <label
              onClick={() => setModalData(gun)}
              htmlFor="my-modal-3"
              className="btn w-full btn-warning"
            >
              Details
            </label>
          </div>
        </div>
      </div>

      {modalData && <GunDetailsModal data={modalData} setModalData={setModalData}/>}
    </div>
  );
};

export default Gun;
