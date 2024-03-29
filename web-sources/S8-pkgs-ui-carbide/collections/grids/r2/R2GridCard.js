

import { NeObject } from "/S8-core-bohr-neon/NeObject.js";




export class R2GridCard extends NeObject {



    /**
     * @type{Popover}
     */
    popover = null;



    constructor(){
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("r2grid-card-wrapper");

        this.cardNode = document.createElement("div");
        this.cardNode.classList.add("r2grid-card-shape");
        this.wrapperNode.appendChild(this.cardNode);

    }

    getEnvelope() {
        return this.wrapperNode;
    }





    attachPopover() {
        this.popoverBox.attach(this.cardNode);
    }

    detachPopover() {
        this.popoverBox.detach();
    }


    /**
     * 
     * @param {Popover} popover
     */
    S8_set_popover(popover) {
        if (popover != null) {
            this.popover = popover;
            this.cardNode.appendChild(this.popover.getEnvelope());
            //this.popover.attach(this.cardNode);

            /* focus on node */
            this.popover.show();
        }
        else if (popover == null && this.popover != null) {
            this.cardNode.removeChild(this.popover.getEnvelope());
            this.popover = null;
        }
    }

}