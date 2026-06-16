import { useState } from "react";

function DataNascimento() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div>
      <select value={dia} onChange={(e) => setDia(e.target.value)}>
        <option value="">Dia</option>
        {dias.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
      <select value={mes} onChange={(e) => setMes(e.target.value)}>
        <option value="">Mês</option>
        {meses.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select value={ano} onChange={(e) => setAno(e.target.value)}>
        <option value="">Ano</option>
        {anos.map((a) => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DataNascimento;