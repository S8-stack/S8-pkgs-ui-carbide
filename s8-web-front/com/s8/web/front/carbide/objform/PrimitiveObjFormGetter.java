package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;

public class PrimitiveObjFormGetter extends ObjFormElement {

	public PrimitiveObjFormGetter(NeBranch branch, String typeName) {
		super(branch, typeName);
	}
	
	
	/**
	 * Set field name
	 * @param name
	 */
	public void setName(String name) {
		vertex.setStringUTF8("name", name);
	}

}
