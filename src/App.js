
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { originals,Action, Animation } from './Urls';


function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={Action} title='Action' isSmall /> 
      <RowPost url={Animation} title='Animation' isSmall /> 
    </div>
    </>
  );
}

export default App;
