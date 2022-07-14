import Page from "../../Components/Page";

import { Field } from '../../Components/InputField';

const LoginUx = ({
  emailValue = "",
  passwordValue = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {

  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Iniciar Sesión"
    >
      <div className="container-fluid">

        <div className="fullCenter">
          <form className="flex-forms">
            <Field
              name="email"
              labelText="Correo Electrónico"
              type="email"
              value={emailValue}
              onChange={onChangeHandler}
              className="inputText"
              placeHolder="Ingrese su usuario"
            />
            <Field
              name="password"
              labelText="Contraseña"
              type="password"
              value={passwordValue}
              onChange={onChangeHandler}
              className="inputText"
              placeHolder="Ingrese su contraseña"
            />
            <div className="flex-button">
              <button onClick={onSignInClick} className="btn btn-primary espacio-y4">Crear Cuenta</button>
              <button onClick={onLoginClick} className="btn btn-secondary space-x-0">Iniciar Sesión</button>
            </div>

          </form>
        </div>
      </div>
    </Page>
  );
}

export default LoginUx;