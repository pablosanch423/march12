const getNaturalSum = (n) => {
    let total = 0;
    for(let i=1;i<=n;i++){
        total += i;
    }
    return total;
}

console.log(getNaturalSum(10))