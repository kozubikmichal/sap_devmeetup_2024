const LoginForm = ({ onSubmit }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    onSubmit({
      username: formData.get("username"),
      password: formData.get("password"),
    });
  };

  return (
    <form className="Form" onSubmit={submitHandler}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
