import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ findContact, removeContact }) => {
  return (
    <ul>
      {findContact.map((contact) => {
        return (
          <li className={styles.item} key={contact.id}>
            <span className={styles.span}>{contact.name}:</span>
            &nbsp;
            <span className={styles.span}>{contact.number}</span>
            <button
              className={styles.btn}
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  findContact: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
