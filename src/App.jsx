import { useState } from 'react';
import Container from './components/container';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
        <Container />
     </div>
   
  )
}

export default App
