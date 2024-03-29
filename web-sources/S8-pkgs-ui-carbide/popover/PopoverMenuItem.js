import { Popover } from "./Popover.js";
import { S8 } from "/S8-api/S8Context.js";
import { NeObject } from "/S8-core-bohr-neon/NeObject.js";





export class PopoverMenuItem extends NeObject {



    /**
     * @type {Popover}
     */
    menu;

    
    constructor(){
        super();

        this.wrapperNode = document.createElement("div");
        this.wrapperNode.classList.add("popover-item");

        this.iconNode = document.createElement("div");
        this.iconNode.classList.add("popover-item-icon");
        this.wrapperNode.appendChild(this.iconNode);

        this.labelNode = document.createElement("div");
        this.labelNode.classList.add("popover-item-label");
        this.wrapperNode.appendChild(this.labelNode);
    }


    /**
     * 
     * @returns 
     */
    getEnvelope(){
        return this.wrapperNode;
    }


    /**
     * 
     * @param {*} name 
     */
    S8_set_name(name){
        this.labelNode.innerHTML = name;
    }

    S8_set_icon(name){
        S8.page.SVG_insertByName(this.iconNode, ICON_ROOT_PATHNAME + name, 16, 16);
    }

    /**
     * 
     */
    S8_render(){
    }


    /**
     * 
     */
    S8_dispose(){
    }


}