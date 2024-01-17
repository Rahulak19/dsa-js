var findAnagrams = function(s, p) {
    const res = [];
    const neededChars = {};
    
    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++;
        } else {
            neededChars[char] = 1;
        }
    }
    
    let left = 0;
    let right = 0;
    let count = p.length;
    
    while (right < s.length) {
        if (neededChars[s[right]] > 0) {
            count--;
        }
        // Keep on decrementing b/c we now
        // have extra copies of the needed char
        // to spare
        neededChars[s[right]]--;
        right++;
        
        if (count === 0) res.push(left);
        
        if (right - left === p.length) {
            if (neededChars[s[left]] >= 0) {
                count++;
            }
            // Keep on adding b/c even if there
            // were extra copies of a needed char,
            // neededChars would have been below 0
            // so you need to add back to offset that
            neededChars[s[left]]++;
            left++;
        }
    }
    
    return res;
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s,p));