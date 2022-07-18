import {Teste} from "./Teste";

function App() {

  const testeFuncao = (numero1, numero2) => {
    return numero1 * numero2
  }

  return (
    <div className="App">
      {testeFuncao(4,2)}
      <Teste/>
    </div>
  );
}

export default App;
