import './App.css';
import PropComponent from './components/propcomponent'

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      <PropComponent
        LastName="Vasconi"
        FirstName="Chris"
        Age={34}
        HairColor="Fstring salt and pepper"
      />
      <PropComponent
        LastName="Hernandaz"
        FirstName="Josiah"
        Age={29} //intergers have to be in curlys
        HairColor="black"
      />
      <PropComponent
        LastName="Santiago"
        FirstName="Juan"
        age={24} //intergers have to be in curlys
        HairColor="Brown"
      />
      <PropComponent
        LastName="Curylo"
        FirstName="Melissa"
        Age={26} //intergers have to be in curlys
        HairColor="Blonde"
      />
      <PropComponent
        lastname="Perrone"
        FirstName="Winter"
        Age={28} //intergers have to be in curlys
        HairColor="Black"
      />
    </div>
  );
}

export default App;
