import {connect} from "frontity";
import React from 'react';
import FlexibleSlider from "../../component/flexible-layouts/FlexibleSlider";

const HomePage = ({state}) => {

    const data = state.source.get(state.rdTheme.homepage);
    // const page = state.source[data.type][data.id];

    return(
        <>
            <h1>Home Page Demo Content</h1>
        </>
    );
};

export default connect(HomePage);