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

   //Selecionanod por atributo
   //$('a[title]')
   $('a[title="Teste"]').css('border', '2px solid black')
});