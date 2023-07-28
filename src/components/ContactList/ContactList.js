import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../redux/contacts/services";
import {
  Button,
  DeleteBtn,
  EditBtn,
  List,
  Name,
  Phone,
} from "./ContactList.styled";
import { selectFilter } from "../../redux/selectors";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import { useTheme } from "styled-components";
import Theme from "../../theme/theme";

const ContactList = () => {
  const [showInput, setShowInput] = useState("");
  const [editContact, setEditContact] = useState({});
  const [closeEditForm, setCloseEditForm] = useState(true);
  const [deleteContactApi] = useDeleteContactMutation();
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const { current } = useTheme();

  const getVisibleContacts = () => {
    return (
      contacts &&
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const deleteContact = (name, id) => {
    deleteContactApi(id);
    toast.error(`You deleted the contact: ${name}`, {
      theme: current === Theme.LIGHT ? "light" : "dark",
    });
  };

  const handleEditContact = (editContact) => {
    setShowInput(editContact.id);
    setEditContact(editContact);
    setCloseEditForm(true);
  };

  const handleCloseEditForm = (value) => {
    setCloseEditForm(value);
  };

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {getVisibleContacts().map((contact) => (
            <List
              key={contact.id}
              value={contact}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              {showInput === contact.id && closeEditForm ? (
                <EditForm
                  contacts={editContact}
                  closeEditForm={handleCloseEditForm}
                />
              ) : (
                <>
                  <Name>
                    <b>{contact.name}:</b>
                  </Name>
                  <Phone>{contact.number}</Phone>
                  <Button onClick={() => handleEditContact(contact)}>
                    <EditBtn />
                  </Button>
                  <Button
                    onClick={() => deleteContact(contact.name, contact.id)}
                  >
                    <DeleteBtn />
                  </Button>
                </>
              )}
            </List>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default ContactList;
