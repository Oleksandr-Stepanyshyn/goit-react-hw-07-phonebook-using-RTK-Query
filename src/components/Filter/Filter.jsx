import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({onChange, value}) => {
  return(
    <FilterLabel htmlFor="filter">
      Find contacs by name
      <FilterInput type="text" name="filter" value={value} onChange={onChange} />
    </FilterLabel>
  )
}