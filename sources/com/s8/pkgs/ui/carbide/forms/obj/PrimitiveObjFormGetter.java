package com.s8.pkgs.ui.carbide.forms.obj;

import com.s8.api.web.S8WebFront;

public class PrimitiveObjFormGetter extends ObjFormElement {

	public PrimitiveObjFormGetter(S8WebFront branch, String typeName) {
		super(branch, typeName);
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setFieldName(String name) {
		vertex.outbound().setStringUTF8Field("fieldName", name);
	}

}
