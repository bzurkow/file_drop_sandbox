import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const preventDropDefaults = e => {
  e.preventDefault()
  e.stopPropagation()
}

const dropPrevents = {
  onDragEnter: e => preventDropDefaults(e),
  onDragOver: e => preventDropDefaults(e),
  onDragLeave: e => preventDropDefaults(e),
  onDrop: e => preventDropDefaults(e)
}

function App() {
  const [a, b] = useState(0)
  useEffect(()=>{

  },[])
  const [src, setSRC] = useState(null)
  const [file, setFile] = useState(null)
  if(file){
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend = () => setSRC(reader.result)
   // src = reader.result
}
console.log('src', src)
  return (
    <div className="App"
    {...dropPrevents}
    >
      <header className="App-header">
        <div style={{
          width: 200,
          height: 200,
          border: 'solid 1px #fff'
        }}
        onDragEnter={e=>{
          e.preventDefault()
          e.stopPropagation()
          b(100)
          return
        }}
        onDragOver={e=>{
          e.preventDefault()
          e.stopPropagation()
          b(a+1)
          return
        }}

        onDragLeave={e=>{
          e.preventDefault()
          e.stopPropagation()
          b(-100)
          return
        }}
        onDrop={(e)=>{
          e.preventDefault()
          e.stopPropagation()
          let dt = e.dataTransfer
          let files = dt.files

          console.log(files[0])
          setFile(files[0])
          console.log(dt.items)
          return
        }}
        >
        </div>
        <p>{a}</p>
        {
          file !== null ? 
          <img src={src} />
          : null
        }
      </header>
    </div>
  );
}

export default App;
