import React from 'react';
import { Modal } from 'react-bootstrap'




function ModalComponent(props) {


    return (
        <>
            <Modal
                size={props.size || "md"}
                show={props.modalSate}
                onHide={props.modalClose}
                backdrop={props.fixed ? "static" : ""}
            // dialogClassName="w-100"
            >
                <Modal.Header closeButton>
                    <Modal.Title >
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalComponent
