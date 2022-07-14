import Page from "../../Components/Page";

import {Field}  from '../../Components/InputField';

 const SignInUx = ({
   emailValue = "",
   passwordValue="",
   onChangeHandler = () => { },
   onSignInClick = () => { },
   onLoginClick = () => { }
 }) => {
   return (
     <Page
       showNavBar={true}
       useAbsoluteCenter={true}
       pageTitle="Crear Cuenta"
     >
       <form className="flex-forms">
         <Field
           name="email"
           labelText = "Correo Electrónico"
           type = "email"
           value = {emailValue}
           onChange = {onChangeHandler}
           className="inputText"
           placeHolder="Ingrese su usuario"
         />
         <Field
           name="password"
           labelText="Contraseña"
           type="password"
           value={passwordValue}
           onChange = {onChangeHandler}
           className="inputText"
           placeHolder="Ingrese su contraseña"
         />
          
         <button onClick={onSignInClick} className="btn btn-primary espacio-y4">Crear Cuenta</button>
         <button onClick={onLoginClick} className="btn btn-secondary espacio-y4">Ya cuento con una Cuenta</button>
         
       </form>
     </Page>
   );
 }

 export default SignInUx;