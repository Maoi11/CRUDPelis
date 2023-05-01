//leer localStorage
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';

cambiarTema(temaConfigurado);

let btnThemeDark = document.querySelector('#btn-themeDark');
let btnThemeLight = document.querySelector('#btn-themeLight');

let iconTheme = document.getElementById('iconTheme');
console.log(iconTheme);

btnThemeDark.addEventListener('click', () => cambiarTema('dark'));
btnThemeLight.addEventListener('click', () => cambiarTema('light'));

function cambiarTema(color) {
    document.querySelector('body').setAttribute('data-bs-theme', color);
    localStorage.setItem('tema', JSON.stringify(color));
    
    
}
