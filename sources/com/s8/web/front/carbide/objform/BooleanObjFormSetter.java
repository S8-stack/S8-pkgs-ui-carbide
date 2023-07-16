package com.s8.web.front.carbide.objform;

import com.s8.io.bohr.neon.core.NeBranch;
import com.s8.io.bohr.neon.functions.primitives.Bool8NeFunction;
import com.s8.io.bohr.neon.lambdas.primitives.Bool8Lambda;

/**
 * 
 * @author pierreconvert
 *
 */
public class BooleanObjFormSetter extends PrimitiveObjFormSetter {

	
	public static BooleanObjFormSetter create(NeBranch branch, String name, boolean initialValue, Bool8Lambda lambda) {
		BooleanObjFormSetter fieldView = new BooleanObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValue(lambda);
		return fieldView;
	}
	
	
	public static BooleanObjFormSetter create(NeBranch branch, String name, boolean initialValue, Bool8Lambda lambda, String doc) {
		BooleanObjFormSetter fieldView = new BooleanObjFormSetter(branch);
		fieldView.setName(name);
		fieldView.setValue(initialValue);
		fieldView.onSetValue(lambda);
		fieldView.setTooltipDoc(doc);
		return fieldView;
	}
	
	
	/**
	 * 
	 * @param branch
	 */
	public BooleanObjFormSetter(NeBranch branch) {
		super(branch, "/s8-web-front/carbide/objform/BooleanObjFormGetter");
	}
	

	
	/**
	 * 
	 * @param value
	 */
	public void setValue(boolean value) {
		vertex.setBool8Field("value", value);
	}
	
	
	/**
	 * 
	 * @param lambda
	 */
	public void onSetValue(Bool8Lambda lambda) {
		vertex.setBool8MethodLambda("set-value", lambda);
	}

	
	/**
	 * 
	 * @param func
	 */
	public void onSetValue(Bool8NeFunction func) {
		vertex.setBool8Method("set-value", func);
	}

}
