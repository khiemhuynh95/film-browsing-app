import React from 'react'
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';

function LoginForm(props) {
    return (
        <div onClick={() => { props.onCloseLoginForm() }}>
            <MDBModal show={true} tabIndex='-1'>
                <MDBModalDialog className='modal-dialog'>
                    <MDBModalContent onClick={e => {
                        // do not close modal if anything inside modal content is clicked
                        e.stopPropagation();
                    }}>
                        <MDBModalBody >
                            <h1 >LOGIN</h1>
                            <MDBInput label='Username' id='username' type='text' />
                            <MDBInput label='Password' id='password' type='text' />
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <MDBBtn color='link'>Forgot password?</MDBBtn>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>

    )
}

export default LoginForm;