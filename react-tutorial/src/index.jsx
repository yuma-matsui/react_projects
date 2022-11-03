import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import { AdminFlagProvider } from './providers/AdminFlagProvider';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AdminFlagProvider>
      <App />
  </AdminFlagProvider>
)
