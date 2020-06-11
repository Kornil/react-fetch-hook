# React fetch hook

Examples can be found in the example folder.

## How to use

- Install the package

`npm i @kornil92/react-fetch-hook`

- Use it

```tsx
import React from "react";
import useFetch from "@kornil92/react-fetch-hook";

const App = () => {
  const { status, data, error } = useFetch<{ file: string }>("https://aws.random.cat/meow");

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
```
