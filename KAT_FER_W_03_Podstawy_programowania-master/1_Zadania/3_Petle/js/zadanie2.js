var n=5;

for(var i=1; i<=n; i++){
    var line = i+': ';
    //build line text
    for(var j=1; j<=n; j++){
        //if first or last row
        //or first or last column
        if(i==1 || i==n || j==1 || j==n) {
            line += '*';
        }else{
            line += ' ';
        }
    }
    //print line text
    console.log(line);
}