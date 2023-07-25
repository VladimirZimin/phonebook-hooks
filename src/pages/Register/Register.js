import React from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/operations";
import {
  Button,
  Form,
  Input,
  LinkButton,
  Text,
  Title,
  WrapBtn,
  Wrapper,
} from "../Auth.styled";
import { CSSTransition } from "react-transition-group";
import styles from "./style.module.css";

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      unmountOnExit
      classNames={{ ...styles }}
    >
      <Wrapper>
        <Title>Welcome!</Title>
        <Text>Let's create your account</Text>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Mail" required />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <WrapBtn>
            <Button type="submit">Create</Button>
            <LinkButton to="/login">Log in</LinkButton>
          </WrapBtn>
        </Form>
      </Wrapper>
    </CSSTransition>
  );
};

export default Register;
