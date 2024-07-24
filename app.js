function encrypt(text) {
  let rule = new Map([
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]);

  let result = '';

  for (let char of text) {
    if (rule.has(char)) {
      result += rule.get(char);
    } else {
      result += char;
    }
  }

  return result;
}

function decrypt(text) {
  let rules = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
  ];

  return rules.reduce((result,[key, value]) => {
    return result.split(key).join(value);
  }, text);
}

function changeMessage(tag, texto) {
  let text = document.querySelector(tag);
  text.innerHTML = texto;
}

function outputStyleChange() {
  let placeholder = document.querySelector('.container_result_placeholder')
  placeholder.classList.add('hidden')

  let copy = document.querySelector('.container_result_output')
  copy.classList.remove('hidden')
}

function encryptText() {
  let text = document.querySelector('textarea').value;

  if (text.length !== 0) {
    let code = encrypt(text);

    changeMessage('#message', code);
    
    outputStyleChange()
  }
}

function decryptText() {
  let text = document.querySelector('textarea').value;

  if (text.length !== 0) {
    let code = decrypt(text);
    
    changeMessage('#message', code);
    
    outputStyleChange()
  }
}

function copyText() {
  let text = document.querySelector('#message').textContent;
  navigator.clipboard.writeText(text);

  alert(`Texto copiado: ${text}`)
}