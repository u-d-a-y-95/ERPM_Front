import React from 'react'
import MasterButton from '../base-component/master-button'

function FormikSaveButton(props) {
    return (
        <>
            <MasterButton
                label="Create"
                className={`${props.className} + btn btn-primary btn-sm`}
                onClick={props.formik.submitForm}
                disabled={!props.formik.isValid || !props.formik.dirty}
                style={{
                    "width": "150px",
                    "height": "35px",
                    "backgroundColor": "#4965BB"
                }}
            />
        </>
    )
}

export default FormikSaveButton;