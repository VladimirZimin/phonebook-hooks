import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../../services/services";
import { Button, DeleteBtn, List, Name, Phone } from "./ContactList.styled";
import { selectFilter } from "../../redux/selectors";
import Section from "../Section/Section";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ContactList = () => {
  const [deleteContactApi] = useDeleteContactMutation();
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

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
      theme: "dark",
    });
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
              <Name>
                <b>{contact.name}:</b>
              </Name>
              <Phone>{contact.phone}</Phone>
              <Button onClick={() => deleteContact(contact.name, contact.id)}>
                <DeleteBtn />
              </Button>
            </List>
          ))}
        </ul>
      )}
    </Section>
  );
};

export default ContactList;
