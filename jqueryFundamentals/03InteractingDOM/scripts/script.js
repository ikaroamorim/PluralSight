jQuery(document).ready(function () {

$('p').each( function(index, elem){
   console.log(index + ' = '+ $(elem).text());

   //console.log(index + ' = '+ $(this).text()); pode ser usado o this e não seria necessário
   //passá-lo como parametro da função

   //Cuidado com o que vai dentro do each, é um loop e o que tiver dentro será executado várias vezes
})


$('a').attr('href','http://www.youtube.com')

//Dá para usar JSON para mudar os atributos
$('a').attr({
   title: 'My Anchor Title',
   style: 'color: red'
});

// Chaining
$('p').attr('title', 'Paragraph Title').css('color','#555')

var mc = $('#myContent')

//Append
mc.append('<div class="alert alert-primary" role="alert">Alerta appendada</div>');
//$('<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>').appendTo('h1')

//Prepend
mc.prepend('<div class="alert alert-secondary" role="alert">Alerta prependado</div>');

//Wrap
$('#myContent, form').wrap('<div class="container"><div class="row"><div class="col-6"></div></div></div>');

$('p:last-child').remove()

mc.css({
   'background-color':"#eef",
   'font-size':'16px'
})

/*
addClass
hasClass
removeClass
toggleClass
*/
$('nav').addClass('navbar-dark bg-dark').removeClass('navbar-light bg-light')

});