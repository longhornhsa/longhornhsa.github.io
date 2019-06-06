(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "<img src=\"images/logo.png\" alt=\"Events\">";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var tags = $(".eventnav")
  
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

  if (scroll > 200 ) {
    $(tag).addClass("visible")
  } else {
    $(tag).removeClass("visible")
  }
}
});
