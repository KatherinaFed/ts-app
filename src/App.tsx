import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Header from './components/Header/Header';
import { Grid } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './pages/MainPage/Main';
import Running from './components/Activities/Running';
import Cycling from './components/Activities/Cycling';
import Swimming from './components/Activities/Swimming';
import Climbing from './components/Activities/Climbing';
import Yoga from './components/Activities/Yoga';
import Boxing from './components/Activities/Boxing';
import { Provider } from 'react-redux';
import store from './store/store';

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
            <Route path="/boxing" element={<Boxing />} />
            <Route path="/yoga" element={<Yoga />} />
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
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};
