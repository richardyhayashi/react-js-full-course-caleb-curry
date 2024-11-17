import Employee from './components/Employee';
import './App.css';

function App() {
  const showEmplpoyees = true;
  
  return (
    <div className="App">
      {showEmplpoyees ? (
        <>
          <Employee name="Richard" role="Intern" />
          <Employee name="Abby" />
          <Employee name="John" />
        </>
      ) : (
        <p>No Employees</p>
      )}
    </div>
  );
}

export default App;
