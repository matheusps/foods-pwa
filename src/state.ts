import createStore from './modules/StateStore'

interface Food {
  name: string
  category: string
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'add_food'; food: Food }

export const { StoreProvider, dispatch, useStore } = createStore(
  (state, action: Action) => {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          counter: state.counter + 1,
        }
      case 'decrement':
        return {
          ...state,
          counter: state.counter - 1,
        }
      case 'add_food':
        return {
          ...state,
          foods: [action.food, ...state.foods],
        }
      default:
        return state
    }
  },
  {
    counter: 5,
    foods: [
      { name: 'banana', category: 'fruit' },
      { name: 'burger', category: 'junk' },
    ],
  }
)
