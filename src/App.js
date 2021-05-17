import './App.css';

import Header from './components/Header/Header.component';
import BottomNav from './components/navigation/BottomNav/BottomNav.component';
import AppRoutes from './routes/AppRoutes.component';

//providers
import {UserProvider} from './firebase/UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <AppRoutes />
        
        {/* <Footer /> */}

        <BottomNav />
      </div>
    </UserProvider>
  );
}

export default App;
