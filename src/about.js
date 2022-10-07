import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  const navigate = useNavigate();
  const [titleData, setTitleData] = React.useState('');
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => {
        console.log(dog);
        setTitleData(dog.message);
      });
    console.log('nose');

    //navigate('/')
  }, []);
  return (
    <>
      <Helmet>
        <title>{titleData}</title>
        <meta name="description" content={titleData} />
      </Helmet>
      <h1>about</h1>
    </>
  );
};
