
import { NeObject } from '/s8-core-io-bohr-neon/NeObject.js';


import { S8WebFront } from '/s8-pkgs-ui-carbide/S8WebFront.js';

import { CubeElement } from './CubeElement.js';

/**
 * 
 */
S8WebFront.CSS_import('/s8-pkgs-ui-carbide/cube/Cube.css');


/**
 * 
 */
export class Cube extends NeObject {


    constructor() {
        super();
        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("cube");
    }

    getEnvelope() {
        return this.wrapperNode;
    }


    S8_render() { /* continuous rendering approach... */ }


    /**
     * 
     * @param {CubeElement[]} elements 
     */
    S8_set_elements(elements) {
        
        /* clear child nodes */
        while(this.wrapperNode.hasChildNodes()){ 
            this.wrapperNode.removeChild(this.wrapperNode.lastChild); 
        }

        /* insert new elements */
        elements.forEach(element => {
            if (element != null) {
                this.wrapperNode.appendChild(element.getEnvelope());
            }
        });
    }


    S8_dispose() { /* no disposing to be done... */ }
}