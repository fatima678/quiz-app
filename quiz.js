const questions =[{
	'que':"which of the following is markup language?",
	 'a': "HTML",
	 'b':  "PHP",
	 'c':  "C+",
	 'd': "JS",
	 'correct': "a"
},
{
	'que':"what year was Javascript launched?",
	 'a': "1996",
	 'b':  "1995",
	 'c':  "1994",
	 'd': "none of above",
	 'correct': "b"
},
{
	'que':"which of the following is markup language?",
	 'a': "HTML",
	 'b':  "PHP",
	 'c':  "C+",
	 'd': "JS",
	 'correct': "a",
}
]

let index=0;
const quesBox= document.getElementById("quesBox")
const loadQuestion = () => {
	const data = questions[index]
	console.log(data)
	quesBox.innerText =data.que;
}
//initial call
loadQuestion();