/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import Brands from "./Brands";
import Slider from "../shared/Slider";
import { useEffect, useState } from "react";
import hot from "../../assets/hot deals.webp";
import Sells from "./Sells";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [sells, setSells] = useState([]);

  const images = { img1, img2 };

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  useEffect(() => {
    fetch("/sells.json")
      .then((res) => res.json())
      .then((data) => {
        setSells(data);
      });
  }, []);

  return (
    <div className="mt-5 container mx-auto text-center px-4">
      {/* slider here  */}
      <div className="mb-10">
        <Slider images={images}></Slider>
      </div>

      {/* brands here  */}
      <h2 className="text-sky-500 text-4xl mb-10">
        Check Out Our <span className="text-lime-400">Brands</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Link to={`/${brand.name}`}>
            <Brands key={brand.id} brand={brand}></Brands>
          </Link>
        ))}
      </div>
      <button className="btn btn-success mx-auto mt-5 hover:">See More</button>

      {/* hot deals section  */}
      <div className="mt-10 mb-10 text-center relative">
        <h2 className="text-sky-500 text-4xl">
          Hot <span className="text-lime-400">Deals!</span>
          <img className="mx-auto rounded-3xl mt-5 " src={hot} alt="" />
        </h2>
        <button className="btn btn-accent mx-auto mt-5 hover: ">
          Shop Now
        </button>
      </div>

      {/* most sells here  */}
      <h2 className="text-sky-500 text-4xl mb-10">
        Our <span className="text-lime-400">Top Sells!</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {<Sells sells={sells}></Sells>}
      </div>
      <button className="btn btn-success mx-auto mt-5 hover:">See More</button>
    </div>
  );
};

export default Home;
