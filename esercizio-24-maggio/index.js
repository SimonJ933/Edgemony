const appEl = document.querySelector('.app');
appEl.insertAdjacentHTML('afterbegin', '<div><h1>ECCO LA PAGINA BLA BLA</h1>');
appEl.append('bla bla bla');


//creazione button dopo <p>
const button = document.createElement ('button');
appEl.insertAdjacentElement('afterend', button);
button.innerHTML = 0;
button.onmouseenter = function(){
        this.style.backgroundColor = 'rebeccapurple';
        this.style.fontSize = '30px';
}
button.onmouseleave = function(){
    this.style.backgroundColor = 'grey';
    this.style.fontSize = '20px';

}
button.onclick= function(){
    this.style.borderRadius = '10px';
    this.style.rotate = '300deg';
    this.style.marginTop = '50px';
    this.style.backgroundColor = 'rebeccapurple';
    this.style.fontSize = '30px';
    const html = this.innerHTML;
    const count = Number(html) || 0;
    this.innerHTML = count + 1;
}

//LISTA NOMI
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const liEl = document.querySelector('.list');

formEl.onsubmit = function(event){
    event.preventDefault();
    const inputValue = inputEl.value.trim();
    if(inputValue && inputValue.includes(' ')){
      const li = document.createElement('li')  
      li.innerText = inputValue;
    liEl.append(li);
    inputEl.value= '';
    li.onclick = function(){
        console.log(liEl.innerText);
        }
    }

}


