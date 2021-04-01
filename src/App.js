import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.component';
import BottomNav from './components/navigation/BottomNav/BottomNav.component';

import HomePage from './pages/Home/Home.page';
import MoviesPage from './pages/Movies/Movies.page';
import TvShowsPage from './pages/TvShows/TvShows.page';
import ProfilePage from './pages/Profile/Profile.page';
import ItemPage from './pages/Item/Item.page';
import SearchPage from './pages/Search/Search.page';
import NotFoundPage from './pages/NotFound/NotFound.page';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/item/:id">
          <ItemPage />
        </Route>
        <Route exact path="/movies">
          <MoviesPage />
        </Route>
        <Route exact path="/tv-shows">
          <TvShowsPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact>
          <NotFoundPage />
        </Route>
      </Switch>
      
      {/* <Footer /> */}

      <BottomNav />
    </div>
  );
}

export default App;
