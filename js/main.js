    jQuery(document).ready(function($) {
        $('.multiple-checkboxes').multiselect();

        
        $('#add_row').on('click', function(){

			var governorate = $('.governorate').val();
	        var district = $('.district').val();
	        var subdistrict = $('.subdistrict').val();
	        var property_registration = $('.property_registration').val();
	        var latitude = $('.latitude').val();
	        var longitude = $('.longitude').val();
	        var generel_security = $('.generel_security').val();
	        var uso_erw = $('.uso_erw').val();
	        var tr = $('<td>'+governorate+'</td><td>'+district+'</td><td>'+subdistrict+'</td><td>'+property_registration+'</td><td class="t_a_r">'+latitude+'</td><td class="t_a_r">'+longitude+'</td><td>'+generel_security+'</td><td>'+uso_erw+'</td><td><input type="radio" name="" checked=""></td><td class="delete_edit_burrons"><img src="./img/edit.svg" alt="edit"><img src="./img/delete.svg" alt="delete"></td>');

        	$('.location_table tbody').append(tr)
        })
 })
var modal = document.getElementById("myModal");

var cancel = document.getElementById("cancel");

var add_row = document.getElementById("add_row");

var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal || event.target == cancel || event.target == add_row) {
    modal.style.display = "none";
  }
}