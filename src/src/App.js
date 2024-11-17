import './index.css';
import React from 'react';
import Employee from './components/Employee';
import {v4 as uuidv4} from 'uuid';

function App() {
  //const [role, setRole] = React.useState('dev');
  const [employees, setEmployees] = React.useState([
    {
      id: 1,
      name: 'Richard',
      role: 'Developer',
      img: './img/portrait.jpeg"',
    },
    {
      id: 2,
      name: 'Sal',
      role: 'Manager',
      img: './img/portrait.jpeg"',
    },
    {
      id: 3,
      name: 'John',
      role: 'Director of Eng.',
      img: './img/portrait.jpeg"',
    },
    {
      id: 4,
      name: 'Melanie',
      role: 'Software Engineer',
      img: './img/portrait.jpeg"',
    },
    {
      id: 5,
      name: 'Corey',
      role: 'The Devops Guy',
      img: './img/portrait.jpeg"',
    },
    {
      id: 6,
      name: 'Jake',
      role: 'Senior Intern',
      img: './img/portrait.jpeg"',
    },
  ]);
  const showEmplpoyees = true;

  return (
    <div className="App">
      {showEmplpoyees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              //setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              //console.log(uuidv4());
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
}

export default App;
