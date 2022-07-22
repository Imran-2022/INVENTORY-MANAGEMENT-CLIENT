import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
const LoadingButton = () => {
    return (
        <div  style={{minHeight:"40vh"}} className="d-flex justify-content-center align-items-center" >
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    );
};

export default LoadingButton;