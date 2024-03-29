

import { CubeElement } from '/S8-pkgs-ui-carbide/cube/CubeElement.js';
import { S8WebFront } from '/S8-pkgs-ui-carbide/S8WebFront.js';



/**
 * 
 */
S8WebFront.CSS_import('/S8-pkgs-ui-carbide/cube/Cube.css');


/**
 * 
 */
export class WrapperCubeElement extends CubeElement {


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
    }


    getEnvelope() {
        return this.wrapperNode;
    }

    S8_render() { /* continuous rendering approach... */ }

    /**
     * 
     * @param {*} content 
     */
    S8_set_content(content) {
        /* clear wrapper node content */
        while (this.wrapperNode.hasChildNodes()) { this.wrapperNode.removeChild(this.wrapperNode.lastChild); }

        /* append content */
        this.wrapperNode.appendChild(content.getEnvelope());
    }

    S8_dispose() { /* continuous rendering approach... */ }
}