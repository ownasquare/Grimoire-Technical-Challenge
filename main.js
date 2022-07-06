const censorWords = (event) => {
  event.preventDefault();
  var textContent = document.getElementById('input');
  textContent.value = censored(textContent.value)
}

const censored = (w) =>
  w .replace(/'([^"]+)'/g, (_, s) => `'${s.replace(/[a-zA-Z0-9]/g, 'X')}'`)
    .replace(/"([^"]+)"/g, (_, s) => `"${s.replace(/[a-zA-Z0-9]/g, 'X')}"`);

/* This code changes the censoring from 'XXX' to just XXX (No quotes around censor)
  w .replace(/'([^"]+)'/g, (_, s) => `${s.replace(/[a-zA-Z0-9]/g, 'X')}`)
    .replace(/"([^"]+)"/g, (_, s) => `${s.replace(/[a-zA-Z0-9]/g, 'X')}`)
    */
document.getElementById('formSub').addEventListener('click', censorWords)