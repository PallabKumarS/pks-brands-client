import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddProduct = () => {
  const { handleAlert } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value;
    const brand = form.brandName.value;
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

    fetch("http://localhost:5000/product", {
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
    <div className="container mx-auto">
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
            name="productName"
            placeholder="Product Name"
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
            <option value="onePlus">OnePlus</option>
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
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Rating
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="Rating"
            placeholder="Rating"
          />
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
          />
        </div>

        <input
          className="mt-3 btn btn-block col-span-2"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
