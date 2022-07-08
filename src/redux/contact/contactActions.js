import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add');

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/ChangeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
