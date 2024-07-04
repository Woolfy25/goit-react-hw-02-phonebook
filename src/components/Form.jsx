import React from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';
import Contacts from './Contacts';

import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
      number: '',
    };
  }
  nameLabelID = nanoid();
  numberLabelID = nanoid();

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    if (name && number) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
        number: '',
      });
    }
  };

  render() {
    const {} = this.props;
    const { contacts } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameLabelID}>Name</label>
        <input
          className={css.userName}
          type="text"
          name={this.nameLabelID}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label htmlFor={this.numberLabelID}>Number</label>
        <input
          type="tel"
          name={this.numberLabelID}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
        <button type="submit">Submit</button>

        <Contacts titleName={'Contacts'} contacts={contacts} />
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
