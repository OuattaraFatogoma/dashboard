import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import {Topbar, Sidebar} from './components';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Team, Invoices, Contacts, Bar, Form, Pie, Geography, Faq, Calendar, Line } from './pages';
import { useState } from 'react';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
          <Box className='content'>
            <Topbar setIsSidebarOpen={setIsSidebarOpen}/>
            <Box margin=" 1rem 1.5rem">
              <Routes>
                <Route path='/' element={<Dashboard/>} />
                <Route path='/team' element={<Team/>} />
                <Route path='/contact' element={<Contacts/>} />
                <Route path='/invoices' element={<Invoices/>} />
                <Route path='/form' element={<Form/>} />
                <Route path='/faq' element={<Faq/>} />
                <Route path='/calendar' element={<Calendar/>} />
                <Route path='/bar' element={<Bar/>} />
                <Route path='/line' element={<Line/>} />
                <Route path='/pie' element={<Pie/>} />
                <Route path='/geography' element={<Geography/>} />
              </Routes>
            </Box>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
