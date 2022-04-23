/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let i = 0;
  while(strs[0][i] && strs.every(word => word[i] === strs[0][i])) {
    commonPrefix += strs[0][i];
    i++;
  }
return commonPrefix;
}

// console.log(longestCommonPrefix(["flower","flow","flight"]));
module.exports = longestCommonPrefix;
