import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="font-fira-sans text-center">
      <h1 className="text-center md:text-3xl sm:text-2xl xs:text-xl font-medium">
        Oops!
      </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-md">{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        {" "}
        <button className="p-2 bg-red-550 text-white rounded-lg">
          Go Back
        </button>
      </Link>
    </div>
  );
}
