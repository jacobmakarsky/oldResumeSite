$(document).ready(function()
{
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
	fader();

});
