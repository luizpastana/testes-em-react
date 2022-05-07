import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa o componente NotFound', () => {
  it('Testa se página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-que-nao-existe');
    const msgNotFound = screen.getByRole('heading',
      { level: 2, name: /page requested not found Crying emoji/i });
    expect(msgNotFound).toBeInTheDocument();
  });

  it('Testa se página mostra a imagem', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pagina-que-nao-existe');
    const pikachuCrying = screen.getByRole('img',
      { name: 'Pikachu crying because the page requested was not found' });
    expect(pikachuCrying).toBeInTheDocument();
    expect(pikachuCrying).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
