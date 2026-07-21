/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return "";
    
    // Loop through each character of the first string
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        
        // Compare this character with the character at the same index in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If the current string is shorter than index i, 
            // or the character doesn't match, return the prefix up to this point
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    // If the loop completes, the entire first string is the common prefix
    return strs[0];
};