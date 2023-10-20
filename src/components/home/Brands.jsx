import PropTypes from "prop-types";

const Brands = ({ brand }) => {
  return (
    <div className="text-center">
      <div className="rounded-xl border border-base-200 bg-base-200 p-5">
        <img src={brand.logo} alt={brand.name} className="h-20 w-40 mx-auto" />
        <div className="md:p-6">
          <h2 className="text-xl font-semibold text-center text-purple-500">
            {brand.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brand: PropTypes.object,
};

export default Brands;
