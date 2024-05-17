
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Mainrouter from './router/Mainrouter'
function App() {

    const navigate = useNavigate();

      const handleclick1 = () => {
          navigate("/");
      };
          const handleclick = () => {
              navigate("/wo");
          };


  return (
      <>
          <Link to={"/girl"}>
              <button>GirlPage</button>
          </Link>
          <button onClick={handleclick1}>MenPage</button>
          <button onClick={handleclick}>WomanPage</button>
          <hr />
          <Mainrouter />
      </>
  );
}

export default App
