// import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "../shared/Slider";
import empty from "../../assets/nothing.webp";
import Products from "./Products";

const BrandDetails = () => {
  const [sortedBrands, setSortedBrands] = useState({});

  const { id } = useParams();

  const { brands } = useContext(AuthContext);

  const products = useLoaderData();

  useEffect(() => {
    const sorted = brands.find((brand) => brand.name.toLowerCase() === id);
    setSortedBrands(sorted);
  }, [brands, id]);

  const { img1, img2, img3 } = sortedBrands;
  const images = { img1, img2, img3 };

  return (
    <div className="text-center">
      <div className="">
        <Slider images={images}></Slider>
      </div>
      <h2 className="mt-20 text-5xl font-bold text-sky-500">
        Available <span className="text-lime-400">Products</span>
      </h2>
      {products.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 gap-8">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      ) : (
        <div className="container mx-auto text-center mt-10">
          <img className="mx-auto" src={empty} alt="" />
          <Link className="btn btn-success mt-3" to="/">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

BrandDetails.propTypes = {};

export default BrandDetails;
