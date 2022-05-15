import { useContacts } from 'Hooks/useContacts';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const { filtrate, filter } = useContacts();
  return (
    <FilterLabel htmlFor="filter">
      Find contacs by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => filtrate(e.currentTarget.value)}
      />
    </FilterLabel>
  );
};
