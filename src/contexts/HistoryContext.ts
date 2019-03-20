import React from 'react'
import { History } from 'history'

const HistoryContext = React.createContext<History>(null!)
const { Provider, Consumer } = HistoryContext

export default HistoryContext
export { Provider, Consumer }
