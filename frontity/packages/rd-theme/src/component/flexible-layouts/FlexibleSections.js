import React from 'react';
import {connect} from "frontity";
import Switch from '@frontity/components/switch';
import FlexibleSlider from "./FlexibleSlider";
import FlexibleGeneralContent from "./FlexibleGeneralContent";

const FlexibleSections = ({state}) => {
        const data = state.source.get(state.router.link);
        const post = state.source[data.type][data.id];
        const acf_fields = post.acf;

        return(
            <>
                {acf_fields.flexible_content.map((item) => {
                    return(
                        <Switch>
                                <FlexibleSlider data={item} when={item.acf_fc_layout === 'flexible-image-slider'} />
                                <FlexibleGeneralContent data={item} when={item.acf_fc_layout === "flexible-general-content"} />
                        </Switch>
                    );
                })
                }
            </>
        );
};

export default connect(FlexibleSections);