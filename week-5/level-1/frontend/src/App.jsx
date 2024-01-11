import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateCard } from './components/CreateCard'
import './App.css'
import { Cards } from './components/Cards'

function App() {
  const [cards, setCards] = useState([])

  fetch("http://localhost:3000/cards")
  .then(async function(res){
   const data =  await res.json()
   setCards(data.cards)
  })
  return (
    <div>
      <CreateCard></CreateCard>
      <Cards cards = {cards}></Cards>
    </div>
  )
}

export default App
