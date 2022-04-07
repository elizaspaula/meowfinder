import heroRegister from "../../assets/images/cat.svg";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import logo from "../../assets/logo/logo.svg";

const schema = yup.object().shape({
  email: yup.string().email().required("Username should be required please"),
  password: yup.string().min(4).max(15).required(),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const submitForm = async (data) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/login`, data)
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("authToken", response.data.token);
        } else {
          console.log("error can't login");
        }
      });

    history.push("/admin");
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
          </div>
          <div className="register__button">
            <button type="submit" className="register__btn">
              Login
            </button>
          </div>
        </form>
        <div className="register__login">
          <p className="register__login-content">
            Don't you have an account yet?
          </p>
          <Link to={`/signup`} className="register__link">
            {" "}
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
