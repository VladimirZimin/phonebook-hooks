import React from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operations";
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

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
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
        <Title>Welcome back</Title>
        <Text>Log in to your account</Text>
        <Form onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="Mail" required />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <WrapBtn>
            <Button type="submit">Log in</Button>
            <LinkButton to="/register">Create New Account</LinkButton>
          </WrapBtn>
        </Form>
      </Wrapper>
    </CSSTransition>
  );
};

export default Login;
