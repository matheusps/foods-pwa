interface StoreProviderProps {
  readonly children?: React.ReactNode
}

interface Action {
  type: string
  payload?: any
}

interface Reducer {
  (state: any, action: Action): any
}

interface UseStore {
  (name: string): any
}

interface StateMutation {
  (state: any): void
}

interface Store {
  StoreProvider: React.ComponentType<StoreProviderProps>
  useStore: UseStore
  store: any
  dispatch: Dispatch<any>
}

interface CreateStore {
  (reducer: Reducer<any, Action>, initialState: any): Store
}
