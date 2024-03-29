import React, { useState } from "react";
import { useEditContactsMutation } from "../../redux/contacts/services";
import { toast } from "react-toastify";
import Theme from "../../theme/theme";
import { useTheme } from "styled-components";
import { Button, Form, InputName, InputPhone } from "./EditForm.style";
import InputMask from "react-input-mask";

const EditForm = ({ contacts, closeEditForm }) => {
  const [name, setName] = useState(contacts.name);
  const [number, setNumber] = useState(contacts.number);
  const [editContactName] = useEditContactsMutation();
  const { current } = useTheme();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    editContactName({ name: name, number: number, id: contacts.id });
    toast.info(`You edit contact: ${name}`, {
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
    closeEditForm(false);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputName
        autoFocus
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        required
      />

      <InputMask
        mask="+38(999)-99-99-999"
        maskPlaceholder="-"
        onChange={handleChange}
        value={number}
        placeholder="Number"
      >
        <InputPhone
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Number"
          required
        />
      </InputMask>

      {contacts.name && contacts.number && (
        <Button type="submit" disabled={false}>
          Edit
        </Button>
      )}
    </Form>
  );
};

export default EditForm;
