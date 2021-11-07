import React from "react";
import {Link} from "react-router-dom";

const MyLink = ({children, ...props}) => {
    return (
        <div>
            <Link {...props}>{children}</Link>
        </div>
    );
};

export default MyLink;