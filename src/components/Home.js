import * as React from 'react';
import Fragrances from './Fragrances.js';
import Intro from './Intro.js';
import withRoot from './withRoot.js';


function Home() {
    return (
        <>
            <Intro />
            <Fragrances />
        </>
    );
}

export default withRoot(Home);