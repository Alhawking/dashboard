import '../App.css';
import SideBar from './SideBar';
import ContenrWrapper from './ContentWrapper';

function App() {
  return (
    <div className="row container-fluid p-0">
      <SideBar/>
      <ContenrWrapper/>
    </div>
  ); 
}

export default App;
