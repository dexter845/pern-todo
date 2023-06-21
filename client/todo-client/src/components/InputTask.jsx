import React, {useState} from 'react';


const InputTask = (props) => {
  const [description, setDescription] = useState('');
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/tasks' , {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
      window.location.reload(false);
    } catch (err) {
      console.error(err.message);
    }
  }
  return(
    <form onSubmit={onSubmitForm} className="flex w-full">
      <input type="text" placeholder={props.placeholder} className="p-4 w-3/4" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit" className="btn text-center flex items-center justify-center px-8 py-4 w-1/4 bg-black transition duration-500 text-white hover:bg-white hover:text-black ease-in-out">Submit</button>
    </form>
  )
}

export default InputTask;
