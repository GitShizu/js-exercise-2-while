let sito = prompt('Inserisci un sito web')
if (!(sito.startsWith('http' || 'https') && sito.endsWith('.com')))  {
   console.error('URL non valido')
}