package com.s8.pkgs.ui.carbide.popover;

import java.util.List;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebObject;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideDirection;
import com.s8.pkgs.ui.carbide.CarbideTheme;


/**
 * 
 * @author pierreconvert
 *
 */
public class Popover extends S8WebObject {
	
	
	public static Popover create(S8WebFront branch, CarbideTheme theme, CarbideDirection direction) {
		Popover popover = new Popover(branch);
		popover.setDirection(direction);
		popover.setTheme(theme);
		popover.setVisibility(true);
		return popover;
	}

	
	
	
	
	/**
	 * 
	 * @param branch
	 */
	public Popover(S8WebFront session) {
		super(session, CarbideWebSources.ROOT_WEBPATH + "/popover/Popover");
	}
	
	

	/**
	 * 
	 * @param direction
	 */
	public void setVisibility(boolean isVisible) {
		vertex.outbound().setBool8Field("visibility", isVisible);
	}
	
	
	/**
	 * 
	 * @param direction
	 */
	public void setDirection(CarbideDirection direction) {
		vertex.outbound().setUInt8Field("direction", direction.code);
	}
	
	
	/**
	 * 
	 * @param theme
	 */
	public void setTheme(CarbideTheme theme) {
		vertex.outbound().setUInt8Field("theme", theme.code);
	}
	
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(List<HTML_S8WebNode> elements) {
		vertex.outbound().setObjectListField("content", elements);
	}
	
	/**
	 * 
	 * @param elements
	 */
	public void setElements(HTML_S8WebNode... elements) {
		vertex.outbound().setObjectListField("content", elements);
	}
	
	

	/**
	 * 
	 * @param elements
	 */
	public void setPopover(Popover popover) {
		vertex.outbound().setObjectField("popover", popover);
	}
	
	
	/**
	 * 
	 */
	public void removePopover() {
		vertex.outbound().setObjectField("popover", null);
	}
	
	
	
}
