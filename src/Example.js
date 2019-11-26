import React, {Component,Fragment, useState, useRef} from 'react';
import './CustomToolTipInfo.css'

function CustomToolTipInfo (textProps) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [dimensions, setDimensions] = useState({
        top: 0,
        left: 0
    });
    const showStyle = {
        top: `${dimensions.top + 26}px`,
        left: `${dimensions.left - 43}px`,
        display: 'block'
    }
    const Pop = ()=> {
        return (
            <div className="tooltip-container"
                 style={show ? showStyle: {display: 'none'}}>
                <div className="triangle-up"></div>
                <div className="d-flex">
                    <div>{textProps.popoverText}</div>
                    <div className="ml-1">
                        <i className="fas fa-times"
                           onClick={() => { setShow(!show) }}/>
                    </div>
                </div>
            </div>
        )};

    const handleShowPop = () => {
        setDimensions((prevState => {
            return {top: target.current.offsetTop, left: target.current.offsetLeft}
        }));
        setShow(!show)
    };
    return (
        <Fragment>
                <span ref={target}  onClick={() => handleShowPop()}>
                    <i className="fa fa-info-circle"/>
                </span>

            <Pop/>
        </Fragment>
    );
}


export default CustomToolTipInfo;