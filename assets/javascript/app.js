$("#start").on('click', function(){
	game.start();	
})

$(document).on('click', '#end', function(){
	game.done();
})

var questions =[{
	question: "What is the world's longest river?", 
	answers:["Nile", "Amazon", "Yangtze", "Congo"],
	correctAnswer:"Amazon"
}, {
	question: "Who is the Founder of Microsoft?",
	answers: ["Woody Allen", "Steve Jobs", "Bill Gates", "Steve Case"],
	correctAnswer: "Bill Gates"
}, {
	question: "What is the diameter of Earth?",
	answers: ["12,000 miles", "10,000 miles", "8,000 miles", "6,000 miles"],
	correctAnswer: "8,000 miles"
}, {
	question: "Who is the star in the movie Saturday Night Fever?",
	answers: ["John Travolta", "Kevin Spacey", "Clint Eastwood", "Brad Pitt"],
	correctAnswer: "John Travolta"
}, {
	question: "What is the world's biggest island?",
	answers: ["Madagascar", "Hawaii", "Borneo", "Greenland"],
	correctAnswer: "Greenland"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 10,
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter<=0){
			console.log("Time Up");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown, 1000);
		$("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">'+game.counter+'</span> Seconds</h2>');
		$("#start").remove();
		for(var i=0; i<questions.length; i++){
			$("#subwrapper").append('<h2>'+questions[i].question+'</h2>');
			for(var j=0; j<questions[i].answers.length; j++){
				$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
		$('#subwrapper').append('<br><br><button id="end">DONE</button>');
	},
	done: function(){
		$.each($("input[name='question-0']:checked"),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']:checked"),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']:checked"),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']:checked"),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']:checked"),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},

	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();
		$('#subwrapper').html("<h2>All Done!</h2>");
		$('#subwrapper').append("<h3>Correct Answer: "+ this.correct+ "</h3> ");
		$('#subwrapper').append("<h3>Incorrect Answer: "+ this.incorrect+ "</h3> ");
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}