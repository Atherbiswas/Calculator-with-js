//get value from user ...
function display(getValue){
    document.getElementById('result').value += getValue;
}
//add event for the every button...
function myFunction(event){
    if(event.key ==='0' || event.key ==='1' || event.key ==='2' || event.key ==='3' || event.key ==='4' || event.key ==='5' || event.key ==='6' || event.key ==='7' || event.key ==='8' || event.key ==='9' || event.key ==='+' || event.key ==='-' || event.key ==='*' || event.key ==='/') 
    document.getElementById('result').value += event.key;
}
//calculate the sum to use function...
const calculate = document.getElementById('calculator');
calculate.onkeyup = function (event){
    if(event.keycode === 13){
        console.log('Enter');
        const x = document.getElementById('result').value;
        console.log(x);
        solve();
    }
}
//solve the calculate of the sum...
function solve(){
    const x = document.getElementById('result').value;
    const y = math.evaluate(x);
    document.getElementById('result').value = y;
}
//clear the input field after show the result...
function clr(){
    document.getElementById('result').value = '';
}
