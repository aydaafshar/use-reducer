import React from "react";
import { useReducer, useState } from "react";
import Axios from "axios";
export default function Fact() {
  const [loading, setLoading] = useState(false);
  const [fact, setFact] = useState("");
  const [error, setError] = useState(false);

  //fetch-start : loading : true
  //fetch-success : loading : false
  //               :fact : res.data.fact
  //
  //fetch-error : loading : false
  //            :error : true
  const handleFetch = () => {
    setLoading(true);
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res);
        setLoading(false);

        setFact(res.data.fact);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setFact("");
        setError(true);
      });
  };

  return (
    <div>
      <button onClick={handleFetch}>
        {loading ? "is loding..." : "Fetch Cat Fact"}
      </button>
      {error && <p>Error, something is wrong</p>}
      <h1>{fact}</h1>
    </div>
  );
}
