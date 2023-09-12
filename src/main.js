import GeraCpf from './modules/geraCpf';
import './assets/css/style.css';

(function(){
    const gera = new GeraCpf();
    const resultado = document.querySelector('.resultado');
    document.addEventListener('click',(e)=>{
        if ( e.target &&  e.target.classList[0] === 'geracpf') {
            resultado.innerHTML = gera.geraNovoCpf();

        }
    })
    
   
   
})();

