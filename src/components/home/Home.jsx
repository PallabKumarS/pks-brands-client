/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import Brands from "./Brands";
import Slider from "../shared/Slider";
import { useEffect, useState } from "react";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const images = { img1, img2 };

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  return (
    <div className="mt-5 container mx-auto text-center px-4">
      {/* slider here  */}
      <div className="mb-10">
        <Slider images={images}></Slider>
      </div>

      {/* brands here  */}
      <h2 className="text-orange-500 text-4xl mb-10">
        Check Out Our <span className="text-yellow-400">Brands</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Link to={`/${brand.name}`}>
            <Brands key={brand.id} brand={brand}></Brands>
          </Link>
        ))}
      </div>
      <button className="btn btn-secondary mx-auto mt-5">See More</button>

      {/* hot deals section  */}
      <div className="mt-10"></div>
    </div>
  );
};

export default Home;
