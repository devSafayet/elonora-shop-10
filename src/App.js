import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="review" element={<Review></Review>} ></Route>
        <Route path="blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="about" element={<About></About>} ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
