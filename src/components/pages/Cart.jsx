import { Link, useLoaderData } from "react-router-dom";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import emptyCart from "../../assets/emptyCart.webp";
import Swal from "sweetalert2";
import { useState } from "react";

const myStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "purple",
  inactiveFillColor: "sky",
};

const Cart = () => {
  const cartItems = useLoaderData();

  const [items, setItems] = useState(cartItems);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://pks-brands-server-6cb9dabrz-pallab-kumar-sarkers-projects.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Cart Item has been deleted.",
                "success"
              );
              const remaining = items.filter((item) => item._id !== id);
              setItems(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      {items.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 gap-10">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col xl:flex-row gap-5 bg-base-200 rounded-3xl items-center drop-shadow-xl"
            >
              <div>
                <img
                  className="p-4 rounded-3xl h-[300px] md:h-[350px] md:w-[350px]"
                  src={item.photo}
                  alt="Album"
                />
              </div>
              <div className="text-center mx-auto">
                <h2 className="text-2xl text-sky-400 mx-auto">{item.name}</h2>
                <h2 className="text-2xl text-lime-400 mx-auto mt-5">
                  Brand : {item.brand.toUpperCase()}
                </h2>
                <p className="text-lg text-lime-700 mt-5 font-semibold">
                  Product Type : {item.type.toUpperCase()}
                </p>
                <p className="text-purple-600 mt-5 text-lg font-semibold">
                  Price: ${item.price}
                </p>
                <div className="mt-5 mb-5 mx-auto text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-primary mr-5"
                  >
                    Delete
                  </button>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={parseInt(item.rating)}
                    itemStyles={myStyles}
                    className="mx-auto mt-5"
                  ></Rating>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="container mx-auto text-center mt-10">
          <img className="mx-auto" src={emptyCart} alt="" />
          <Link className="btn btn-success mt-3" to="/">
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
