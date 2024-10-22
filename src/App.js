import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './Data';

const cards = data.map(prop=>{
  return(
    <Card 
    {...prop}
    />
  )
})
function App() {
  return (
   <>
   <Navbar/>
   {cards}
   </>
  );
}
//<Navbar/>
export default App;
