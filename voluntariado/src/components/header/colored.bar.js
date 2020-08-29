import React from 'react';

const ColoredBar = ({color, height}) =>(
    <div className="colored__bar" style={styles(color, height).bar}/>
);

export default ColoredBar;

const styles = (color, height) => ({
    bar:{
        backgroundColor: color,
        height: height,
    }
});