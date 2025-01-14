import './App.scss'
import {useState} from "react";

function App() {
  const [url, setUrl] = useState('www.google.com');
  return (
    <>
      <h1>My Playground Project</h1>
        <p>It is a very sunny day today</p>
        <a href={url}>Go to my website</a>
      <button onClick={() => setUrl('https://www.linkedin.com/feed/')}>Change url</button>
    </>
  )
}

export default App
