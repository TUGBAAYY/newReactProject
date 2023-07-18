import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SiteRoutes from './SiteRoutes';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const handlelogin = () =>{
    const user = {id: 1, name: "lorem"}
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/')
  }
  const handlelogout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }
  return (
    <div className="App text-black">
    <Navbar  user={user} handlelogout={handlelogout}/>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
        <SiteRoutes handlelogin={handlelogin} user={user} />

        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
