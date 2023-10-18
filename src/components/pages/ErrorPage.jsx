import { Link, useRouteError } from "react-router-dom";
import bg from "../../assets/404.gif";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="mt-10 text-center px-3">
      <img src={bg} alt="" className="mx-auto rounded-lg md:h-96" />
      <p className="italic font-medium text-xl mb-2 text-center mt-5">
        Error:<i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-3">Go Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
