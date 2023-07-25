import React, { Suspense, lazy, useState } from "react";
import Theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalReset from "./style/globalStyle/GlobalReset";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "./redux/operations";
import { selectIsRefreshing } from "./redux/selectors";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import Notify from "./components/Notify/Notify";
import "react-toastify/dist/ReactToastify.css";

const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Contacts = lazy(() => import("./pages/Contacts/Contacts"));

const App = () => {
  const [theme, setTheme] = useState(
    () => JSON.parse(window.localStorage.getItem("phoneTheme")) ?? Theme.LIGHT
  );
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  useEffect(
    () => window.localStorage.setItem("phoneTheme", JSON.stringify(theme)),
    [theme]
  );

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>
      <GlobalReset />
      <Suspense fallback={""}>
        {isRefreshing ? (
          <Notify />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/" component={<Login />} />}
            />
          </Routes>
        )}
      </Suspense>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </ThemeProvider>
  );
};

export default App;

// export default class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   componentDidMount() {
//     const contact = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contact);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContacts = (abonent) => {
//     const { name, number } = abonent;

//     console.log("name:", name);

//     const newContact = this.state.contacts
//       .map((contact) => contact.name.toLowerCase())
//       .includes(name.toLowerCase());

//     if (newContact) {
//       alert(`${name} is already in contacts.`);
//     } else {
//       const contact = {
//         id: nanoid(),
//         name,
//         number,
//       };

//       this.setState((prevState) => ({
//         contacts: [...prevState.contacts, contact],
//       }));
//     }
//   };

//   handleChangeFilter = (evt) => {
//     this.setState({ filter: evt.target.value });
//   };

//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   removeContact = (id) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <>
//         <Section title={"Phonebook"}>
//           <ContactForm onAddContact={this.addContacts} />
//         </Section>

//         <Section title={"Contacts"}>
//           <FindWrap>
//             <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
//             <MdOutlineSearch className="react-icons" color="" size={20} />
//           </FindWrap>

//           <ContactList
//             contacts={this.getVisibleContacts()}
//             onRemoveContact={this.removeContact}
//           />
//         </Section>
//       </>
//     );
//   }
// }
