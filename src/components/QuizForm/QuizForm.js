import { Title } from 'components/ContactList/ContactList.styled';
import { AddContactBtn, Container, InputEl, StyledForm } from './QuizForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'redux/operations';
import { selectItems } from 'redux/selectors';


export const QuizForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const newName = form.elements.name.value;
    const newPhoneNumber = form.elements.contacts.value; 

    const contactData = {
      name: newName,
      number: newPhoneNumber,
    };

    if (contactData.name !== '' && contactData.number !== '') {
  
      const contactExists = items.some(
        item =>
        item.name === contactData.name &&
        item.number === contactData.number
      );

      if (!contactExists) {

        dispatch(addTask(contactData));
        form.reset();
      } else {
        form.reset();
        alert('This contact already exists in your phonebook.');
      }
    } else {
      
      alert('Please enter both Name and Number');
    }
  };

  return (
    <>
      <Title>Phonebook</Title>
      <StyledForm onSubmit={handleSubmit}>
        <ul>
          <Container>
            <p>Name:</p>
            <InputEl
              name="name"
              placeholder="add new name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </Container>
          <Container>
            <p>Number:</p>
            <InputEl
              name="contacts"
              placeholder="add new number"
              pattern="\+?[0-9\s\-\(\)]+"
            />
          </Container>
          <li>
            <AddContactBtn>Add contact</AddContactBtn>
          </li>
        </ul>
      </StyledForm>
    </>
  );
};
