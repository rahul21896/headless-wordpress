import React from 'react';
import Switch from "@frontity/components/switch";
import {connect,styled,Head} from "frontity";
import PostList from "./pages/PostList";
import {RContainer} from "../component/CommonStyle";
import Page404 from "./pages/Page404";
import SinglePost from "./pages/SinglePost";
import HomePage from "./pages/HomePage";

const Body = ({state,actions}) => {
    const data = state.source.get(state.router.link);
    return(
        <RContainer style={{ marginTop:'100px' }}>
            <Switch>
                <SinglePost when={data.isHome} />
                <PostList when={data.isArchive} />
                <SinglePost when={data.isPost} />
                <SinglePost when={data.isPage} />
                <Page404 when={data.isError} />
            </Switch>
        </RContainer>
);
};

export default connect(Body);