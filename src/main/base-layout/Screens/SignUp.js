/* eslint-disable jsx-a11y/anchor-is-valid */
import * as Yup from "yup";
import { useFormik } from "formik";
import MasterSelect from "../../common/base-component/master-select";
import MasterErrorText from "../../common/base-component/master-errortext";
import LoginInput from "../../common/base-component/login-input";
import logo from "../../../assets/image/erp-logo.png";
import "../../../assets/css/sign-up-page.css"
function SignUp() {
  const countryDDL = [
    { value: 1, label: "Bangladesh" },
    { value: 2, label: "India" },
    { value: 3, label: "China" },
  ];
 

  //initialValues;
  const initialValues = {
    name: "",
    email: "",
    workSpace: "",
    country: { label: "", value: "" },
  };

  //validationSchema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Provide valid email")
      .required("Email is required"),
    workSpace: Yup.string().required("Workspace is required"),
    country: Yup.object().shape({
      label: Yup.string().required("Country is required"),
    }),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="iboslogo">
        <img src={logo} alt="" />
      </div>
      <div className="sign-up-page d-flex flex-wrap">
        <section className="w-100 align-self-center">
          <div className="sign-up-form">
            <h3 style={{ color: "#222B45" }} className="text-center">
              Create Account
          </h3>
            <div className="horizontarRow"></div>
            <div className="container">
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <LoginInput
                      name="name"
                      label="Name"
                      type="text"
                      icon="fa fa-user"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik?.values?.name}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <MasterErrorText message={formik.errors.name} />
                    ) : null}
                  </div>
                  <div className="col-12">
                    <LoginInput
                      name="email"
                      label="Email"
                      type="email"
                      icon="fa fa-envelope"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik?.values?.email}
                      disabled={false}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <MasterErrorText message={formik.errors.email} />
                    ) : null}
                  </div>
                  <div className="col-12">
                    <LoginInput
                      name="workSpace"
                      label="Workspace"
                      icon="fa fa-medkit"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik?.values?.workSpace}
                    />
                    {formik.errors.workSpace && formik.touched.workSpace ? (
                      <MasterErrorText message={formik.errors.workSpace} />
                    ) : null}
                  </div>
                  <div className="col-12 mt-3">
                    <MasterSelect
                      label="Country"
                      name="country"
                      data={countryDDL}
                      // icon="fa fa-map-marker-alt"
                      value={formik.values.country}
                      onChange={(value) => {
                        formik.setFieldValue("country", value);
                      }}
                      onBlur={formik.handleBlur}
                    />
                    {formik?.errors?.country?.label &&
                      formik?.touched?.country?.label ? (
                      <MasterErrorText message={formik?.errors?.country?.label} />
                    ) : null}
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "30px",
                    marginBottom: "30px",
                    width: "auto",
                  }}
                >
                  <button className="btn sign_up_button" type="submit">
                    Sign Up
                </button>
                </div>
              </form>
              <div className="text-center">
                <a className="navigate-link" style={{ color: "#46455F" }} href="#">
                  Already have an account?Sign In
              </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );
}

export default SignUp;
