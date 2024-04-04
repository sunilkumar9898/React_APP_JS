import "./app.css";
import Product from "./pages/Product";
import Nabvar from "./component/Nabvar";

function App() {
    return (
        <>

            <Nabvar />
            {/* <nav>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSlLWNLU1P2z6QnYXk9jucAgWPCC-fwg7XaZHPSog0qg&s"
                        alt=""
                    />
                </div>
                <div className="nav_link">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </nav> */}

                  <Product/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10">
                <div className="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2-X1KrGjMVFKMVmkofgHE6HKa6Clg62Eymtz7R5zvA&s"
                        alt=""
                    />
                    <h1>This is New Car Model</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore fugiat reiciendis ipsum omnis, molestias libero
                        mollitia non. Eos, officia repudiandae.
                    </p>
                    <button>Know More:-</button>
                </div>
                <div className="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2-X1KrGjMVFKMVmkofgHE6HKa6Clg62Eymtz7R5zvA&s"
                        alt=""
                    />
                    <h1>This is New Car Model</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore fugiat reiciendis ipsum omnis, molestias libero
                        mollitia non. Eos, officia repudiandae.
                    </p>
                    <button>Know More:-</button>
                </div>
                <div className="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2-X1KrGjMVFKMVmkofgHE6HKa6Clg62Eymtz7R5zvA&s"
                        alt=""
                    />
                    <h1>This is New Car Model</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore fugiat reiciendis ipsum omnis, molestias libero
                        mollitia non. Eos, officia repudiandae.
                    </p>
                    <button>Know More:-</button>
                </div>
                <div className="card">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2-X1KrGjMVFKMVmkofgHE6HKa6Clg62Eymtz7R5zvA&s"
                        alt=""
                    />
                    <h1>This is New Car Model</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore fugiat reiciendis ipsum omnis, molestias libero
                        moll itia non. Eos, officia repudiandae.
                    </p>
                    <button>Know More:-</button>
                </div>
        </div>

        </>
    );
}

export default App;
