import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import store from './Store/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
