import React from 'react'
import MasterInput from '../common/base-component/master-input'
import MasterErrorText from '../common/base-component/master-errortext'
import erpLogo from '../../assets/image/erp.png'
import * as Yup from "yup";
import { useFormik } from "formik";
import {useDispatch} from 'react-redux'
import {setLoginDataToState} from '../state/actions/auth-action'

function LoginLayout() {
    const dispatch = useDispatch()
    const loginSchema = Yup.object().shape({
        userName: Yup.string().required("Field can't be blank"),
        password: Yup.string().required("Field can't be blank"),
    });


    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",

        },
        validationSchema: loginSchema,
        onSubmit: values => {
            values['isAuth'] = true;
            dispatch(setLoginDataToState(values))
        }
    });
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <div className="login-leftbar">
                <h1>Welcome To iBOS App name</h1>
                <p>
                    Ensure best quality products & services through
                    continuous improvement that benefits society and
                    environment.
                      </p>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                            <MasterInput
                                name="userName"
                                label="User Name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.userName}
                            />
                            {formik.errors.userName && formik.touched.userName && <MasterErrorText message={formik.errors.userName} />}
                        </div>
                        <div className="col-12 mt-3">
                            <MasterInput
                                name="password"
                                label="Password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password && <MasterErrorText message={formik.errors.password} />}

                        </div>
                        <div className="col-12 mt-3 ">
                            <button
                                className="btn btn-primary mt-3"
                                type="submit"
                                disabled={!formik.isValid || !formik.dirty}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <div className="login-rightbar">
                <img src={erpLogo} alt="erp logo" />
            </div>
        </div>
    );
}

export default LoginLayout