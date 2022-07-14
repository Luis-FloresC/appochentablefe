const Field = ({
    name = "",
    labelText = "",
    type = "text",
    value = "",
    onChange = ()=>{},
    ...rest
  }) => {
    return (
     <fieldset>
         <label htmlFor={name}>{labelText}</label>
         <input type={type} name={name} id={name} value={value} {...rest} onChange={onChange}/>
     </fieldset>
    );
  }
  export default Field;