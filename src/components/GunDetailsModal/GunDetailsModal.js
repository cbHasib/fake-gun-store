import React from "react";

const GunDetailsModal = ({data, setModalData}) => {

  const {img, name, price} = data;
  console.log(price);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label onClick={()=> setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-3xl text-center font-bold">{name}</h3>
          <img src={img} alt={name} className="w-full h-64 object-contain" />
          <p className="py-4 text-xl font-bold">Price: <span className="text-orange-600">${price}</span></p>
        </div> 
      </div>
    </div>
  );
};

export default GunDetailsModal;
