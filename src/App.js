import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import ItemListContainer from './Components/Item/ItemListContainer';
import ItemCount from './Components/Item/ItemCount'



function App({bienvenida}) {

  return (
    <div>
      <Navbar />
      <Banner />
      <ItemListContainer/>
      <div>
      {bienvenida}
      </div>
      <ItemCount/>
    </div>
  );
  
}

export default App;
