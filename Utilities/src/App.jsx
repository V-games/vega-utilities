import './App.css'
import {NavWithUserVg} from "./comp/navbar/navbar"
import { Link } from 'react-router-dom';
import { CardWithBgImage } from "./comp/card/card"
import CloseIcon from './comp/icons/close/icon'
import Image from "./assets/Avatar_cat.png"
import { NormalInput, InputWithIcon,Select } from './comp/input/input';

function App() {

  return <>
      <NavWithUserVg />
      <CardWithBgImage width="vg-w25" cont="Caminante no hay camino se hace el camino al andar" title="Card Title" image={<img src={Image} alt="example" className='vg-card-image-b'/>} />
      <br />
      <NormalInput placeholder="Enter your name" />
      <br />
      <InputWithIcon placeholder="Enter your name"><CloseIcon /></InputWithIcon>
      <Select />
  </>
}

export default App
