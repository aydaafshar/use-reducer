import React from "react";
import { useReducer, useState } from "react";
import Axios from "axios";
import { factReducer, initilalState } from "./factReducer";
import { ACTION_TYPES } from "./factAction";
import "./fact.css";
export default function Fact() {
  //   const [loading, setLoading] = useState(false);
  //   const [fact, setFact] = useState("");
  //   const [error, setError] = useState(false);

  //fetch-start : loading : true
  //fetch-success : loading : false
  //               :fact : res.data.fact
  //
  //fetch-error : loading : false
  //            :error : true
  const [state, dispatch] = useReducer(factReducer, initilalState);
  //   setLoading(true);
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.fetch_start });
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res);
        dispatch({ type: ACTION_TYPES.fetch_success, data: res.data.fact });

        //   setLoading(false);

        //   setFact(res.data.fact);
      })
      .catch((error) => {
        dispatch({ type: ACTION_TYPES.fetch_error });

        console.log(error);
        //   setLoading(false);
        //   setFact("");
        //   setError(true);
      });
  };
  return (
    <div className="container">
      <button onClick={handleFetch} className="btn">
        {state.loading ? "is loding..." : "Fetch Cat Fact"}
      </button>
      {state.error && <p>Error, something is wrong</p>}
      <h1 className="fact">{state.fact}</h1>
    </div>
  );
}
