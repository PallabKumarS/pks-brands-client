/* eslint-disable react/jsx-key */
import PropTypes from "prop-types";

const Sells = ({ sells }) => {
  const sortedSells = sells.sort((a, b) => b.sold - a.sold);

  return sortedSells.map((sell, idx) => (
    <div key={idx} className="text-center">
      <div className="rounded-xl border border-base-200 bg-base-200 p-5">
        <img
          src={sell.image_url}
          alt={sell.name}
          className="w-60 h-60 mx-auto rounded-3xl"
        />
        <div className="md:p-6">
          <h2 className="text-xl text-sky-500 font-semibold text-center">
            {sell.name}
          </h2>
          <p className="mt-5 text-lg font-medium text-lime-600">
            Sold Product : <span className="text-sky-500">{sell.sold}</span>
          </p>
        </div>
      </div>
    </div>
  ));
};

Sells.propTypes = {
  sells: PropTypes.arrayOf(PropTypes.object),
};

export default Sells;
