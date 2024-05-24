import './App.css'
import Navbar from "./comp/navbar/navWithUser"
import { Link } from 'react-router-dom';
import { CardWithBgImage } from "./comp/card/card"
import CloseIcon from './comp/icons/close/icon'
import Image from "./assets/Avatar_cat.png"

function App() {

  return <>
      <Navbar />
      <CardWithBgImage cont="Caminante no hay camino se hace el camino al andar" title="Card Title" image={<img src={Image} alt="example" className='vg-card-image-b vg-w100'/>} />
  </>
}

export default App
