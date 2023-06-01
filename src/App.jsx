import { Header } from './components/header'
import { Presentation } from './components/presentation'
import { Desings } from './components/designs'
import './styles/header.css'
import './styles/presentation.css'
import './styles/desings.css'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Presentation
        title="Royer Aranibar"
        description="Soy un diseñador gráfico apasionado y creativo, dedicado a transformar ideas en impactantes piezas visuales. Con habilidades en branding, diseño de logotipos y materiales impresos, busco transmitir mensajes claros y atractivos a través de mi trabajo. Mi objetivo es cautivar y dejar una huella duradera en cada proyecto en el que participo. ¡Déjame dar vida a tus ideas y llevar tu marca al siguiente nivel!"
      />
      <div className='desings-body'>
        <h2 id='desings'>Desings</h2>
        <div className='desings-main'>
          <Desings
            img="1"
            title="Desing 1"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
          <Desings
            img="2"
            title="Desing 2"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
          <Desings
            img="3"
            title="Desing 3"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
          <Desings
            img="4"
            title="Desing 4"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
          <Desings
            img="5"
            title="Desing 5"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, doloremque."
          />
        </div>
      </div>
    </div>
  )
}

export default App
