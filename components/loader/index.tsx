import { useState, CSSProperties } from "react";
import { RingLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
  };
  

const Loader = ({ loading=true }) => {
    return (
        <RingLoader 
            color="#36d7b7"
            size={85}
            loading={loading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Loader;