// import { findByLabelText } from "@testing-library/react";
// import Slider from "./slider";

import Slider from "./slider";

function FirstRow() {
    return (
        <div className="d-flex">
            <div className="d-flex h-100 position-relative">
                <Slider/>
            </div>

            <div className="d-flex">
                {/*<Slider/>*/}
            </div>


            {/*<div className="d-flex">*/}
            {/*    /!* <Slider/> *!/*/}
            {/*</div>*/}
        </div>

    )
}

export default FirstRow;