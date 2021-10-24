jQuery(document).ready(function () {

$('p').each( function(index, elem){
   console.log(index + ' = '+ $(elem).text());

   //console.log(index + ' = '+ $(this).text()); pode ser usado o this e não seria necessário
   //passá-lo como parametro da função

   //Cuidado com o que vai dentro do each, é um loop e o que tiver dentro será executado várias vezes
})


});