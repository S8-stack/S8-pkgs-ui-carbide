


import { S8 } from '/S8-api/S8Context.js';
import { NeObject } from '/S8-core-bohr-neon/NeObject.js';



/**
 * basics
 */
S8.page.CSS_import('/S8-pkgs-ui-carbide/structure/Structure.css');


export class InlineSpacer extends NeObject {

    /**
     * 
     */
    constructor() {
        super();
        this.node = document.createElement("span");
        this.node.classList.add("spacer");
    }

  

    getEnvelope() {
        return this.node;
    }


    /**
     * 
     * @param {Popover} popoverBox 
     */
    S8_set_width(width) {
        this.node.style.width = width+"px";
    }

    
    S8_render() { /* continuous rendering approach... */ }
    S8_dispose() { /* continuous rendering approach... */ }
}