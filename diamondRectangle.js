function diamond(n) {
    str = "";
    if (n <= 0 || (n % 2 === 0)) {
        return null;
    } else {
        spaces = Math.floor(n/2);
        for (let i = 1; i <= n; i+=2) {
            str += " ".repeat(spaces) + "*".repeat(i) + "\n";
            spaces--;
        }
        spaces = 1;
        for (let i = n-2; i >= 1; i-=2) {
            str += " ".repeat(spaces) + "*".repeat(i) + "\n"; 
            spaces++;
       }
    }
    return str;
}

console.log(diamond(9));