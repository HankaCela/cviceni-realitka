import './style.css';
import '../global.css';
import './index.css';

import { Header } from './components/Header.jsx';
import { Estate } from './components/Estate.jsx';

const root = document.querySelector('#root');

// Zjistíme, na které stránce jsme (dum01.html → dum01)
const pathname = window.location.pathname;
const page = pathname.split('/').pop().replace('.html', '');

// Sestavíme URL
const apiUrl = `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${page}`;

// Definujeme aplikaci
const App = (estate) => (
  <>
    <Header />
    <Estate estate={estate} />
  </>
);

// Stáhneme data a vykreslíme
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    render(<App {...data} />, root);
  })
  .catch((error) => {
    root.innerHTML = `<p>Chyba při načítání dat: ${error.message}</p>`;
  });
