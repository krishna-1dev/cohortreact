import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyShopContextProvider } from './Context/MyShop.jsx'

createRoot(document.getElementById('root')).render(
  <MyShopContextProvider>
    <App />
  </MyShopContextProvider>
)
