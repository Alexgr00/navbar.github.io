import './App.css';
import Navbar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola bienvenido a mi E-commerce"/>
    </div>
  );
}

export default App;
