import React from 'react';
import Footer from './Footer';
import LandingPage  from './LandingPage';

function ContentWrapper(){
    return (
        <React.Fragment>
            <LandingPage />
            <Footer />
        </React.Fragment>
    )
}

export default ContentWrapper;