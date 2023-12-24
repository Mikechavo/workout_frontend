import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"

const App = () => {


  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
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
