import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useLocalStorage } from 'react-use';
import { MyForm, Label, Input, Button } from './ContactForm.styled';
import { useContacts } from 'Hooks/useContacts';

const validateValue = {
  name: {
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    message:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

const initialValue = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(validateValue.name.pattern, {
      message: validateValue.name.message,
    })
    .required(),
  number: yup
    .string()
    .matches(validateValue.number.pattern, {
      message: validateValue.number.message,
    })
    .required(),
});

export const ContactForm = () => {
  // const [name, setName] = useLocalStorage('name', '');
  // const [number, setNumber] = useLocalStorage('number', '');
  const { setContact } = useContacts();

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    setContact(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <MyForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            // onChange={handleChange}
          />
        </Label>
        <ErrorMessage name="name" component="div" />
        <Label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            // onChange={handleChange}
          />
        </Label>
        <ErrorMessage name="number" component="div" />
        <Button type="submit">Add contact</Button>
      </MyForm>
    </Formik>
  );
};
