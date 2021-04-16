import React from 'react'

function login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };


  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    gender: Yup.number().required("need number")
  });

  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      name: "day",
      gender: 1,
      color: ["red"],
      item: { label: "Yellow", value: "yellow" }
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className="container loginPage">
      {/* <MasterInput
        label="First Name"
        name="firstName"
        placeHolder="Enter your name"
        type="text"
        value={name}
        onChange = {onChange}
      /> */}
      <h3>First Name</h3>
      <div className="row">
        <div className="col-md-7">
          <div className='ibos-desctiption'>
            <h3>Welcome T iBOS ERP-M</h3>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
              maiores eveniet, dolorum itaque velit iure fuga corporis
              repudiandae quis?
            </p>
          </div>
        </div>
        <div className="col-md-5">
          <div className="container loginArea" align="center">
            <p className="text-center welcome-text pt-5">Welcome Back!</p>
            <p className="text-center login-text">
              Please Log In To Your Account
            </p>
            <div className="line" />

            <MasterInput
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={emailChange}
            />

            <MasterInput
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={passwordChange}
            />

            <div className="row d-flex justify-content-between py-3">
              <div className="col-md-6">
                <p>
                  <input type="checkbox" name="" id="" />
                  Remember Me
                </p>
              </div>
              <div className="col-md-6">
                <p>Forgot Password</p>
              </div>
            </div>

            <button className="login-button">Login</button>

            <p className="pb-5 pt-3">Don't have an account? Sign Up</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-3">
              <div className="image-area">
                <img className="w-75" src={akijCement} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img className="w-75" src={assl} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img className="w-75" src={artboard} alt="" />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <img className="w-75" src={artboard11} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5"></div>
      </div>
    </div>
  );
}

export default login
