



import { S8 } from '/S8-api/S8Context.js';
import { PrimtiveLightFormInput } from './PrimtiveLightFormInput.js';


export class EnumLightFormInput extends PrimtiveLightFormInput {


    /**
     * @type{number}
     */
    currentlySelectedIndex = -1;


    constructor() {
        super();
    }

    createInputNode() {

        /* <select> */
        let selectWrapperNode = document.createElement("div");
        selectWrapperNode.classList.add("lightform-input-wrapper");

        this.selectNode = document.createElement("select");
        this.selectNode.setAttribute("name", "list");
        this.selectNode.classList.add("lightform-input");
        selectWrapperNode.appendChild(this.selectNode);
        this.wrapperNode.appendChild(selectWrapperNode);

        // populate with options
        for(let i=0; i<4; i++){
            let optionNode = document.createElement("option");
            optionNode.setAttribute("value", `${i}`);
            optionNode.innerText = "Option "+i;
            this.selectNode.appendChild(optionNode);
        }
        /* </select> */

        const _this = this;
        this.selectNode.addEventListener("change", function(event){
            S8.page.loseFocus();
            _this.sendValue();
            event.stopPropagation();
        })
    }


    sendValue(){
        let index = parseInt(this.selectNode.value);
        this.S8_vertex.runUInt8("on-selected", index);
    }

    S8_set_options(enumValues){
        // remove previous nodes
        S8.page.removeChildren(this.selectNode);

        // add new ones
        let _this = this;
        let n = enumValues.length;
        for(let i=0; i<n; i++){
            let optionNode = document.createElement("option");
            optionNode.setAttribute("index", `${i}`);
            optionNode.setAttribute("value", `${i}`);
            if(this.currentlySelectedIndex >= 0 && this.currentlySelectedIndex == i){
                optionNode.setAttribute("selected", "");
            }
            optionNode.innerText = enumValues[i];
            this.selectNode.appendChild(optionNode);
        }
    }

    S8_set_preset(selectedIndex){
        let children = this.selectNode.children;
        let n = children.length;
        for(let i=0; i<n; i++){
            let optionNode = children[i];
            if(optionNode.hasAttribute("index")){
                let index = optionNode.getAttribute("index");
                if(index == selectedIndex){
                    optionNode.setAttribute("selected", "");
                }
                else{
                    optionNode.removeAttribute("selected");
                }
            }
        }
        this.currentlySelectedIndex = selectedIndex;
    }


}
