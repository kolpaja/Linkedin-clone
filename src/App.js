import "./App.css";
import { Route, Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <Link to="/products">All Products</Link>
      <h1>HomePage</h1>
      <button onClick={() => props.history.push("/products")}>Products</button>
    </div>
  );
};

const Products = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>

      <h1>Products</h1>
      <Link to={`${props.match.url}/13`}>Toproduct 13 </Link>
      <Link to={`${props.match.url}/23`}>To product 23 </Link>
      <Link to={`${props.match.url}/33`}>To product 33</Link>
    </div>
  );
};

const ShowProduct = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/products">All Products</Link>
      <h1>ShowProduct: {props.match.params.id}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:id" component={ShowProduct} />
    </div>
  );
}

export default App;
