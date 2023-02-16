let questions = [
                {"question":"je ... crepe",
                 "answer-1":"aimons",
                 "answer-2":"aimez",
                 "answer-3":"aime",
                 "answer-4":"aiment",
                 "right-answer":3,
                },


                {"question":"tu ... seul?",
                 "answer-1":"jouez",
                 "answer-2":"joue",
                 "answer-3":"joues",
                 "answer-4":"jouent",
                 "right-answer":3,
                },


                {"question":"elle ... pour nous",
                 "answer-1":"chantes",
                 "answer-2":"chante",
                 "answer-3":"chantez",
                 "answer-4":"chantons",
                 "right-answer":2,
                },


                {"question":"elles ... se maquiller",
                "answer-1":"aimons",
                "answer-2":"aimez",
                "answer-3":"aime",
                "answer-4":"aiment",
                "right-answer":4,
               },


               {"question":"nous ... l`ecole",
                 "answer-1":"aimons",
                 "answer-2":"aimez",
                 "answer-3":"aime",
                 "answer-4":"aiment",
                 "right-answer":1,
                },


                {"question":"c`est qoui vous ... ?",
                 "answer-1":"jouent",
                 "answer-2":"joues",
                 "answer-3":"jouez",
                 "answer-4":"jouons",
                 "right-answer":3,
                },


                {"question":"C`est quoi tu ... ?",
                 "answer-1":"manger",
                 "answer-2":"manges",
                 "answer-3":"mange",
                 "answer-4":"mangons",
                 "right-answer":2,
                },


                {"question":"vous ... le sport?",
                 "answer-1":"adores",
                 "answer-2":"adore",
                 "answer-3":"adorons",
                 "answer-4":"adorez",
                 "right-answer":4,
                },


                {"question":"ils ... crepe!",
                 "answer-1":"detestez",
                 "answer-2":"detestent",
                 "answer-3":"deteste",
                 "answer-4":"detestons",
                 "right-answer":2,
                },


                {"question":"tu ... l`ecole?",
                 "answer-1":"aimes",
                 "answer-2":"aimez",
                 "answer-3":"aime",
                 "answer-4":"aiment",
                 "right-answer":1,
                },

];

let currentquestion = 0;

let correctanswers = 0;

function init(){

document.getElementById('all-questions').innerHTML = questions.length;



showquestion();

}





function showquestion(){
    let localquestion = questions[currentquestion];

    if(currentquestion >= questions.length){
        /*document.getElementById('content').innerHTML = '';*/
        if( correctanswers >= questions.length/2 ){
        document.getElementById('card-head').style = '';
        document.getElementById('card-body').style = 'display: none';
        document.getElementById('question-text-div').style = 'display: none';
        document.getElementById('endsatz').innerHTML = `sehr gut gemacht du hast es geschafft von ${questions.length} fragen, ${correctanswers} richtig zu beantworten`;
        }
        else{
        document.getElementById('card-head').style = '';
        document.getElementById('card-body').style = 'display: none';
        document.getElementById('question-text-div').style = 'display: none';
        document.getElementById('endsatz').innerHTML = `Ohje lern lieber noch mal bisschen und guck dir die grammatik nochmal richtig an. Von ${questions.length} fragen, hast du leider nur ${correctanswers} richtig beantworten`;
        }
        }
    else{
        let percent = (currentquestion + 1)/questions.length;
        percent = percent * 100;

        
        document.getElementById('progress-bar').innerHTML =`${percent}%`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;

    document.getElementById ('currentnum').innerHTML = currentquestion + 1;

    document.getElementById('question-text').innerHTML = localquestion['question'];
    document.getElementById('answer-1').innerHTML = localquestion['answer-1'];
    document.getElementById('answer-2').innerHTML = localquestion['answer-2'];
    document.getElementById('answer-3').innerHTML = localquestion['answer-3'];
    document.getElementById('answer-4').innerHTML = localquestion['answer-4'];
    }
}


function answer(selection){
    let localquestion = questions[currentquestion];
    let currentnum = selection.slice(-1);
    let rightanswer = "answer-"+localquestion['right-answer'];

    if(currentnum == localquestion['right-answer']){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        correctanswers ++;
    }else{
        document.getElementById(rightanswer).parentNode.classList.add('bg-success');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
    }

    document.getElementById('next-button').disabled = false;
}

function nextquestion(){
    currentquestion ++;
    removebackground();
    showquestion();
    
    document.getElementById('next-button').disabled = true;

}

function removebackground(){
    document.getElementById('answer-1').parentNode.classList.remove('bg-success');
    document.getElementById('answer-1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-2').parentNode.classList.remove('bg-success');
    document.getElementById('answer-2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-3').parentNode.classList.remove('bg-success');
    document.getElementById('answer-3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-4').parentNode.classList.remove('bg-success');
    document.getElementById('answer-4').parentNode.classList.remove('bg-danger');

    
}


function restart(){
    currentquestion = 0;
    correctanswers = 0;

    document.getElementById('card-head').style = 'display: none';
    document.getElementById('card-body').style = '' ;
    document.getElementById('question-text-div').style = '';


    init();
}