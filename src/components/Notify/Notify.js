import React from "react";
import { useTheme } from "styled-components";
import Theme from "../../theme/theme";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";

const Notify = () => {
  const user = useSelector(selectUser);
  const { current } = useTheme();

  const notify = () =>
    toast(`${user.name} welcome to Phonebook`, {
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
