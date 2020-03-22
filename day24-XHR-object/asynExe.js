console.log('1')


setTimeout(()=>{
    console.log('2')   //*1
},2500);     //2.5ms    : 1000 ms = 1 s

console.log('3')


/* In js any function/operation that consumes time is send to the background

1
3
2  //*1

*/



console.log('1')


setTimeout(()=>{
    console.log('2')     //*2
    console.log('3')     //*3
},2500);


/*  time consuming functions get executed atlast

1
3
1
2    //*1
2    //*2
3    //*3

*/