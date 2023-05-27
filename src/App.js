import Header from "./components/header";
import TarefaEstado from "./pages/EstadoTarefas/TarefaEstado";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
