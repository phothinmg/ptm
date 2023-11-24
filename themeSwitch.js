function td(){
    var a,theme
    a = document.getElementById('td');
    theme = 'light';
    if (a.innerText == '☪'){
            a.innerText = '☀'; theme='dark';
        } else {
            a.innerText = '☪';
        }
    document.querySelector('html').setAttribute('data-theme', theme)

}
