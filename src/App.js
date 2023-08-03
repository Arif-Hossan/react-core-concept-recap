import logo from './logo.svg';
import './App.css';
import Count from './component/Count';


// const product = {
//   padding:'12px',
//   backgroundColor:'blue',
// }

function App() {
  const products = [
    {name:'Laptop',price:'180000'},
    {name:'Phone',price:'80000'},
    {name:'Watch',price:'800'}
  ]

  return (
    <div className="App">
      {/* <Product name="Laptop" price='180000'></Product>
      <Product name="Phone" price='80000'></Product>
      <Product name="Watch" price='180000'></Product> */}
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      <Count></Count>
    </div>
  );
}
function Product(props){
  return(
    <div className='product'>
      <h4>Name : {props.name}</h4>
      <p>Price : {props.price}</p>

    </div>
  )
}

export default App;
