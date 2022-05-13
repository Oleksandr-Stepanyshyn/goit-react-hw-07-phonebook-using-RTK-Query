import PropTypes from 'prop-types';
import { useContacts } from 'redux/contactsSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  const { filtrate } = useContacts();
  return (
    <FilterLabel htmlFor="filter">
      Find contacs by name
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={e => filtrate(e.currentTarget.value)}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
