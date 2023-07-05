import { S8 } from "/s8-io-bohr-atom/S8.js";
import { S8_FlatIcons_Map } from "/s8-web-front/carbide/icons/S8FlatIcon.js";



export const ICON_ROOT_PATHNAME = "/s8-web-front/carbide/icons/";

/**
 * 
 */
class S8WebFrontUtilities {


	/**
	 * @type {Map<string, *>}
	 * // build stylesheets map
	 */
	map_CSS_stylesheets = new Map();


	/**
	 * @type {Map<string, *> }
	 */
	map_SVG_sources = new Map();


	/**
	 * @type{Object} 
	 * Previously active object: the last which sends a signal
	 */
	previouslyFocussed = null;



    constructor(){
       
    }



	/**
	 * 
	 * @param {*} name 
	 */
	CSS_import(name) {
		if (!this.map_CSS_stylesheets.has(name)) {

			/** create a new link node and append it to the document head section */
			let linkNode = document.createElement("link");
			linkNode.setAttribute("type", "text/css");
			linkNode.setAttribute("rel", "stylesheet");
			linkNode.setAttribute("href", name);
			document.head.appendChild(linkNode);

			// document.head.innerHTML += `<link type="text/css" rel="stylesheet" href=${name}>`;
			this.map_CSS_stylesheets.set(name, true);
		}
	}





    /**
     * 
     * @param {HTMLElement} target 
     * @param {number} code 
     * @param {number} width 
     * @param {number} height 
     */
    SVG_insertByCode(target, code, width, height) {
        S8WebFront.SVG_insertByName(target, S8_FlatIcons_Map[code], width, height);
    }


	/**
	 * 
	 * @param {HTMLElement} target 
	 * @param {string} name 
	 * @param {number} width 
	 * @param {number} height 
	 */
	SVG_insertByName(target, name, width, height) {

		let svgSource0 = this.map_SVG_sources.get(name);

		let injector = function (source) {
			target.innerHTML = source;
			let svgNode = target.getElementsByTagName("svg")[0];
			svgNode.setAttribute("width", width);
			svgNode.setAttribute("height", height);
		}

		if (svgSource0 != undefined) {
			injector(svgSource0);
		}
		else {
			let _this = this;
			const pathname = ICON_ROOT_PATHNAME + name;
			S8.sendRequest_HTTP2_GET(pathname, "text", function (svgSource1) {
				_this.map_SVG_sources.set(name, svgSource1);
				injector(svgSource1);
			});
		}
	}






	/**
	 * Efficiently remove children nodes of a node
	 * @param {*} node 
	 */
	removeChildren(node) {
		/* An earlier edit to this answer used firstChild, 
		but this is updated to use lastChild as in computer-science, 
		in general, it's significantly faster to remove the last 
		element of a collection than it is to remove the first element 
		(depending on how the collection is implemented). */
		while (node.firstChild) {
			node.removeChild(node.lastChild);
		}
	}





	/**
	 * 
	 * @param {Object} object 
	 */
	focus(object){
		let previous = this.previouslyFocussed;
		if(previous != null){
			if(previous.S8_unfocus){
				previous.S8_unfocus();
			}
			else{
				console.log("Object missing a S8_unfocus method: " + previous);
			}
		}
		this.previouslyFocussed = object;
	}

}


/**
 * 
 */
export const S8WebFront = new S8WebFrontUtilities();