var n = 5;
for (var i=1; i<=n; i++) {
    var line = "";
    for (var j=1; j<=n; j++) {
        if ((j+i)%2 !== 0) {
            line += "*";
        }
        else {
            line += " ";
        }
    }
    console.log(line);
}
