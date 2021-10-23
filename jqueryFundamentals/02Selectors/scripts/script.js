jQuery(document).ready(function () {

   //Pegando múltiplos itens
   console.log('$(\'p,a,span\')', $('p,a,span'))

   //Usando ancestor descendent
   console.log('$(\'div p\')', $('div p'));

   //Aplicando um estilo
   $('div a').css('background-color', 'Green');

   //Iterando pelos itens 
   $('div p').each(function () {
      console.log($(this).html());
   });

   //Selecionando por Id
   $('#middleParagraph').css('background-color', 'Gold');

   //Selecionando por classe
   $('a.hide').hide();

   //Selecionano por atributo
   //$('a[title]')
   $('a[title="Teste"]').css('border', '2px solid black')

   $('input[type="text"')


   //Seleciona todos os elementos de entrada : input, select, textarea, button, image, radio...
   $(':input')

   var inputs = $(':input');
   //Não adianta pegar tentar usar funções jQuery de elementos html, tem que envolvero num jquery
   // inputs[0].val() --> Erro
   console.log( $(inputs[0]).val() )

   //Podemos iterar entre os inputs, e o comportamento será um pouco diferente
   $(':input').each(function(){
      var elem = $(this); //Nesse caso já está envolvido no jQuery
      console.log(elem.val())
   })

   console.log('Exemplo de contains',$('p:contains("Exemplo")'));

   $('p:odd').css('background-color','gray')
   $('p:even').css('background-color','gold')

   $('div[title $= "Title"]').html();  // Termina com Title 
   //   $= termina com
   //   ^= começa com 
   //   *= contém


});