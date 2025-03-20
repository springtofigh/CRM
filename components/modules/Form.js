import FormInput from "./FormInput";
import ItemList from "./ItemList";

function Form({ form, setForm }) {
  const changeHandler = e => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});
  }
  console.log(form);
  
  return (
    <div>
      <FormInput  name="name" type="text" value={form.name} label="Name" onChange={changeHandler} />
      <FormInput  name="lastName" type="text" value={form.lastName} label="LastName" onChange={changeHandler} />
      <FormInput  name="email" type="text" value={form.email} label="Email" onChange={changeHandler} />
      <FormInput  name="phone" type="tel" value={form.phone} label="Phone" onChange={changeHandler} />
      <FormInput  name="address" type="text" value={form.address} label="Adress" onChange={changeHandler} />
      <FormInput  name="postalCode" type="text" value={form.postalCode} label="Postal Code" onChange={changeHandler} />
      <FormInput  name="date" type="date" value={form.date} label="Date" onChange={changeHandler} />
      <ItemList form={form} setForm={setForm} />
    </div>
  )
}

export default Form;