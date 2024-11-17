import Employee from './components/Employee';
import './App.css';

function App() {
  console.log('Hello there!');
  const showEmplpoyees = true;
  
  return (
    <div className="App">
      {console.log('Inside the return!')}
      {showEmplpoyees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
}

export default App;
