import Users from './components/Users'
import UserCount from './components/UserCount'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
   const increment = () => {
    setCount(count => count + 1);
  };
  return (
    <div>
      <UserCount count={count} />
      <Users onAddUser={increment} />
    </div>
  );
}

export default App