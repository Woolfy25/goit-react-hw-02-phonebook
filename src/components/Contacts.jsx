import React from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ titleName, contacts, ids }) => {
  return (
    <div>
      <h2>{titleName}</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  titleName: PropTypes.string.isRequired,
  //   ids: PropTypes.string.isRequired,
  //   contacts: PropTypes.string.isRequired,
};

export default Contacts;
