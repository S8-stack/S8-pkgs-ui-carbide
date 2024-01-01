package com.s8.pkgs.ui.carbide.asw;

import com.s8.api.web.S8WebFront;
import com.s8.api.web.S8WebFrontObject;
import com.s8.pkgs.ui.carbide.WebSources;

/**
 * 
 * @author pierreconvert
 *
 */
public class AswCharacterSentence extends S8WebFrontObject {

	/**
	 * 
	 * @param branch
	 * @param text
	 * @param attitudeIndex
	 * @param pause
	 */
	public AswCharacterSentence(S8WebFront branch, String text, int attitudeIndex, long pause) {
		super(branch, WebSources.ROOT_WEBPATH + "/asw/AswCharacterSentence");
		
		vertex.outbound().setStringUTF8Field("text", text);
		vertex.outbound().setUInt8Field("attitudeIndex", attitudeIndex);
		vertex.outbound().setUInt32Field("pause", pause);
	}

}
