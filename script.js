$(document).ready(function(){

	$("form").on("submit", function(){

  	event.preventDefault();
		console.log(event);

		console.log("submitted!!");

		const crustValue = $("input[name='crust']:checked").val();

		console.log(crustValue);

		const sauceValue = $("input[name='sauce']:checked").val();
		console.log(sauceValue);

    let cheeseValue = [];
		$("input[name='cheese']:checked").each(function() {
   			console.log(this.value);
        cheeseValue.push(this.value);
		});
    console.log(cheeseValue.toString());

    let toppingsValue = [];
		$("input[name='toppings']:checked").each(function() {
   			console.log(this.value);
        toppingsValue.push(this.value);
		});
    console.log(toppingsValue.toString());

    const extraValue = $("input[name='extra']:checked").val();
    console.log(extraValue);

		let counter = $(".counter");
			counter = 0;

    if (crustValue === "Thick crust"){
			counter = counter + 1;
		}
    $(".counter").text(counter);

		if (sauceValue === "Tomato sauce"){
			counter = counter + 1;
		}
    $(".counter").text(counter);

		if (cheeseValue.toString() === "Cheddar,Parmesan"){
			counter = counter + 2;
    };
		$(".counter").text(counter);

    if (toppingsValue.toString() === "Pepperoni,Red onions,Fresh green peppers,Fresh mushrooms,Italian sausage"){
      counter = counter + 5;
    };
    $("counter").text(counter);

    if (extraValue === "Pepper flakes"){
      counter = counter + 1;
    }
    $(".counter").text(counter);

    if (counter === 10) {
      $(".congrats").delay(1000).fadeIn(300);
      $("input[type='submit']").css('visibility','hidden');
      $(".tryAgain").css('visibility','hidden');
    }

    else {
      $(".monitor").addClass("monitorLightUp");
      $("input[type='submit']").css('visibility','hidden');
    }

	});

  $(".tryAgain").click(function(){
    location.reload();
  });

  const checkboxes = $('input[type="checkbox"]:not([id="ALL"])');
    $('input[type="checkbox"]').on({
        'change': function(){
      const checkbox = $(this);

      if(checkbox.attr('id') == 'ALL'){
          checkboxes.prop('checked',checkbox.prop('checked')).checkboxradio('refresh');
      }
      else {
          $('#ALL').prop('checked',(checkboxes.length == $('input[type="checkbox"]:checked:not([id="ALL"])').length)).checkboxradio('refresh');
      }
    }
  });
});


// This can also work for multiple values:
// function arraysEqual(arr1, arr2) {
//     if(arr1.length !== arr2.length)
//         return false;
//     for(var i = arr1.length; i--;) {
//         if(arr1[i] !== arr2[i])
//             return false;
//     }

//     return true;
// }