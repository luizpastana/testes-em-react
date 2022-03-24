import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa se a aplicação contém um conjunto fixo de links de navegação', () => {
  it('Testa o link "Home"', () => {
    const { history } = renderWithRouter(<App />);
    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();
    userEvent.click(linkHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const homeTitle = screen.getByRole('heading', { name: /Encountered pokémons/i });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Testa o link "About"', () => {
    const { history } = renderWithRouter(<App />);
    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const aboutTitle = screen.getByRole('heading', { name: /About Pokédex/i });
    expect(aboutTitle).toBeInTheDocument();
  });

  it('Testa o link "Favorite Pokemons"', () => {
    const { history } = renderWithRouter(<App />);
    const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(linkFavorite).toBeInTheDocument();
    userEvent.click(linkFavorite);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
    const favoriteTitle = screen.getByRole('heading', { name: /Favorite Pokémons/i });
    expect(favoriteTitle).toBeInTheDocument();
  });
});
