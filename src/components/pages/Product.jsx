import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "purple",
  inactiveFillColor: "sky",
};

const Product = ({ product }) => {
  const { _id, name, brand, type, price, rating, photo } = product;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
      <div>
        <figure>
          <img
            className="p-4 rounded-3xl h-[300px] md:h-[450px] md:w-[400px]"
            src={photo}
            alt="Album"
          />
        </figure>
      </div>
      <div className="text-center my-auto mx-auto">
        <h2 className="text-2xl text-sky-400 mx-auto">{name}</h2>
        <h2 className="text-2xl text-lime-400 mx-auto mt-5">
          Brand : {brand.toUpperCase()}
        </h2>
        <p className="text-lg text-lime-700 mt-5 font-semibold">
          Product Type : {type.toUpperCase()}
        </p>
        <p className="text-purple-600 mt-5 text-lg font-semibold">
          Price: ${price}
        </p>
        <div className="mt-5 mb-5">
          <Link to={`/products/${brand}/${_id}/update`}>
            <button className="btn btn-primary mr-5">Update</button>
          </Link>
          <Link to={`/products/${brand}/${_id}`}>
            <button className="btn btn-primary mb-5">Details</button>
          </Link>
          <Rating
            style={{ maxWidth: 150 }}
            value={parseInt(rating)}
            itemStyles={myStyles}
            className="mx-auto"
          ></Rating>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
