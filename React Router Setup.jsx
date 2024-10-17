import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
