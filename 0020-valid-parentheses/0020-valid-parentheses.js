/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Map closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        // If it's a closing bracket
        if (bracketMap[char] !== undefined) {
            // Pop the top element from the stack (returns undefined if stack is empty)
            const topElement = stack.pop();
            
            // Check if the popped opening bracket matches the required one
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were correctly matched
    return stack.length === 0;
};