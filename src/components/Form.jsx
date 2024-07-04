import React from 'react';
import css from './Form.module.css';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      name: '',
    };
  }
  nameLabelID = nanoid();
  numberLabelID = nanoid();

  render() {
    const {} = this.props;
    return (
      <form>
        <label htmlFor={this.nameLabelID}>Name</label>
        <input
          className={css.userName}
          type="text"
          name={this.nameLabelID}
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.numberLabelID}>Number</label>
        <input
          type="tel"
          name={this.numberLabelID}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

Form.propTypes = {};

export default Form;
