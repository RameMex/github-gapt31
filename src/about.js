import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const About = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => console.log(dog))
      .catch((err) => console.log(err));
    console.log('nose');

    //navigate('/')
  }, []);
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <h1>about</h1>
    </>
  );
};
