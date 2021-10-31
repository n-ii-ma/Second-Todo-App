const Form = ({ input, handleInput, addTask }) => {
  return (
    <form className="create-task" onSubmit={addTask}>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Add Todo..."
        className='field'
      />
      <br />
      <button className="btn">Add</button>
    </form>
  );
};

export default Form;
