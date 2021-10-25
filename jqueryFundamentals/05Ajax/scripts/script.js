jQuery(document).ready(function () {

   //Carregando Conteúdo HTML externo:
   // passando url e o nó a ser importado
   $('.helper').click(function(){
      $('.helper').load('details.html h1')
   })

   /***
    *Passando dado para o servidor 
      
   $('.helper').click(function(){
      $('.helper').load('details.html', {PageSize:25})
   })

   $('#OutputDiv').load('NotFound.html',
      function (response, status, xhr){
         if (status == 'error'){
            alert(xhr.statusText);
         }
      });
   */

      /*
      $.get('https://pokeapi.co/api/v2/pokemon/pikachu',function(data){
         $('#outputDiv').html(JSON.stringify(data))
      })
      */

      $.ajax({
         method: 'GET',
         url:'https://pokeapi.co/api/v2/pokemon/charmander',
         dataType: 'json',
         success: function(data){
            $('#outputDiv').html(JSON.stringify(data))
         },
         error: function(error){
            console.error(error)
         }
      })
});