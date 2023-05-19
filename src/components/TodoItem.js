export default function TodoItem({todo, onDelete}) {
  return (
    <div className='p-2 m-2 bg-dark text-light rounded'>

      <h4>{todo.title}</h4>
      <p>{todo.dis}</p>
      <button className='btn btn-danger btn-sm' onClick={() => onDelete(todo.sno,todo)}>Delete</button>
    </div>
  );
}
