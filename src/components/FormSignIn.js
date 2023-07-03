import "./FormSignIn.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length > 20) {
    errors.username = "Must be 20 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters";
  }
  return errors;
};

function FormSignIn() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {},
  });
  return (
    <div className="wrapper">
      <h1>Sign In</h1>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete="off"
        className="form-login"
      >
        <div className="input-top">
          <label className="label-top" htmlFor="username">
            Username
          </label>
          <input
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="show-error">{formik.errors.username}</div>
          ) : (
            ""
          )}
        </div>
        <div className="input-bottom">
          <label className="label-bottom" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="show-error">{formik.errors.password}</div>
          ) : (
            ""
          )}
        </div>
        <div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormSignIn;
