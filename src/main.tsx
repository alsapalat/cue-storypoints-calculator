import ReactDOM from 'react-dom/client'
import { Provider, Provider2 } from './context';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <Provider>
      <App />
    </Provider>
    {/* <Provider2>
      <App />
    </Provider2> */}
  </>,
)
