import React from "react";
import { useSelector } from "react-redux";

const Laptop = () => {
  const Laptops = useSelector((state) => state.commerce.LaptopData);

  // test için yapıldı dosyayı düzenle !!!

  return (
    <>
      <div>
        {Laptops.map((x) => (
          <div>
            <p>{x.name}</p>
            <img
              style={{ width: "100px", height: "150px" }}
              src={require(`../assets/LaptopImage/${x.image}`)}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Laptop;
