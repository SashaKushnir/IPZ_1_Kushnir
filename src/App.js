
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/NavBar/NavBar';
import Settings from './components/Settings/Settings';
import WorkSpace from './components/WorkSpace/WorkSpace';

const  App = (props) => {
  return (
    <BrowserRouter>
        <div className="App" className ='appwrapper'>
          
          <Header className='item'/>
          <Navbar className='item'/>
          <div className = 'info'>
          <Route className='item'  path = '/profile' render ={ () => 
          <Profile ProfileInfo = {props.state.ProfileInfo} 
          dispatch = {props.dispatch} />}/>

          <Route className='item'  path = '/workspace' render ={ () => 
          <WorkSpace WorkSpaceInfo = {props.state.WorkSpaceInfo}
           dispatch = {props.dispatch}/>}/>
          <Route className='item' path = '/settings' render = {() =><Settings/>} />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
