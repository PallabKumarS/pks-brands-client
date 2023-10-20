/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import Brands from "./Brands";
import Slider from "../shared/Slider";
import { useContext, useEffect, useState } from "react";
import hot from "../../assets/hot deals.webp";
import Sells from "./Sells";
import { AuthContext } from "../provider/AuthProvider";
import Rated from "./Rated";

const Home = () => {
  const [sells, setSells] = useState([]);

  const products = useLoaderData();

  const { brands } = useContext(AuthContext);

  const images = { img1, img2, img3 };

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
      <h2 className="text-sky-500 text-4xl mb-10 font-bold">
        Check Out Our <span className="text-lime-400">Brands</span>
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/products/${brand.name.toLowerCase()}`}>
            <Brands brand={brand}></Brands>
          </Link>
        ))}
      </div>
      <button className="btn btn-success mx-auto mt-5 hover:">See More</button>

      {/* hot deals section  */}
      <div className="mt-10 mb-10 text-center relative">
        <h2 className="text-sky-500 text-4xl font-bold">
          Hot <span className="text-lime-400">Deals!</span>
          <img className="mx-auto rounded-3xl mt-5 " src={hot} alt="" />
        </h2>
        <button className="btn btn-accent mx-auto mt-5 hover: ">
          Shop Now
        </button>
      </div>

      {/* most sells here  */}
      <h2 className="text-sky-500 text-4xl mb-10 font-bold">
        Our <span className="text-lime-400">Top Sells!</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {<Sells sells={sells}></Sells>}
      </div>
      <button className="btn btn-success mx-auto mt-5 hover:">See More</button>

      <div>
        <h2 className="text-sky-500 text-4xl mb-10 font-bold mt-10">
          Our <span className="text-lime-400">Top Rated</span> Products
        </h2>
        {<Rated products={products}></Rated>}
      </div>
    </div>
  );
};

export default Home;
