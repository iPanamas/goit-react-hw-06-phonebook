// Hooks react-redux
import { useSelector, useDispatch } from 'react-redux';

// Redux-actions
import actions from 'redux/contact/contactActions';

// Styles
import s from './Contact.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const { deleteContact } = actions;

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFiltered = filter.toLowerCase();

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFiltered)
    );
  };

  const visibleContacts = filteredContacts();

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <p className={s.contactList__text}>
            {name}: {number}
          </p>
          <button
            className={s.contactList__button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
