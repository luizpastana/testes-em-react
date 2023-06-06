import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import Pokemon from '../components/Pokemon';

describe('Testa o componente Favorites Pokemons', () => {
  it('Testa se, caso não exista nenhum favorito, '
  + 'a mensagem "No favorite pokemon found" é exibida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites');
    const msgNoFound = screen.getByText(/no favorite pokemon found/i);
    expect(msgNoFound).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    // const pokemon =
    //   {
    //     id: 148,
    //     name: 'Dragonair',
    //     type: 'Dragon',
    //     averageWeight: {
    //       value: '16.5',
    //       measurementUnit: 'kg',
    //     },
    //     image: 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png',
    //     moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
    //     foundAt: [
    //       {
    //         location: 'Johto Route 45',
    //         map: 'https://cdn2.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png',
    //       },
    //       {
    //         location: 'Johto Dragon\'s Den',
    //         map: 'https://cdn2.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png',
    //       },
    //     ],
    //     summary: 'They say that if it emits an aura from its whole body, the weather will begin to change instantly.',
    //   };
    // renderWithRouter(<Pokemon pokemon={ pokemon } />);
    // // console.log(pokemon);
    // const pokemons = screen.
  });
  // Show!! consegui pegar o pokemon, só dar sequencia :D
});
