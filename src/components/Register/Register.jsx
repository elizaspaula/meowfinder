import "./Register.scss";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import heroRegister from "../../assets/images/cat.svg";
import axios from "axios";
import logo from "../../assets/logo/logo.svg";

const schema = yup.object().shape({
  email: yup.string().email().required("Username should be required please"),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const submitForm = (data) => {
    axios.post(`${process.env.REACT_APP_API_URL}/signup`, data).then((data) => {
      //TO-DO criar alerta
      alert("Account has been created!");
      history.push("/admin");
    });
  };

  return (
    <section className="register">
      <div className="register__content">
        <div className="register__hero">
          <Link to={`/home`} className="register__logo-link">
            <img className="register__logo" src={logo} alt="company logo" />
          </Link>
          <div className="register__background">
            <img className="register__image" src={heroRegister} alt="cat" />
          </div>
          <h2 className="register__text">Welcome to MeowFinder</h2>
        </div>
        <form className="register__form" onSubmit={handleSubmit(submitForm)}>
          <div className="register__group">
            <input
              className="register__input"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <p> {errors.email?.message} </p>
            <input
              type="password"
              className="register__input"
              placeholder="Password"
              {...register("password")}
            />
            <p> {errors.password?.message} </p>
            <input
              className="register__input"
              type="password"
              placeholder="Confirm Password..."
              {...register("confirmPassword")}
            />
            <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          </div>
          <div className="register__button">
            <button type="submit" className="register__btn">
              Sign Up
            </button>
          </div>
        </form>
        <div className="register__login">
          <p className="register__login-content">
            Do you already have an account?
          </p>
          <Link to={`/login`} className="register__link">
            {" "}
            Click here to Login
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Register;
