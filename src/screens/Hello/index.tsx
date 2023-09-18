import { FC, useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Greetings } from '../../components/Greetings';
import './index.css';

export const Hello: FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(!showContent), 4400);
  }, []);

  return (
    <div className='Hello'>
      {showContent ? (
        <section className='about'>
          <video className='video' src='src/video/intro_video.mov' autoPlay muted></video>
          <Navbar />
          <Greetings />
        </section>
      ) : (
        <section className='about'>
          <video className='video' src='src/video/intro_video.mov' autoPlay muted></video>
        </section>
      )}
    </div>
  );
};
