const maintitle = counter-app.queryseletor('#title');
let curvalue = 0;

const btndecrement =  counter-app.queryseletor('#decreent');
const btnreset = counter-app.queryseletor('#reset');
const btnIncrement = counter-app.queryseletor('#increment');

btnIncrement.addeventlistener('click',() =>{
    curvalue++;
    maintitle.textcontent = curvalue;
    
});
btnDecrement.addeventlistener('click',() =>{
    curvalue--;
    maintitle.textcontent = curvalue;
    
});
btnreset.addeventlistener('click',() =>{
    curvalue = 0;
    maintitle.textcontent = curvalue;
    
});