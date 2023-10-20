import PropTypes from "prop-types";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "purple",
  inactiveFillColor: "sky",
};

const Rated = ({ products }) => {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(4);

  const { handleAlert } = useContext(AuthContext);

  if (load >= products.length) {
    handleAlert("warning", "No More Data Available");
  }

  const sortedProducts = products.sort((a, b) => b.rating - a.rating);

  const displayProducts = show ? sortedProducts : sortedProducts.slice(0, load);

  return (
    <div className="container mx-auto text-center">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayProducts.map((product, idx) => (
          <div key={idx} className="text-center">
            <div className="rounded-xl border border-base-200 bg-base-200 p-5">
              <img
                src={product.photo}
                alt={product.name}
                className="w-60 h-60 mx-auto rounded-3xl"
              />
              <div className="md:p-6">
                <h2 className="text-xl text-sky-500 font-semibold text-center">
                  {product.name}
                </h2>
                <p className="mt-5 text-lg font-medium text-lime-600">
                  Price :{product.price}
                </p>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={parseInt(product.rating)}
                  itemStyles={myStyles}
                  className="mx-auto mt-5"
                ></Rating>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-5">
        <button onClick={() => setShow(!show)} className="btn btn-success mt-5">
          {show ? <span>Show Less</span> : <span>Show All</span>}
        </button>
        <button
          onClick={() => setLoad(load + 6)}
          className="btn btn-success mt-5"
        >
          Load 6 More
        </button>
      </div>
    </div>
  );
};

Rated.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Rated;
