function checkPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] != s[j]) return false;
        i++, j--;
    }
    return true;
}
let s = "ABBCBBA";
let n = s.length;

for (let sp = 0; sp < n; sp++) {
    for (let ep = sp; ep < n; ep++) {
        if (checkPalindrome(s, sp, ep)) {
            console.log(s.substring(sp, ep + 1));
        }
    }
}