import React from 'react'

import Container from '../components/Styleguide/Container'
import LogoutBtn from '../components/LogoutBtn'
import { useStore, dispatch } from '../state'

const increment = () => dispatch({ type: 'increment' })
const decrement = () => dispatch({ type: 'decrement' })
const addFood = () =>
  dispatch({ type: 'add_food', food: { name: 'BORA!', category: 'SEILA' } })

const Home = () => {
  const counter = useStore('counter')
  const foods = useStore('foods')
  return (
    <Container className="h-100 w-100 flex">
      <h1>App home</h1>
      <span>Count:{counter}</span>
      <button type="button" onClick={increment}>
        more
      </button>
      <button type="button" onClick={decrement}>
        less
      </button>
      <button type="button" onClick={addFood}>
        add food
      </button>
      {foods.map(fruit => (
        <div>
          <p>{fruit.name}</p>
        </div>
      ))}
      <LogoutBtn />
    </Container>
  )
}

export default Home
