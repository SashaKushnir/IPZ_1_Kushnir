
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer'
import Navbar from './components/NavBar/NavBar';
import WorkSpace from './components/WorkSpace/WorkSpace';
import EmployeeContainer from './components/Employee/EmplyeeContainer';
import Loginisation from './components/Loginisation/Loginisation/Loginisation';
import Registration from './components/Registration/Registration';

import SettingsContainer from './components/Settings/SettingsContainer';

const  App = () => {
  debugger
  return (
    <BrowserRouter>
  
        <div className="App" className ='appwrapper'>

          <Header className='item'/>
          <Navbar  className='item'/>
          {/* <Route className='item'  path = '/?' render ={ () => 
            }/> */}
          <div className = 'info'>
          <Route className='item'  path = '/_profile/:userId?' render ={ () => 
          <ProfileContainer  />}/>

          <Route className='item'  path = '/_workspace' render ={ () => 
          <WorkSpace/>}/>

          <Route className='item'  path = '/_employee' render ={ () => 
          <EmployeeContainer/>}/>

          <Route className='item' path = '/_settings' render = {() =>
          <SettingsContainer/>} />
          
          <Route exact className='item' path = '/' render = {() =>
          <Loginisation/>} />
          
          <Route className='item' path = '/_loginisation' render = {() =>
          <Loginisation/>} />

          <Route className='item' path = '/registration' render = {() =>
          <Registration/>} />

          </div>
        </div>
        
    </BrowserRouter>
  );
}


export default App;
