package com.s8.pkgs.ui.carbide.structure;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;
import com.s8.pkgs.ui.carbide.HTML_NeNode;


/**
 * 
 * @author pierreconvert
 *
 */
public class InlineTextBox extends HTML_NeNode {
	
	/**
	 * 
	 * @param branch
	 * @param width
	 * @return
	 */
	public static InlineTextBox create(S8WebFront branch, String text) {
		InlineTextBox title = new InlineTextBox(branch);
		title.setText(text);
		return title;
	}

	
	/**
	 * 
	 * @param branch
	 */
	public InlineTextBox(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/structure/InlineTextBox");
	}
	
	
	/**
	 * 
	 * @param name
	 */
	public void setText(String text) {
		vertex.outbound().setStringUTF8Field("text", text);
	}
	
}
