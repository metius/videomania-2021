import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.component';
import BottomNav from './components/navigation/BottomNav/BottomNav.component';

import HomePage from './pages/Home.page';
import MoviesPage from './pages/Movies.page';
import TvShowsPage from './pages/TvShows.page';
import ProfilePage from './pages/Profile.page';
import ItemPage from './pages/Item.page';
import SearchPage from './pages/Search.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/item/:id">
          <ItemPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/tv-shows">
          <TvShowsPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      
      {/* <Footer /> */}

      <BottomNav />
    </div>
  );
}

export default App;
