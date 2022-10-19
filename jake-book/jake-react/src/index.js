import ReactDom from 'react-dom'

import { App } from './App'
import { AdminFlagProvider } from './components/providers/AdminFlagProvider'

ReactDom.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById('root')
)
