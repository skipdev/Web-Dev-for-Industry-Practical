import React from "react";

function Tile(props) {
    const { children } = props;

    return <div className={'Tile'}>{children}</div>;
}

export default Tile;