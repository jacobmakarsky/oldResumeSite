$(document).ready(function()
{
	fader();
	typeWriter();
});

//FADING HELLO LOOP CALLBACK FUNCTION
function fader()
{
	$("#helloText").text("Hello");
	$("#helloText").fadeIn(1500, function()
	{
		$("#helloText").fadeOut(1500, function()
		{
			$("#helloText").text("你好");
			$("#helloText").fadeIn(1500, function()
			{
				$("#helloText").fadeOut(1500, function()
				{
					$("#helloText").text("Hola");
					$("#helloText").fadeIn(1500, function()
					{
						$("#helloText").fadeOut(1500, function()
						{
							//fading cycle complete
							fader();
						});
					});
				});
			});
		});
	});
}

var i = 0;
var txt = 'Jacob Makarsky'; /* The text */
var speed = 250; /* The speed/duration of the effect in milliseconds */

//typewriter effect
function typeWriter() 
{
  	if (i < txt.length) 
  	{
    	document.getElementById("typewrite").innerHTML += txt.charAt(i);
    	i++;
    	setTimeout(typeWriter, speed);
  }
}
