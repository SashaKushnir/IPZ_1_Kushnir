
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer'
import Navbar from './components/NavBar/NavBar';
import Settings from './components/Settings/Settings';
import WorkSpace from './components/WorkSpace/WorkSpace';

const  App = () => {
  return (
    <BrowserRouter>
        <div className="App" className ='appwrapper'>
          
          <Header className='item'/>
          <Navbar className='item'/>
          <div className = 'info'>
          <Route className='item'  path = '/profile' render ={ () => 
          <ProfileContainer  />}/>

          <Route className='item'  path = '/workspace' render ={ () => 
          <WorkSpace/>}/>
          <Route className='item' path = '/settings' render = {() =>
          <Settings/>} />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
