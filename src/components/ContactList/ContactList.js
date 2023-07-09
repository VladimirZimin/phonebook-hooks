import React from "react";
import { useDeleteContactMutation } from "../../services/services";
import { Button, DeleteBtn, List, Name, Phone } from "./ContactList.styled";

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <List key={id}>
          <Name>
            <b>{name}:</b>
          </Name>
          <Phone>{phone}</Phone>
          <Button onClick={() => deleteContact(id)}>
            <DeleteBtn />
          </Button>
        </List>
      ))}
    </ul>
  );
};

export default ContactList;
