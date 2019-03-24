import {
  createContext,
  createElement,
  useState,
  useEffect,
  useContext,
  Dispatch,
} from 'react'

import { List } from 'immutable'

const createStore: CreateStore = (reducer: Reducer, initialState) => {
  let store = initialState
  let subscribers = List<Dispatch<any>>()

  const Context = createContext(initialState)

  const StoreProvider = ({ children }: StoreProviderProps) => {
    const [state, setState] = useState(initialState)
    useEffect(() => {
      subscribers = subscribers.push(setState)
      store !== initialState && setState(store)
      return () => {
        subscribers = subscribers.delete(subscribers.indexOf(setState))
      }
    }, [store])
    return createElement(Context.Provider, { value: state }, children)
  }

  const useStore: UseStore = (name: string) => {
    const state = useContext(Context)
    return state[name]
  }

  const setState: StateMutation = state => {
    store = state
    subscribers.forEach(f => f(store))
  }

  const dispatch: Dispatch<any> = action => {
    const newState = reducer(store, action)
    setState(newState)
    return action
  }

  return {
    StoreProvider,
    useStore,
    store,
    dispatch,
  }
}

export default createStore
