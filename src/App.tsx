import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-900">
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App;
