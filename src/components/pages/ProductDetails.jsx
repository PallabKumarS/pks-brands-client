import { Link, useLoaderData } from "react-router-dom";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "purple",
  inactiveFillColor: "sky",
};

const ProductDetails = () => {
  const { _id, name, brand, type, price, rating, photo, description } =
    useLoaderData();

  const descriptionParts = description.split(",");

  return (
    <div className="container mx-auto lg:card-side shadow-xl mt-10 p-4">
      <div className="flex flex-col lg:flex-row gap-5 bg-base-200 rounded-3xl items-center drop-shadow-xl">
        <div className="mt-5 mx-auto">
          <img
            className="mx-auto p-4 rounded-3xl h-[300px] md:h-[450px] md:w-[400px]"
            src={photo}
            alt="Album"
          />
        </div>
        <div className="mx-auto text-center mt-5">
          {descriptionParts.map((part, index) => (
            <p key={index} className="mt-1 text-lg text-sky-700 font-medium">
              {part}
            </p>
          ))}
        </div>
        <div className="text-center mx-auto mt-5">
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
          <div className="mt-5 mb-5 text-center">
            <Link to={`/cart/${_id}`}>
              <button className="btn btn-primary mr-5">Add To Card</button>
            </Link>
            <Rating
              style={{ maxWidth: 150 }}
              value={parseInt(rating)}
              itemStyles={myStyles}
              className="mx-auto mt-3"
            ></Rating>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
