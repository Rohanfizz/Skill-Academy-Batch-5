let s = "AbCdEFghiJXz";

s = s.split("");

for (let i = 0; i < s.length; i++) {
    let asciiOfCurrCharr = s[i].charCodeAt();
    if (asciiOfCurrCharr >= 97) {
        // we are on a small letter
        let newCharCode = asciiOfCurrCharr - 32;
        s[i] = String.fromCharCode(newCharCode);
    } else {
        // we are on capital letter
        let newCharCode = asciiOfCurrCharr + 32;
        s[i] = String.fromCharCode(newCharCode);
    }
}

s = s.join("");
console.log(s);
