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
import Events from './componentsNew/Events/Events';
import Friends from './componentsNew/Friends/Friends';
import AllEvents from './componentsNew/Events/AllEvents/AllEvents';
import MyEvents from './componentsNew/Events/MyEvents/MyEvents';

function App() {
  return (
    <div className="appBody">
      <Header />
      <Grid container>
        <Grid item sm={12}>
          <Main />
          <Routes>
          <Route path="/" element={<Events />} />
            <Route path="/events" element={<Events />}>
              <Route path="all-events" element={<AllEvents />} />
              <Route path="my-events" element={<MyEvents />} />
            </Route>
            <Route path="/friends" element={<Friends />} />
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
