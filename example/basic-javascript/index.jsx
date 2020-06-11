import React from "react";
import ReactDOM from "react-dom";
import useFetch from "../../src/index";

const App = () => {
  const { status, data, error } = useFetch("https://aws.random.cat/meow");

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  } else if (status === "success") {
    return (
      <div>
        <img src={data.file} width={600} />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
