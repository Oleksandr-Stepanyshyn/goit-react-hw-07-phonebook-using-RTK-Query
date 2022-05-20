import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <RotatingLines width="150" strokeWidth="3" />
    </Spinner>
  );
};
