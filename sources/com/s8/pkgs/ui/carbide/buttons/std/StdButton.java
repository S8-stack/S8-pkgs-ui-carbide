package com.s8.pkgs.ui.carbide.buttons.std;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.functions.none.VoidNeFunction;
import com.s8.api.web.lambdas.none.VoidLambda;
import com.s8.pkgs.ui.carbide.CarbideWebSources;
import com.s8.pkgs.ui.carbide.HTML_S8WebNode;
import com.s8.pkgs.ui.carbide.CarbideSize;
import com.s8.pkgs.ui.carbide.CarbideTheme;


/**
 * 
 * @author pierreconvert
 *
 */
public class StdButton extends HTML_S8WebNode {
	
	/**
	 * 
	 * @param branch
	 * @param label
	 * @param size
	 * @param style
	 * @return
	 */
	public static StdButton create(S8WebFront branch, String label, CarbideSize size, CarbideTheme theme) {
		StdButton button = new StdButton(branch);
		
		button.setLabel(label);
		button.setSize(size);
		button.setTheme(theme);
		
		return button;
	}
	
	public enum Style{
		DEFAULT(0x02), PRIMARY(0x03), OUTLINE(0x04), DANGER(0x05);
		public int code;
		private Style(int code) { this.code = code; }
	}
	
	
	/**
	 * 
	 * @param branch
	 */
	public StdButton(S8WebFront branch) {
		super(branch, CarbideWebSources.ROOT_WEBPATH + "/buttons/std/StdButton");
		
		/* to be overridden */
		vertex.inbound().setVoidMethodLambda("on-click", () -> System.out.println("I'm clicked!"));
	}
	
	
	/**
	 * 
	 * @param text
	 */
	public void setLabel(String text) {
		vertex.outbound().setStringUTF8Field("label", text);
	}
	
	
	

	/**
	 * 
	 * @param menus
	 */
	public void setSize(CarbideSize size) {
		vertex.outbound().setUInt8Field("size", size.code);
	}
	
	
	/**
	 * 
	 * @param menus
	 */
	public void setTheme(CarbideTheme theme) {
		vertex.outbound().setUInt8Field("theme", theme.code);
	}
	
	
	/**
	 * 
	 * @param state
	 */
	public void setEnabled(boolean state) {
		vertex.outbound().setBool8Field("isEnabled", state);
	}
	
	
	
	public void onClick(VoidNeFunction function) {
		vertex.inbound().setVoidMethod("on-click", function);
	}
	
	
	public void onClickLambda(VoidLambda lambda) {
		vertex.inbound().setVoidMethodLambda("on-click", lambda);
	}
	
}

