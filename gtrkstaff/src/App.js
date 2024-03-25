import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Home  from "./views/Home"
import AddEmployee from "./views/addEmployee"
import ListEmployee from './views/listEmployee';
import UploadEmployee from './views/uploadEmployee';
import UploadAbsentees from './views/uploadAbsentees';
import UploadSKUD from './views/uploadSKUD';
import { Provider } from 'react-redux';
import {store} from './store/index';
import AddDapartament from './views/departamets/addDapartament';
import ListDepartament from './views/departamets/listDepartament';
function App() {
  return (
    <Provider store={store}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/addDepartament" element={<AddDapartament />} />
        <Route path="/listEmployee" element={<ListEmployee />} />
        <Route path="/listDepartament" element={<ListDepartament />} />
        <Route path="/uploadEmployee" element={<UploadEmployee />} />
        <Route path="/uploadSKUD" element={<UploadSKUD />} />
        <Route path="/uploadAbsentees" element={<UploadAbsentees />} />
    </Routes>
    </Provider>
      
  );
}

export default App;
