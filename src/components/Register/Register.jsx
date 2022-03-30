import "./Register.scss";
import heroRegister from "../../assets/images/Dayflow.png";

function Register() {
  return (
    <>
      <div className="register">
        <div className="register__content">
          <div className="register__hero">
            <h1 className="register__title">MeowFinder</h1>
            <img className="register__image" src={heroRegister} alt="cat" />
            <h2 className="register__text">Welcome to MeowFinder</h2>
          </div>
          <form className="register__form">
            <div className="register__group">
              <input
                type="email"
                className="register__input"
                placeholder="Email address"
              />
              <input
                type="text"
                className="register__input"
                placeholder="Password"
              />
            </div>

            <div className="register__button">
              <button className="register__btn">Login</button>
              <button className="register__btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
