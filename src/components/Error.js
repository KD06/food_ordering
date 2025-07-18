import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>We're working to fix this issue.</p>
      <p>
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};

export default Error;
