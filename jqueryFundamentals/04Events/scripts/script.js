jQuery(document).ready(function () {
   /***
    * Lidando com eventos antes do JQuery
    * 
    * var button = document.getElementById('submitButton')
    * if (document.addEventListener){
    *    // Na maioria dos navegadores
    *    button.addEventListener('click', function() {alert('Botão Clicado')}, false);
    * }else{
    *    // No internet explorer:
    *    button.attachEvent('onclick', function(){alert('Botão Clicado')})
    * }
    */

   $('#submitButton').click( function(e){
      e.preventDefault();
      alert('Botão Clicado!')
   })

   $('input[type="email"]').change(function(){
      $(this).css('background-color','yellow')
   })

   let rangeLabel = $('label[for="customRange1"]')
   $('#customRange1').on('change', function(e){
      rangeLabel.text(`Example range ${$(this).val()}`)
   })

   /*
   let mousePosition = $('#mousePosition');
   $('.container').on('mouseenter mouseleave mouseup', function(e){
      mousePosition.text('X: ' + e.pageX + 'Y: ' + e.pageY);
   })
   */

   $('.container').on({
      mouseenter: function(){
         mousePosition.text('X: ' + e.pageX + 'Y: ' + e.pageY);
      },
      mouseleave: function(){
         mousePosition.text('Y: ' + e.pageY + 'X: ' + e.pageX);
      }
   })



   /***
    * Live e Delegate eram usados para não tera que dedicar event listeners para os itens filho
    * Live escalava até o DOM e Delegate escalava até o objeto que chamou
    * É aconselhado usar o On no lugar dos dois, como no exemplo abaixo
    * 
    * Adicionar um handler para cada linha da tabela consumiria muita memória
    * 
    * $('.table tr').on('click mouseenter mouseleave', function(){
    *    alert($(this).html())
    * })
    * 
    */

   $('.table tbody').on('click', 'tr', function(){
      console.log($(this).html())
   })
   
});