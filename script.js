// Ano do rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Efeito de digitação no hero (respeita prefers-reduced-motion)
const typedEl = document.getElementById('typedLine');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lines = [
  'whoami',
  'Software Engineer · Dados & IA · Segurança'
];

function typeSequence(){
  if(!typedEl) return;

  if(reduceMotion){
    typedEl.textContent = lines[1];
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;

  function typeChar(){
    const current = lines[lineIndex];
    if(charIndex <= current.length){
      typedEl.textContent = current.slice(0, charIndex);
      charIndex++;
      setTimeout(typeChar, lineIndex === 0 ? 70 : 35);
    } else if(lineIndex < lines.length - 1){
      setTimeout(() => {
        lineIndex++;
        charIndex = 0;
        typeChar();
      }, 500);
    }
  }
  typeChar();
}

typeSequence();
