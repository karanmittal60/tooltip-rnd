import React, {Fragment} from 'react';
import { Tooltip, OverlayTrigger} from "react-bootstrap";
import './CustomToolTipInfo.css'

function CustomToolTipInfo (textProps) {
    const customTooltip = (
        <Tooltip id="tooltip-top" className="custom-tooltip">
            {textProps.popoverText}
        </Tooltip>
    );

    return (
        <Fragment>
            <OverlayTrigger trigger="click" placement="top" overlay={customTooltip}>
                <i className="fa fa-info-circle"/>
            </OverlayTrigger>
        </Fragment>
    );
}


export default CustomToolTipInfo;