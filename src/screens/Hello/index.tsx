import { FC } from 'react';
import { Navbar } from '../../components/Navbar';
import { Greetings } from '../../components/Greetings';

export const Hello: FC = () => (
  <div className='Hello'>
    <Navbar />
    <Greetings />
  </div>
);
