// Hooks react-redux
import { useSelector, useDispatch } from 'react-redux';

// Redux-actions
import actions from 'redux/contact/contactActions';

// Styles
import s from './Contact.module.css';

const ContactFilter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const { changeFilter } = actions;

  return (
    <label className={s.findContactLabel}>
      Find contacts by name
      <input
        className={s.findContactInput}
        type="text"
        value={filterValue}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};

export default ContactFilter;
