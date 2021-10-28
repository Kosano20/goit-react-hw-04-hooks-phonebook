import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./contactList/ContactList";
import ContactForm from "./contatctForm/ContactForm";
import Filter from "./filter/Filter";
import "./App.css";

const App = () => {
  const [contactsList, setСontactsList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      setСontactsList([...contactsList, ...contacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsList));
  }, [contactsList]);

  const addNewContact = (newContact) => {
    setСontactsList([...contactsList, { ...newContact, id: uuidv4() }]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "filter" && setFilter(value);
  };

  const removeContact = (idx) => {
    setСontactsList((contactsList) => {
      return contactsList.filter((contact) => contact.id !== idx);
    });
  };

  const findContact = (e) => {
    return contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const isThereContact = (name) =>
    contactsList.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

  return (
    <div className="block">
      <h1>Phonebook</h1>

      <ContactForm
        addNewContact={addNewContact}
        isThereContact={isThereContact}
      />

      <h2>Contacts</h2>

      <Filter filter={filter} onChange={handleChange} />

      <ContactList findContact={findContact()} removeContact={removeContact} />
    </div>
  );
};

export default App;
