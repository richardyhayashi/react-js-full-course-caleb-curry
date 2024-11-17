import React from 'react';
import Employee from './components/Employee';
import './index.css';

function App() {
  const [role, setRole] = React.useState('dev');
  const showEmplpoyees = true;

  return (
    <div className="App">
      {showEmplpoyees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee name="Richard" role="Intern" img="./img/portrait.jpeg" />
            <Employee name="Abby" role={role} img="./img/portrait.jpeg" />
            <Employee name="John" img="./img/portrait.jpeg" />
            <Employee name="Richard" role="Intern" img="./img/portrait.jpeg" />
            <Employee name="Abby" role={role} img="./img/portrait.jpeg" />
            <Employee name="John" img="./img/portrait.jpeg" />
            <Employee name="Richard" role="Intern" img="./img/portrait.jpeg" />
            <Employee name="Abby" role={role} img="./img/portrait.jpeg" />
            <Employee name="John" img="./img/portrait.jpeg" />
          </div>
        </>
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
}

export default App;
