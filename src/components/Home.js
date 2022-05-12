import * as React from 'react';
import Categories from './Categories.js';
import Fragrances from './Fragrances.js';
// import ProductSmokingHero from './modules/views/ProductSmokingHero';
// import ProductValues from './modules/views/ProductValues';
// import ProductHowItWorks from './modules/views/ProductHowItWorks';
// import ProductCTA from './modules/views/ProductCTA';
import Intro from './Intro.js';
import withRoot from './withRoot.js';


function Home() {
    return (
        <>
            <Intro />
            <Fragrances />
            <Categories />
            {/* <ProductHowItWorks /> */}
            {/* <ProductCTA /> */}
            {/* <ProductSmokingHero /> */}
        </>
    );
}

export default withRoot(Home);