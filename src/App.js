import logo from './logo.svg';
import './App.css';
import {Folio,FormLayout} from '../src/components/index'
function App() {
  return (
    <div className="bg-primary">
      <div>
          <Folio/>
      </div>
      <div>
          <FormLayout/>
      </div>
    </div>
  );
}

export default App;
