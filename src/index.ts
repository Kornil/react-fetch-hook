import { useState, useEffect } from "react";

interface ILoadingState {
  status: "loading";
  data: null;
  error: null;
}

interface IErrorState {
  status: "error";
  data: null;
  error: Error;
}

interface ISuccessState<T> {
  status: "success";
  data: T;
  error: null;
}

type state<T> = ILoadingState | IErrorState | ISuccessState<T>;

function useFetch<S = any>(url: string, params: unknown[] = []): state<S> {
  const [state, setState] = useState<state<S>>({
    status: "loading",
    data: null,
    error: null,
  });

  useEffect(() => {
    setState({
      status: "loading",
      data: null,
      error: null,
    });
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data: S) => {
        setState({
          status: "success",
          data,
          error: null,
        });
      })
      .catch((error: Error) => {
        setState({
          status: "error",
          data: null,
          error: error,
        });
      });
  }, params);

  return state;
}

export default useFetch;
