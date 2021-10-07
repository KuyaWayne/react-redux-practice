import './App.css';
import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';

import Sharingan from './images/sharingan.png';
import BaseLayout from './layouts/BaseLayout';

import NavigationBar from './components/NavigationBar';

export default function App() {
  const [pokemon, setPokemon] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={Sharingan} />
      </Helmet>

      <NavigationBar />

      <main>
        <Container>
          <BaseLayout pokemon={pokemon} />
        </Container>
      </main>
    </Fragment>
  );
}