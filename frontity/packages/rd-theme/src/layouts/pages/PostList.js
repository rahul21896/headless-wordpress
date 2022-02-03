import React from 'react';
import {connect, styled,fetch} from "frontity";
import Link from "../../component/Link";
import axios from "axios";


const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;

const PostList = ({ state , actions }) => {
    const data = state.source.get(state.router.link);
    return (
        <Items>
            {data.items.map(item => {
                const type = item.type;
                const post = state.source[type][item.id];
                return (
                    <div key={item.id}>
                        <Link key={item.id} href={item.link}> {post.title.rendered}</Link>
                        <h1>{state.rdTheme.site_name}</h1>
                    </div>
                );
            })}
        </Items>
    );
};

export default connect(PostList);