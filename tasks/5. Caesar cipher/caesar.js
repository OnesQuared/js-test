export function encryptCaesar(inputString, key) {

  return inputString.split('').map(c => {

      const ascii = c.charCodeAt(0);
      if (' ' == c) return c;

  return c.toUpperCase().charCodeAt(0) + key > 90 ? String.fromCharCode(ascii + key - 90 + 64): String.fromCharCode(ascii + key);
    }).join('');
}