import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header.component';
import BottomNav from './components/navigation/BottomNav/BottomNav.component';

import HomePage from './pages/Home/Home.page';
import MoviesPage from './pages/Movies/Movies.page';
import MovieCardPage from './pages/Movies/MovieCard.page'
import TvShowsPage from './pages/TvShows/TvShows.page';
import TvCardPage from './pages/TvShows/TvCard.page';
import ProfilePage from './pages/Profile/Profile.page';
// import ItemPage from './pages/Item/Item.page';
import SearchPage from './pages/Search/Search.page';
import NotFoundPage from './pages/NotFound/NotFound.page';

import {Authprovider} from './firebase/context';

function App() {
  return (
    <Authprovider>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/movie/:id" component={MovieCardPage} type='movie' />
          <Route exact path="/movies" component={MoviesPage} />
          <Route exact path="/tv/:id" component={TvCardPage} />
          <Route exact path="/tv-shows" component={TvShowsPage} />
          <Route exact path="/cast/:id" component={ProfilePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />
          <Route exact component={NotFoundPage} />
        </Switch>
        
        {/* <Footer /> */}

        <BottomNav />
      </div>
    </Authprovider>
  );
}

export default App;
