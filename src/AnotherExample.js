import React, {Component,Fragment, useState, useRef} from 'react';
import {Button, Overlay} from "react-bootstrap";

function AnotherExample (props12) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    console.log("props==>",props12.popoverText);
    return (
        <Fragment>
            <Button variant="success" ref={target} onClick={() => setShow(!show)}>
                <i className="fa fa-info-circle"/>
            </Button>
            <Overlay target={target.current} show={show} placement="bottom">
                {({
                      placement,
                      scheduleUpdate,
                      arrowProps,
                      outOfBoundaries,
                      show: _show,
                      ...props
                  }) => (
                    <div {...props} className="tooltip-container"
                        style={{
                            backgroundColor: '#007bff',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                        }}
                    >
                        {props12.popoverText}
                    </div>
                )}
            </Overlay>
        </Fragment>
    );
}


export default AnotherExample;