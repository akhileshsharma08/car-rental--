import React, { useEffect } from "react";
import Hero from "./Hero";
import BookMessage from "./BookMessage";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../store/productSlice";
import { fetchProducts, setProducts } from "../store/productSlice";
import Loader from "../images/loader.gif";

const Cars = () => {
  const dispatch = useDispatch();
  const { data: mycars, status } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status === STATUSES.LOADING) {
    return (
      <div className="flex justify-center items-center">
        <div className="loader">
          <img src={Loader} width={100} height={100} />
        </div>
      </div>
    );
  }

  return (
    <div className="my-30">
      <Hero title={"Cars"} submenu={"cars"} />

      <div className="carimgbox my-10">
        <div className="container mx-auto">
          <div className="mainbocx flex justify-around md:flex-row flex-col mx-auto flex-wrap items-center">
            {mycars.map((car) => (
              <div
                className="carDetailbox md:w-1/4 w-full bg-white p-2 m-2 shadow-lg hover:shadow-2xl text-center"
                key={car.id}
              >
                <div className=" ">
                  <div className="h-full   rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain object-center"
                      src={car.img}
                      width={200}
                      height={100}
                      alt={car.name}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                        {car.mark}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {car.name}
                      </h1>
                      <div className="flex justify-around items-center flex-wrap">
                        <p className="text-md font-semibold text-gray-600">
                          ${car.price} /day
                        </p>
                        <p className="text-md font-semibold text-gray-600">
                          {car.doors} ⭐
                        </p>
                      </div>
                      <div className="flex justify-around items-center flex-wrap">
                        <p className="text-md font-semibold text-gray-600 mb-2">
                          {car.transmission}{" "}
                        </p>
                        <p className="text-md font-semibold text-gray-600">
                          {car.fuel} ⛽
                        </p>
                      </div>
                      <div className="butt my-2 w-full">
                        <button className="w-full bg-red-500 hover:shadow-xl px-8 py-2 hover:bg-red-600 text-white text-lg">
                          Reserve Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BookMessage />
    </div>
  );
};

export default Cars;
