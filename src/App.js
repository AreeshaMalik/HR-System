import logo from './logo.svg';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import Employee from './components/forms/Employee';
import Emp1 from './components/forms/Emp1';
import Test from './components/forms/Test'
import View from './components/forms/View'

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"

function App() {
  return (
    <div className="App">
      {/* <View/> */}
      {/* <Test/> */}
      {/* <Emp1/> */}
      <LoginForm/>
      {/* <Employee/> */}
    </div>
  );
}

export default App;
