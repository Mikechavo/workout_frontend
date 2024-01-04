import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import RoutineIndex from './pages/RoutineIndex'; 
import RoutineShow from './pages/RoutineShow'; 
import RoutineNew from './pages/RoutineNew'; 
import RoutineEdit from './pages/RoutineEdit.js'

const App = () => {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/routineindex" element={<RoutineIndex />} />
        <Route path="/routineshow" element={<RoutineShow />} />
        <Route path="/routinenew" element={<RoutineNew />} />
        <Route path="/routineedit" element={<RoutineEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;