import Image from "next/image";
import React from "react";
import { AiFillCar, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BiCableCar } from "react-icons/bi";
import { GiRoad } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    Name,
    Condition,
    Rating,
    Price,
    Transmission,
    Img,
    Mileage,
    Model,
    Hybrid,
     id
  } = product || {};

  const starIcons = [];
  for (let i = 0; i < Rating; i++) {
    starIcons.push(<AiFillStar key={i} fill="brown" />);
  }

  return (
    <>
      {/* // product card */}
      <div className=" bg-white p-4 rounded-lg shadow-lg ">
        <div className="relative ">
          <Image
            priority={true}
            height={500}
            width={180}
            className="object-cover object-center  h-full w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out "
            src={Img}
            alt="car"
          />
          <div className="absolute  top-4 left-2">
            {Condition === "Brand New" ? (
              <h1 className="text-white bg-green-600 rounded p-2 inline">
                {" "}
                New
              </h1>
            ) : (
              <h1 className="text-white bg-red-600 rounded p-2 inline">Used</h1>
            )}
          </div>
        </div>

        <h1 className="py-2 font-bold text-xl text-black ">{Name} </h1>
        <div className="flex items-center">
          {starIcons}
          <span className="text-gray-400 ml-2"> {Rating}</span>{" "}
          <h1 className="text-gray-400 ml-1">(58.5k Review)</h1>
        </div>
        <div className="flex items-center my-2">
          <BiCableCar fill="red"></BiCableCar>
          <span className="text-gray-400 mx-2 "> {Transmission}</span>
          <GiRoad fill="red"></GiRoad>
          <span className="text-gray-400 ml-2"> {Mileage}</span>
        </div>
        <div className="flex items-center mt-2 mb-5">
          <AiFillCar fill="red"></AiFillCar>
          <span className="text-gray-400 mx-2 "> Model: {Model}</span>
          <BsFillFuelPumpFill fill="red"></BsFillFuelPumpFill>
          <span className="text-gray-400 ml-2">
            {" "}
            {Hybrid === true ? "Hybrid" : "Not Hybrid"}
          </span>
        </div>
        <hr />

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-red-600 text-xl font-bold"> {Price}</h1>

          <Link href={`/inventory/${id}`} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black transition duration-300 ease-in-out">
            <h1 className="flex items-center gap-2 font-bold">
              {" "}
              <AiOutlineEye></AiOutlineEye> Details
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;