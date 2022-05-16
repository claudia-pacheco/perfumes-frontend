import * as React from 'react';
import Intro from './Intro.js';
import withRoot from './withRoot.js';


function Home() {
    return (
        <>
            <Intro />
        </>
    );
}

export default withRoot(Home);