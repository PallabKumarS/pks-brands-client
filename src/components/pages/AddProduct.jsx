import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddProduct = () => {
  const { handleAlert } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.product.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const newProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          handleAlert("success", "Added Successfully");
        }
      });
    form.reset();
  };

  return (
    <div className="container mx-auto px-2">
      <h2 className="text-3xl text-indigo-500 mb-5 font-bold">
        Add Product page
      </h2>

      <form
        onSubmit={handleAddProduct}
        action=""
        className="bg-base-200 p-5 grid grid-cols-2 justify-center gap-5 rounded-3xl"
      >
        <div className="">
          <label className="" htmlFor="">
            Product Name
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="product"
            placeholder="Product Name"
            required
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Brand Name
          </label>
          <br />
          <select
            name="brand"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Select . . .
            </option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="pixel">Pixel</option>
            <option value="xiaomi">Xiaomi</option>
            <option value="oneplus">OnePlus</option>
            <option value="realme">Realme</option>
          </select>
        </div>

        <div className="">
          <label className="" htmlFor="">
            Type
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="type"
            placeholder="Type"
            required
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Price
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="price"
            placeholder="Price"
            required
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Short Description
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="description"
            placeholder="Short Description"
            required
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Rating
          </label>
          <br />
          <select
            name="rating"
            className="select select-bordered w-full"
            defaultValue=""
            required
          >
            <option disabled value="">
              Rating
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="" htmlFor="">
            Photo URL
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
          />
        </div>

        <input
          className="mt-5 btn btn-active col-span-2 text-lime-700"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
