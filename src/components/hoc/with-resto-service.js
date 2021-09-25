import React from 'react';
import RestoServiceContext from '../resto-service-context';

// takes another component, and inside it will be rendered a component that we passed a higher order component
const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    // from the context we will receive service which is already created
                    (RestoService) => {
                        // when the context is obtained, we immediately use it on the component that came here
                        // he will get all props which we received
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;