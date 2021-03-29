const array = [5, 7, 3.5, 9, 10, 8, 4, 2, 6, 6.5, 5.5];
var total = 0;

array.forEach(element=> {
       if (element < 10){
           total = element + 1
       }
       if(total >= 7){
           console.log(`${total} passou`)
       }
})
