import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PokemonCard from '../components/PokemonCard';

export default function BaseLayout({ pokemon }) {
  return (
    <Row>
      {
        pokemon.map((poke, index) => {
          return (
            <Col xs={12} lg={3} key={index}>
              <PokemonCard pokemon={poke}/>
            </Col>
          )
        })
      }
    </Row>
  )
}
