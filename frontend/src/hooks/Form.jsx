import{useState}  from 'react'

const Form = () => {
    const[form,setForm]=useState({
        name:"",
        email:"",
        age:""
    })
    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form);
    }
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlfor="name">Name:</label>
            <input type="text" name="name"value={form.name} onChange={handleChange}/> <br/>
            <label htmlfor="email">Email:</label>
            <input type="email" name="email"value={form.email} onChange={handleChange}/> <br/>
            <label htmlfor="age">Age:</label>
            <input type="text" name="age"value={form.age} onChange={handleChange}/> <br/>
            <button>Submit</button>
       
            
            


        </form>
    </div>
  )
}

export default Form