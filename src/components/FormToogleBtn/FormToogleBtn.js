import React, { useState } from "react";
import { useTheme } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { Button, MdBtn } from "../../style/Button.styled";
import ContactForm from "../ContactForm/ContactForm";
import { CSSTransition } from "react-transition-group";
import styles from "./style.module.css";

const FormToogleBtn = () => {
  const [formToogle, setFormToogle] = useState(false);
  const { current } = useTheme();
  return (
    <>
      <Button type="button" onClick={() => setFormToogle(!formToogle)}>
        <MdBtn
          color={current === Theme.LIGHT ? ColorDark.BTN : ColorLight.BTN}
        />
      </Button>

      <CSSTransition
        in={formToogle}
        timeout={250}
        unmountOnExit
        classNames={{ ...styles }}
      >
        <ContactForm />
      </CSSTransition>
    </>
  );
};

export default FormToogleBtn;
