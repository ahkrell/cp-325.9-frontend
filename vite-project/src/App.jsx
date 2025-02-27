import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import AddForm from './pages/AddForm';
import EditForm from './pages/EditForm';

function App() {

  return (
    <main>
      <nav>
        <Link to={'/'}>Home</Link> | <Link to={'/create'}>Add Mech</Link> | <Link to={'/update'}>Edit Mech</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<AddForm />} />
        <Route path='/update' element={<EditForm />} />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>
    </main>
  );
}

export default App;