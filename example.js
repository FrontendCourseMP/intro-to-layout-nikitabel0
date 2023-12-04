document.querySelector('')

console.log("adadad")
console.log(document.querySelector('.theme-button'))
document.querySelector('.page').classList.remove('light-theme');
document.querySelector('.page').classList.add('dark');
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
    console.log('Клик!')
}; 