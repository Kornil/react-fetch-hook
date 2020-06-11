import React from "react";
import ReactDOM from "react-dom";
import useFetch from "../../src/index";

const App = () => {
  const [reloading, setReloading] = React.useState<boolean>(false);
  const { status, data, error } = useFetch<{ file: string }>(
    "https://aws.random.cat/meow",
    [reloading]
  );

  const reloadImage = () => {
    setReloading(!reloading);
  };

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return (
      <div>
        <img src={data.file} width={600} />
        <button onClick={reloadImage}>New cat!</button>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
