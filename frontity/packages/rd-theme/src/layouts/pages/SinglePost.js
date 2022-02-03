import React from "react";
import {connect, css, Global, styled} from "frontity";
import FlexibleSections from "../../component/flexible-layouts/FlexibleSections";
import Switch from '@frontity/components/switch';
import {RContainer} from "../../component/CommonStyle";

const SinglePost = ({ state ,libraries}) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const acf_fields = post.acf;
    const Html2React = libraries.html2react.Component;

    return (
        <div>
            <Switch>
                <FlexibleSections when={acf_fields.flexible_content} />
                <RContainer when={!(acf_fields.flexible_content)}>
                    <DefaultContent>
                            <h2>{post.title.rendered}</h2>
                            <Html2React html={post.content.rendered} />
                    </DefaultContent>
                </RContainer>
            </Switch>
        </div>
    );
};

export default connect(SinglePost);

const DefaultContent = styled.div`
    display:block;
    text-align:center;
    width:100%;
    span{
    margin:0;
    padding:0;
    height:auto;
    }
    img{
        position:inherit !important;
        height:auto !important;
    }
    `;