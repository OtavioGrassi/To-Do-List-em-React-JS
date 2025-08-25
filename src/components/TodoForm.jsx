import {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handlesubmit = (e) =>{
    e.preventDefault();
    if(!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  
    console.log(value, category);
  };
  return (
    <div className='todo-form'>
      <h2>Criar Tarefa</h2>
      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='Digite o texto aqui' value={value} onChange={(e) => setValue(e.target.value)}></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Tarefas">Tarefas</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm