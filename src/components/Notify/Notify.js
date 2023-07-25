import React from "react";
import { useTheme } from "styled-components";
import Theme from "../../theme/theme";
import { toast } from "react-toastify";

const Notify = () => {
  const { current } = useTheme();
  const notify = () =>
    toast("Welcome to Phonebook", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
  return <>{notify()}</>;
};

export default Notify;
