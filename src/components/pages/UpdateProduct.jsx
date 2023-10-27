import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const { _id, name, brand, type, price, rating, photo } = useLoaderData();

  const { handleAlert } = useContext(AuthContext);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.product.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;

    const updatedProduct = {
      name,
      brand,
      type,
      price,
      rating,
      photo,
    };

    fetch(
      `https://pks-brands-server-6cb9dabrz-pallab-kumar-sarkers-projects.vercel.app/products/brand/${_id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          handleAlert("success", "Updated Successfully");
        }
      });
    form.reset();
  };

  return (
    <div className="container mx-auto px-2">
      <h2 className="text-3xl text-indigo-500 mb-5 font-bold text-center">
        Update Product Here
      </h2>

      <form
        onSubmit={handleUpdateProduct}
        action=""
        className="bg-base-200 p-5 grid grid-cols-2 justify-center gap-5 rounded-3xl mt-10"
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
            defaultValue={name}
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
            defaultValue={brand}
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
            defaultValue={type}
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
            type="number"
            name="price"
            placeholder="Price"
            defaultValue={price}
            required
          />
        </div>

        <div className="">
          <label className="" htmlFor="">
            Photo URL
          </label>
          <br />
          <input
            className="input input-bordered mt-1 w-full"
            type="text"
            name="photo"
            placeholder="Photo URL"
            defaultValue={photo}
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
            defaultValue={rating}
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

        <input
          className="mt-5 btn btn-active col-span-2 text-lime-700"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
