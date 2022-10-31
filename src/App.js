import { useState } from 'react';
import Values from 'values.js';
import './App.css';
import ColorBox from './ColorBox';

function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [colorList, setColorList] = useState(new Values("#102363").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setColorList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div className="headerContainer">
        <h2>Generador de colores</h2>
        <form onSubmit={handleSubmit}>
          <input className={`${error ? 'error' : null}`} type="text" value={color} placeholder={'#102363'} onChange={(e) => setColor(e.target.value)} />
          <button className="formBtn" type="submit">Generar</button>
        </form>
      </div>
      <div className="colorsContainer">
        {colorList.map( (color,index) => {
          console.log(color)
          return <ColorBox index={index} {...color} key={index} hexColor={color.hex}/>
        })}
      </div>
    </div>
  );
}

export default App;
