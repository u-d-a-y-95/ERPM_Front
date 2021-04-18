import React from 'react'
import * as Yup from "yup";
import { useFormik } from "formik";
import MasterInput from "../../common/base-component/master-input"
import MasterRadio from "../../common/base-component/master-radio"
import MasterTextArea from "../../common/base-component/master-textarea"
import MasterErrorText from "../../common/base-component/master-errortext"
import SimpleMasterList from "../../common/composite-component/simple-master-list"

function Category() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        gender: Yup.number().required("need number")
    });


    const formik = useFormik({
        initialValues: {
            categoryName: "",
            categoryType: "",
            manufactureType: 1,
            description: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const data = [
        { label: "Own", value: 1 },
        { label: "Others", value: 3 }
    ];
    const data1 = [
        {
            sl: 1,
            categoryName: "Food",
            categoryType: "Row",
            manufactureType: "Own",
            description: "Lorem Ipsum ",
        },
        {
            sl: 1,
            categoryName: "Plastic",
            categoryType: "Row",
            manufactureType: "Other",
            description: "lorem is sh",
        },
        {
            sl: 1,
            categoryName: "Food",
            manufactureType: "Own",
        },
        {
            sl: 1,
            categoryName: "Food",
        
            manufactureType: "Own",
            description: "lorem is sh",
        },
        {
            sl: 1,
            categoryName: "Food",
            categoryType: "Row",
            manufactureType: "Own",
            description: "lorem is sh",
        },
    ];
    function deleteHandler(row) {
        console.log(row);
    }
    function updateHandler(row) {
        console.log(row, "hello");
    }
    function columnHandler(row, key) {
        console.log(row, key);
    }

    const config = {
        headers: [
            { key: "sl", label: "SL" },
            { key: "categoryName", label: "Category Name" },
            { key: "categoryType", label: "Category Type" },
            { key: "manufactureType", label: "Manufacture Type" },
            { key: "description", label: "Description" , bColClass:"text-wrap" },
        ],
        data: data1,
        action: [
            {
                icon: "fa fa-trash",
                event: deleteHandler,
                class: "btn btn-sm btn-danger "
            },
            {
                icon: "fa fa-edit",
                event: updateHandler,
                class: "btn btn-sm btn-warning ml-1"
            }
        ],
        checkbox: true,
        columnEvent: columnHandler,
        bottomRow: ["firstName", "quantity"],
        isSearchable: true
    };
    return (
        <>
            <div className="card mx-3 mt-3">
                <div className="card-header">
                    <h5>Category</h5>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="col-4">
                                    <MasterInput
                                        name="categoryName"
                                        label="Category Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.categoryName}
                                    />
                                    {formik.errors.categoryName && formik.touched.categoryName && <MasterErrorText message={formik.errors.categoryName} />}
                                </div>
                                <div className="col-4">
                                    <MasterInput
                                        name="categoryType"
                                        label="Category Type"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.errors.categoryType && formik.touched.categoryType && <MasterErrorText message={formik.errors.categoryType} />}
                                </div>
                                <div className="col-4">
                                    <MasterRadio
                                        name="manufactureType"
                                        label="Manufacture Type"
                                        data={data}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.manufactureType}
                                        display="inline"
                                    />
                                    {formik.errors.manufactureType && formik.touched.manufactureType && <MasterErrorText message={formik.errors.manufactureType} />}
                                </div>
                                <div className="col-8">
                                    <MasterTextArea
                                        name="description"
                                        label="Description"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                    />
                                </div>
                            </div>
                            <div className="text-left mb-3">
                                <button
                                    className="btn btn-primary mt-3"
                                    type="submit"
                                    disabled={!formik.isValid || !formik.dirty}
                                >
                                    Submit
            </button>
                                <button
                                    className="btn btn-warning mt-3 ml-3 text-white"
                                    type="button"
                                    onClick={formik.resetForm}
                                >
                                    Reset
            </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div className="card m-3">
                <div className="card-header">
                    <h5>List</h5>
                </div>
                <div className="card-body">
                    <SimpleMasterList config={config} />
                </div>

            </div>

        </>

    )
}

export default Category