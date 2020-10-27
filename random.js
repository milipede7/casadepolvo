//declaring Espanol Question answers
//question one responses
let eQ1_1;let eQ1_2;let eQ1_3;let eQ1_4;let eQ1_5;
//q2
let eQ2_1;let eQ2_2;let eQ2_3;let eQ2_4;let eQ2_5;
//q3
let eQ3_1;let eQ3_2;let eQ3_3;let eQ3_4;let eQ3_5;


//accessing the user input by formdata
function formdata(){

//div communication
//question 1
  let eString1_1 = document.getElementById("eQ1_1").value;
  let eString1_2 = document.getElementById("eQ1_2").value;
  let eString1_3 = document.getElementById("eQ1_3").value;
  // let eString1_4 = document.getElementById("eQ1_4").value;
  // let eString1_5 = document.getElementById("eQ1_5").value;
//question 2
  let eString2_1 = document.getElementById("eQ2_1").value;
  let eString2_2 = document.getElementById("eQ2_2").value;
  let eString2_3 = document.getElementById("eQ2_3").value;
  // let eString2_4 = document.getElementById("eQ2_4").value;
  // let eString2_5 = document.getElementById("eQ2_5").value;
//question 3
  let eString3_1 = document.getElementById("eQ3_1").value;
  let eString3_2 = document.getElementById("eQ3_2").value;
  let eString3_3 = document.getElementById("eQ3_3").value;
  // let eString3_4 = document.getElementById("eQ3_4").value;
  // let eString3_5 = document.getElementById("eQ3_5").value;

//define the variable type
//question 1
  eQ1_1 = String(eString1_1);
  eQ1_2 = String(eString1_2);
  eQ1_3 = String(eString1_3);
  // eQ1_4 = String(eString1_4);
  // eQ1_5 = String(eString1_5);
//question 2
  eQ2_1 = String(eString2_1);
  eQ2_2 = String(eString2_2);
  eQ2_3 = String(eString2_3);
  // eQ2_4 = String(eString2_4);
  // eQ2_5 = String(eString2_5);
//question 3
  eQ3_1 = String(eString3_1);
  eQ3_2 = String(eString3_2);
  eQ3_3 = String(eString3_3);
  // eQ3_4 = String(eString3_4);
  // eQ3_5 = String(eString3_5);


//log for debugging
  console.log(eQ1_1);
  console.log(eQ1_2);
  console.log(eQ1_3);
  console.log(eQ1_4);
  console.log(eQ1_5);

  genPoetry()//create new function for the generation
}

function genPoetry(){

  for (var i = 0; i < 1; i++) {
//q1
  eQ1word1 = eQ1_1;
  eQ1word2 = eQ1_2;
  eQ1word3 = eQ1_3;
  // eQ1word4 = eQ1_4;
  // eQ1word5 = eQ1_5;
//q2
  eQ2word1 = eQ2_1;
  eQ2word2 = eQ2_2;
  eQ2word3 = eQ2_3;
  // eQ2word4 = eQ2_4;
  // eQ2word5 = eQ2_5;
//q3
  eQ3word1 = eQ3_1;
  eQ3word2 = eQ3_2;
  eQ3word3 = eQ3_3;
  // eQ3word4 = eQ3_4;
  // eQ3word5 = eQ3_5;

  let eQ1list = [eQ1word1, eQ1word2, eQ1word3];
  let eQ2list = [eQ2word1, eQ2word2, eQ2word3];
  let eQ3list = [eQ3word1, eQ3word2, eQ3word3];

  let random1 = Math.floor(Math.random() * eQ1list.length);
  console.log(random1, eQ1list[random1]);
  let eQ1R = eQ1list[random1];
  document.getElementById("random1").innerHTML = eQ1R;

  let random2 = Math.floor(Math.random() * eQ2list.length);
  console.log(random2, eQ2list[random2]);
  let eQ2R = eQ2list[random2];
  document.getElementById("random2").innerHTML = eQ2R;

  let random3 = Math.floor(Math.random() * eQ3list.length);
  console.log(random3, eQ3list[random3]);
  let eQ3R = eQ3list[random3];
  document.getElementById("random3").innerHTML = eQ3R;

  }


}
