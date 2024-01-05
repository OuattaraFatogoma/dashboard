import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import {Topbar, Sidebar} from './components';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Team, Invoices, Contacts, Bar, Form, Pie, Geography, Faq, Calendar } from './pages';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          
          <Sidebar/>
          <div className='content'>
            <Topbar/>
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/team' element={<Team/>} />
              <Route path='/contact' element={<Contacts/>} />
              <Route path='/invoices' element={<Invoices/>} />
              <Route path='/form' element={<Form/>} />
              <Route path='/faq' element={<Faq/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/geography' element={<Geography/>} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
