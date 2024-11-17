import React from 'react';
import Employee from './components/Employee';
import './App.css';

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
          <Employee name="Richard" role="Intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
}

export default App;
