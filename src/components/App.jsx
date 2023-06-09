import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '480px',
        margin: '20px auto',
        backgroundColor: ' rgb(187, 187, 187)',
        borderRadius: '10px',
        padding: '40px 20px',
      }}
    >
      <h1 className={css.phohebookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phohebookTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <b className={css.loader}>Loading...</b>}
      <ContactList />
    </div>
  );
};
