import React, { useState } from "react";
import {
  useAddContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/services";
import { Button, Form, Input, Wrap } from "./ContactForm.styled";
import { toast } from "react-toastify";
import Theme from "../../theme/theme";
import { useTheme } from "styled-components";
import InputMask from "react-input-mask";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();
  const { current } = useTheme();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    addContact({ name, number: number });
    toast.info(`You added a contact: ${name}`, {
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
    setName("");
    setNumber("");
  };

  const isContactExist =
    contacts &&
    contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  if (isContactExist) {
    toast.error(`Contact with name ${name} already exists!`, {
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
  }

  const isNumberExist =
    contacts &&
    contacts.find(
      (contact) =>
        contact.number.replace(/\D/g, "") === number.replace(/\D/g, "")
    );

  if (isNumberExist) {
    toast.error(`Number ${number} is already in contacts!`, {
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        console.log(value);

        setNumber(value);
        break;

      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input
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
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Number"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
          // title="Phone number must be format: 012-34-56-789"
          required
        />
      </InputMask>

      {name && number && (
        <Wrap>
          <Button
            type="submit"
            disabled={isContactExist || isLoading || isNumberExist}
          >
            Add contact
          </Button>
        </Wrap>
      )}
    </Form>
  );
};

export default ContactForm;

// export default class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleSubmit = (evt) => {
//     evt.preventDefault();

//     this.props.onAddContact(this.state);
//     this.setState({ name: "", number: "" });
//   };

//   handleChange = (evt) => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit} autoComplete="off">
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={this.handleChange}
//           placeholder="Name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={this.handleChange}
//           placeholder="Number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
