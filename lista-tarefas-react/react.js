console.log("ola");

const { Component } = React;

class TarefaApp extends Component {
  constructor(props) {
    super(props);
    // tarefas esta criando uma lista vazia, item é os dados que vai ser adicionado do input para a lista
    this.state = { tarefas: [], item: "" };
  }


    // setState sempre atualiza os dados
  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  // adicionar a lista
  add = () => {
    const { tarefas, item } = this.state;
    if (item.length === 0) {
      alert("Digite uma tarefa valida!");
    } else {
      this.setState({ tarefas: tarefas.concat(item), item: "" });  //concat é para concatenar
    }
  };
  
  // marcar como concluida
  check = (e) => {
    e.target.parentElement.querySelector(".check").style.color = "#349223"
    e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
  };

  // deletar item da lista
  del = (id) => {
    const {tarefas} = this.state;
    tarefas.splice(id,1);
    this.setState({tarefas: tarefas})
  };
  
  //renderizar na tela
  render = () => {
    const { tarefas, item } = this.state;
    return (
      <div>
        <header className="header">
          <h1>Lista de Tarefas teste</h1>
          <input
            onChange={this.handleChange}
            value={item}
            type="text"
            placeholder="Digite uma tarefa"
          />
          <span onClick={this.add}>
            <i className="fas fa-plus-circle"></i>
          </span>
        </header>
        <ul>
          {tarefas.map((item, index) => (
            <li key={index}>
              <i className="fas fa-check-circle check"></i>
              <span onClick={this.check.bind(this)}>{item}</span>
              <i onClick={this.del.bind(this.index)} className="fa-solid fa-trash-can close"></i>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TarefaApp />);
