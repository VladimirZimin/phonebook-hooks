import { useTheme } from "styled-components";
import Theme, { ColorDark, ColorLight } from "../../theme/theme";
import { Button, MdBtn } from "../../style/Button.styled";
import ContactForm from "../ContactForm/ContactForm";
import { CSSTransition } from "react-transition-group";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectShowEditForm } from "../../redux/selectors";
import { showEditForm } from "../../redux/contacts/contactSlice";

const FormToogleBtn = () => {
  const dispatch = useDispatch();
  const isShow = useSelector(selectShowEditForm);

  const { current } = useTheme();
  return (
    <>
      <Button type="button" onClick={() => dispatch(showEditForm())}>
        <MdBtn
          color={current === Theme.LIGHT ? ColorDark.BTN : ColorLight.BTN}
        />
      </Button>

      <CSSTransition
        in={isShow}
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
