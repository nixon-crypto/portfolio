import "./style.css";
import Trash from "../../assets/trash.svg";
function Home() {
  const users = [
    {
      id: "1",
      name: "Leandro",
      age: 28,
      email: "leandro@email.com",
    },
    {
      id: "2",
      name: "Davi",
      age: 33,
      email: "davi@email.com",
    },
    {
      id: "3",
      name: "Priscila",
      age: 30,
      email: "priscila@email.com",
    },
  ];
  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email" />
        <button>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
