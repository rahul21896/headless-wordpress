import React from "react";
import {connect, css, Global} from "frontity";
import FlexibleSections from "../../component/flexible-layouts/FlexibleSections";
import Switch from '@frontity/components/switch';

const SinglePost = ({ state }) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const acf_fields = post.acf;

    return (
        <div>
            <Switch>
                <FlexibleSections when={acf_fields.flexible_content} />
                <div when={!(acf_fields.flexible_content)}>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
            </Switch>
        </div>
    );
};

export default connect(SinglePost);