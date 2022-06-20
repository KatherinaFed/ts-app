import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage/Login';
import Header from './componentsNew/Header/Header';
import { Grid } from '@mui/material';
import Main from './pages/MainPage/Main';
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
