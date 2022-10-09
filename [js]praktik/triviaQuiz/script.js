
const URL = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple';

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

async function getDataFromApi(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    show_question(data)
}
getDataFromApi(URL);

function show(data) {
    let tab = 
        `<tr>
          <th>Question</th>
          <th>Correct</th>
          <th>Incorrect</th>
          <th>Difficulty</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.results) {
        tab += `<tr> 
                    <td>${r.question} </td>
                    <td>${r.correct_answer}</td>
                    <td>${r.incorrect_answers}</td> 
                    <td>${r.difficulty}</td>          
                </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("questions").innerHTML = tab;
}

function show_question(data) {
    for (let r of data.results) {
        document.getElementById("soal").innerHTML = r.question;
        var answers = shuffle(r.incorrect_answers.concat(r.correct_answer))
        document.getElementById("answer_a").innerHTML = answers[0];
        document.getElementById("answer_b").innerHTML = answers[1];
        document.getElementById("answer_c").innerHTML = answers[2];
        document.getElementById("answer_d").innerHTML = answers[3];
    }
}

document.write(JSON.stringify(data))
// class Question {
//     constructor(soal, jawaban, kunci) {
//         this.soal = 
//     }
// }