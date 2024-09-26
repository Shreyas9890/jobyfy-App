import { Route , Routes} from 'react-router-dom';
import './App.css'
import Home from './component/home/home';
import Jobs from './component/jobs/jobs';
import Login from './component/login/login';
import Notfound from './component/notfound/notfound';
import ProtectedRoutes from './component/protectedRoutes/protect';
import JobsDetails from './component/JobDetails/jobDetails';

function App() {
  return (
    <Routes> 
      <Route path='/' element={<ProtectedRoutes Component={Home}/>}></Route>
      <Route path='/jobs' element={<ProtectedRoutes Component={Jobs}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
      <Route path='/jobs/:id' element={<ProtectedRoutes Component={JobsDetails} />}></Route>
            <Route path='/*' element={<Notfound/>}></Route>
      
      </Routes>
  )
}

export default App
