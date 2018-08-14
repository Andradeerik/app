function mensaje() {
	swal({
		title: '<strong><u>COMPARTIR</u></strong>',
		// type: 'info',
		html: '<div class="centroo sharedd-panel"><br><a target="_blank" class="sharedd fb " title="Facebook"></a><a target="_blank" class="sharedd tt " title="Twitter"></a><a target="_blank" class="sharedd gp " title="Google+"></a><a class="sharedd wa " data-action="share/whatsapp/share" title="WhatsApp"></a><a target="_blank" class="sharedd ce " title="Email"></a></div>',
		showCloseButton: true,
		// showCancelButton: true,
		//  focusConfirm: false,
		//  confirmButtonText:
		//    '<i class="fa fa-thumbs-up"></i> Great!',
		//  confirmButtonAriaLabel: 'Thumbs up, great!',
		showConfirmButton: false,
		//  cancelButtonText:
		//    '<i class="fa fa-thumbs-down"></i> Cancelar',
		//   cancelButtonAriaLabel: 'Thumbs down',  
		background: '#fff',
		backdrop: `
	 	  rgba(0,0,123,0.4)
	`

	})
}

function mensaje1() {
	swal({
		title: 'Custom width, padding, background.',
		width: 600,
		showCancelButton: true,
		showCancelButton: true,
		padding: '3em',
		background: '#fff',
		confirmButtonAriaLabel: 'Thumbs up, great!',
		confirmButtonText: '<i class="fab fa-facebook"></i> facebook',
		cancelButtonText: '<i class="fab fa-facebook"></i>',
		// backdrop: `
		//   rgba(0,0,123,0.4)
		//   url("/images/nyan-cat.gif")
		//   center left
		//   no-repeat`

	})
}


$(document).on('click', ".sharedd", function () {
	var url = window.location.href;
	var title = document.title;

	url = encodeURIComponent(url);
	title = encodeURIComponent(title);

	//Boton Facebook
	if ($(this).hasClass('fb')) {
		url = 'https://www.facebook.com/sharer/sharer.php?u=' + url + '&t=' + title;

		//Boton Twitter
	} else if ($(this).hasClass('tt')) {
		user = 'AEDaniel18'; //Nuestro usuario de twitter para mostrar como @user
		url = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url + '&via=' + user;

		//Boyton Google Plus
	} else if ($(this).hasClass('gp')) {
		url = 'https://plus.google.com/share?url=' + url;

		//Boton WhtsApp
	} else if ($(this).hasClass('wa')) {
		url = 'whatsapp://send?text="' + document.title + '" - "' + window.location.href + '"';

		//Boton correo electronico
	} else if ($(this).hasClass('ce')) {
		url = 'mailto:?subject=' + title + '&body=' + url;

		//Ningun boton valido
	} else return;

	//Abrimos la url
	window.open(url, '_blank');
});