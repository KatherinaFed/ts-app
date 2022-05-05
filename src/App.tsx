import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/MainPage/Main';
import Running from './components/activities/Running';
import Cycling from './components/activities/Cycling';
import Swimming from './components/activities/Swimming';
import Climbing from './components/activities/Climbing';
import Yoga from './components/activities/Yoga';
import Boxing from './components/activities/Boxing';

function App() {
  return (
    <div className="appBody">
      <Header />
      <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/running" element={<Running />} />
            <Route path="/cycling" element={<Cycling />} />
            <Route path="/swimming" element={<Swimming />} />
            <Route path="/climbing" element={<Climbing />} />
            <Route path="/yoga" element={<Yoga />} />
            <Route path="/boxing" element={<Boxing />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}

export const RunApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
