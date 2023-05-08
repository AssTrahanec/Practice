import React from 'react';
import AppRouter from './AppRouter';
import { AuthProvider } from './AuthContext';

const App = () => {
    return (
            <div>
                {/* Other components in your application */}
                <AppRouter /> {/* Render the router */}
            </div>
    );
}

export default App;
