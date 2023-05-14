import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Auth0Provider from './auth0/auth0-provider-with-history'


ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
            <Auth0Provider>
                <App />
            </Auth0Provider>
        </BrowserRouter>
);