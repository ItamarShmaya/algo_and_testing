/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */




const isValid = function (s) {
  while(s.indexOf("()") !== -1 || s.indexOf("[]") !== -1 || s.indexOf("{}") !== -1) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "")
  }
  return s.length === 0;
};
// console.log(isValid("([]{()}{([()])}))"));

// console.log(isValid("{()"));

module.exports = isValid;