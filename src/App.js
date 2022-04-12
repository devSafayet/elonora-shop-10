import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="">

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="review" element={<Review></Review>} ></Route>
        <Route path="blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="about" element={<About></About>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
