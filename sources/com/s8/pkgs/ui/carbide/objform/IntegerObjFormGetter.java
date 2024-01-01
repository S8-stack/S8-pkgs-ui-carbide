package com.s8.pkgs.ui.carbide.objform;

import com.s8.api.web.S8WebFront;
import com.s8.pkgs.ui.carbide.WebSources;

public class IntegerObjFormGetter extends PrimitiveObjFormGetter {

	public IntegerObjFormGetter(S8WebFront branch) {
		super(branch, WebSources.ROOT_WEBPATH + "/objform/IntegerObjFormGetter");
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setValue(int value) {
		vertex.outbound().setInt32Field("value", value);
	}
	

}
