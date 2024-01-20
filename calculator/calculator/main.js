function clearinput(){
    document.querySelector('.input').value = '';
}
function clickbtn(num){
    document.querySelector('.input').value += num;
}
function answer(){
    let inp = document.querySelector('.input').value;
    try{
        let result = eval(inp);
        document.querySelector('.input').value = result;
    }
    catch{
        document.querySelector('.input').value = 'ERROR';
    }
}



