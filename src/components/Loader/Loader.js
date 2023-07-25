import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height={30}
      width={30}
      color="#ffffff"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#0f0534"
      strokeWidth={3}
      strokeWidthSecondary={0}
    />
  );
};

export default Loader;
