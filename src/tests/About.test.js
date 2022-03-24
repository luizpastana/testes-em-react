import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa se a pagina "About" contém as informações sobre a Pokedex', () => {
  it('Testa se a página contém um título "h2" com o texto "About Pokedex"', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const haedingAbout = screen.getByRole('heading', {
      level: 2,
      name: /about pokédex/i,
    });
    expect(haedingAbout).toBeInTheDocument();
  });

  it('Testa se a pagina contém dois paragrafos sobre a pokedex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const paragrafos = screen.getAllByRole('paragraph');
    console.log(paragrafos);
    expect(paragrafos.length).toBe(2);
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/about');
    const pokeImage = screen.getByRole('img');
    expect(pokeImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
