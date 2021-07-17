import React from "react";

import Comment from "./Comment/Comment";
import ax from "../../hoc/ax/ax";

const comments = props => {
    return props.commentsList.map(comment => (
        <ax key={comment.published_on}>
            <Comment
                name={comment.name}
                website={comment.website}
                body={comment.body}
                publishedOn={comment.published_on}
            />
        </ax>
    ));
};

export default comments;
