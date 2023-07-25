import React from "react";
import Section from "../../components/Section/Section";
import Filter from "../../components/Filter/Filter";
import FormToogleBtn from "../../components/FormToogleBtn/FormToogleBtn";
import ThemeButton from "../../components/ThemeButton/ThemeButton";
import ContactList from "../../components/ContactList/ContactList";
import LogOutButton from "../../components/LogOutButton/LogOutButton";
import { CSSTransition } from "react-transition-group";
import styles from "./header.module.css";

const Contacts = () => {
  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        unmountOnExit
        classNames={{ ...styles }}
      >
        <Section title={"Phonebook"}>
          <Filter />
          <LogOutButton />
          <FormToogleBtn />
          <ThemeButton />
        </Section>
      </CSSTransition>

      <ContactList />
    </>
  );
};

export default Contacts;
