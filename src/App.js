import './App.css';
import NavComponent from './NavComponent';
import News from './News';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const AppContext = createContext()

function App() {
  const client = new QueryClient();
  const [search, setSearch] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0])

  return (
    <AppContext.Provider value={{ search, setSearch }}>
      <QueryClientProvider client={client}>
          <NavComponent />
          <News />
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
