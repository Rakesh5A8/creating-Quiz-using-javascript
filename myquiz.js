function check(){
    var score=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    if(q1=="18"){score++}
    if(q2=="7"){score++}
    if(q3=="70"){score++}
    if(q4=="50"){score++}
    if(q5=="ENG"){score++}
        document.write(score);
    
}