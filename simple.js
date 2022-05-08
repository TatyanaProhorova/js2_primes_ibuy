
// Функция simple выводит список первых простых чисел. 
// Количество простых чисел - натуральное число - задается в командной строке, 
// например,      node simple 14
 
function simple(m) 
{  
  const a = pushPrime(3);
  let forNext = a[0];
  let result = a[1];
    for (i = 3; i < m; i++) 
    { 
      result = pushPrime(forNext);
      forNext = result[0];
    }
    return [...[2], ...result[1]]; 
  }
 
  let p = 3; 
  const primes = [3];  
  function pushPrime(n)
  {
    while(primes[primes.length - 1] <= n) 
    { 
      if(primes.every(d => p%d)){ 
      // if(dividers.every(d => if (d * d < p) {p%d})){ 
        primes.push(p);}
      p = p + 2; 
    }
    return [primes[primes.length - 1], primes]; 
  }   


console.log(simple(process.argv[2]));


// В командной строке ввести node simple <число - количество простых чисел в списке >