import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom'
import {UserContext} from '../firebase/UserProvider';

import Main from '../components/layout/main/Main.component';
import HomePage from '../pages/Home/Home.page';
import MoviesPage from '../pages/Movies/Movies.page';
import MovieCardPage from '../pages/Movies/MovieCard.page'
import TvShowsPage from '../pages/TvShows/TvShows.page';
import TvCardPage from '../pages/TvShows/TvCard.page';
import CastPage from '../pages/Cast/Cast.page';
import ProfilePage from '../pages/Profile/Profile.page';
import SignInSignUpPage from '../pages/SignInSignUp/SignInSignUp.page';
import PasswordResetPage from '../pages/PasswordReset/PasswordReset.page';
// import ItemPage from './pages/Item/Item.page';
import SearchPage from '../pages/Search/Search.page';
import NotFoundPage from '../pages/NotFound/NotFound.page';

const AppRoutes = () => {
  const {user} = useContext(UserContext);
  return(
    <Main>
      <Switch>
        <Route exact path="/movie/:id" component={MovieCardPage} type='movie' />
        <Route exact path="/movies" component={MoviesPage} />
        <Route exact path="/tv/:id" component={TvCardPage} />
        <Route exact path="/tv-shows" component={TvShowsPage} />
        <Route exact path="/cast/:id" component={CastPage} />
        <Route exact path='/profile' render={() => user ? (<ProfilePage />) : (<SignInSignUpPage />)} />
        <Route exact path="/pass-reset" component={PasswordResetPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact component={NotFoundPage} />
      </Switch>
    </Main>
  )
}

export default AppRoutes;