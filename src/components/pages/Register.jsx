import { useContext, useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [show, setShow] = useState(false);

  const { handleAlert, googleLogIn, createUser, setLoading } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      handleAlert(
        "error",
        "Please enter a password with at least one upper case letter"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      handleAlert(
        "error",
        "Please enter a password with at least one upper case letter"
      );
      return;
    } else if (!/[!@#$%^&*()_+]/.test(password)) {
      handleAlert(
        "error",
        "Please enter a password with at least one upper case letter"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        handleAlert("success", "User Created Successfully");
      })

      .catch((error) => {
        handleAlert("error", `${error.message}`);
        setLoading(false);
      });

    form.reset();
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        handleAlert("success", "User LoggedIn Successfully");
      })
      .catch((error) => {
        handleAlert("error", `${error.message}`);
        setLoading(false);
      });
  };

  return (
    <div className="bg-base-200 py-5 md:w-1/2 mx-auto mt-10 relative text-center mb-10 px-3">
      <h2 className="text-3xl mt-5 mb-5 text-lime-500">Please Register Here</h2>

      <form onSubmit={handleRegister}>
        <input
          className="w-3/4 mb-3 rounded-lg py-2 px-3 bg-black"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />

        <br />
        <input
          className="w-3/4 mb-3 rounded-lg py-2 px-3 bg-black"
          type="text"
          name="photo"
          placeholder="Enter Your Photo Link"
        />

        <br />

        <input
          className="w-3/4 mb-3 rounded-lg py-2 px-3 bg-black"
          type="email"
          name="email"
          placeholder="Enter a Valid Email"
          required
        />

        <br />
        <input
          className="w-3/4 mb-3 rounded-lg py-2 px-3 bg-black"
          type={show ? "text" : "password"}
          name="password"
          placeholder="Enter a Password"
          required
        />
        <span
          className="z-10 w-fit absolute translate-y-3/4 -translate-x-5"
          onClick={() => setShow(!show)}
        >
          {show ? <BsEyeFill></BsEyeFill> : <BsEyeSlashFill></BsEyeSlashFill>}
        </span>

        <br />
        <input
          className="mb-3 btn btn-active w-3/4 text-lime-700"
          type="submit"
          value="Register"
        />
      </form>

      <div className="text-center mx-auto mb-3">
        <p className="mb-2">Or Register Using</p>
        <FcGoogle
          onClick={handleGoogleLogIn}
          className="text-center mx-auto w-10 h-10"
        ></FcGoogle>
      </div>

      <p>
        Already have an account? <br /> Please{" "}
        <span className="font-semibold italic text-lime-600 ml-2 hover:underline">
          <Link to="/login">LogIn</Link>
        </span>
      </p>
    </div>
  );
};

export default Register;
