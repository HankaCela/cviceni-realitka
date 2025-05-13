import { render } from '@czechitas/render';
import { Header } from '../components/Header';
import { Estate } from '../components/Estate';
import '../global.css';
import './index.css';

const actualEstate = window.location.pathname // vrátí aktuální název stránky

const response = await fetch('https://apps.kodim.cz/daweb/trening-api/apis/realitka/'+actualEstate+'')
const estateData = await response.json()

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <Header title={estateData.title} />
    <main>
      <Estate estateDetail={estateData} />
    </main>

    <footer>
      <p>Copyright 2025</p>
    </footer>
  </div>
);