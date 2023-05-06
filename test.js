function realNumbers(n){
    res = 0;
    
    function are (n) {
    
    if(n==1){
    return res}
    if (n%2==0 || n%3==0 || n%5==0){
        res = res+1
        return are(n-1)}
    
    return are(n-1)
    }
    are(n)
    console.log(n-res);

    return [n,n-res]
    }

    realNumbers(10000000)


    console.log(34.4 | 0);

