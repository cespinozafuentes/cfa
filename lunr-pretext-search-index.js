var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-introduccion",
  "level": "1",
  "url": "ch-introduccion.html",
  "type": "Chapter",
  "number": "1",
  "title": "Por qué estudiar matemática",
  "body": " Por qué estudiar matemática   Text before the first section.    "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Operaciones y propiedades",
  "body": " Operaciones y propiedades  Text of section.  "
},
{
  "id": "ch-algebra",
  "level": "1",
  "url": "ch-algebra.html",
  "type": "Chapter",
  "number": "3",
  "title": "Lenguaje algebraico",
  "body": " Lenguaje algebraico   Text before the first section.    "
},
{
  "id": "ch-recta",
  "level": "1",
  "url": "ch-recta.html",
  "type": "Chapter",
  "number": "4",
  "title": "Ecuación de la recta",
  "body": " Ecuación de la recta   Text before the first section.    "
},
{
  "id": "ch-inecuaciones",
  "level": "1",
  "url": "ch-inecuaciones.html",
  "type": "Chapter",
  "number": "5",
  "title": "Inecuaciones",
  "body": " Inecuaciones   Text before the first section.    "
},
{
  "id": "ch-funciones",
  "level": "1",
  "url": "ch-funciones.html",
  "type": "Chapter",
  "number": "6",
  "title": "Funciones",
  "body": " Funciones   Text before the first section.    "
},
{
  "id": "ch-estadistica",
  "level": "1",
  "url": "ch-estadistica.html",
  "type": "Chapter",
  "number": "7",
  "title": "Estadística descriptiva",
  "body": " Estadística descriptiva   Text before the first section.    "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
