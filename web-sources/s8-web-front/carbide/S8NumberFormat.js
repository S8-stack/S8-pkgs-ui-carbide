

/**
 * @type{Intl.NumberFormat[]}
 */
export const S8_NumberFormats = new Array(256);


/** STD2 */
S8_NumberFormats[0x22] = new Intl.NumberFormat('en-US', { 
    notation: "standard",
    maximumSignificantDigits: 2,
});

/** STD3 */
S8_NumberFormats[0x23] = new Intl.NumberFormat('en-US', { 
    notation: "standard",
    maximumSignificantDigits: 3,
});

/** STD4 */
S8_NumberFormats[0x24] = new Intl.NumberFormat('en-US', { 
    notation: "standard",
    maximumSignificantDigits: 4,
});

/** STD6 */
S8_NumberFormats[0x25] = new Intl.NumberFormat('en-US', { 
    notation: "standard",
    maximumSignificantDigits: 6,
});

/** SCI2 */
S8_NumberFormats[0x42] = new Intl.NumberFormat('en-US', { 
    notation: "scientific",
    maximumSignificantDigits: 2,
});


/** SCI3 */
S8_NumberFormats[0x43] = new Intl.NumberFormat('en-US', { 
    notation: "scientific",
    maximumSignificantDigits: 3,
});


/** SCI4 */
S8_NumberFormats[0x44] = new Intl.NumberFormat('en-US', { 
    notation: "scientific",
    maximumSignificantDigits: 4,
});

/** SCI6 */
S8_NumberFormats[0x46] = new Intl.NumberFormat('en-US', { 
    notation: "scientific",
    maximumSignificantDigits: 6,
});
