

import { PrimtiveLightFormOutput } from './PrimitiveLightFormOutput.js';

/**
 * 
 */
export class BooleanLightFormOutput extends PrimtiveLightFormOutput {

    constructor() {
        super(5);
    }

    createOutputNode() {

        /* <output> */
        this.outputNode = document.createElement("div");
        this.outputNode.classList.add("lightform-output");
        this.wrapperNode.appendChild(this.outputNode);
        this.outputNode.innerHTML = `<span>(value)</span>`;
        /* </output> */
    }


    S8_set_value(value){
        this.outputNode.innerHTML = `<span>${value?"TRUE":"FALSE"}</span>`;
    }
}

