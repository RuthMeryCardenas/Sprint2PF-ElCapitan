//BOTONES
  //Obteniendo los nodos "button" del HTML
  var bSprint1 = document.getElementById('button1');
  var bSprint2 = document.getElementById('button2');
  var bSprint3 = document.getElementById('button3');
  //Obteniendo los nodos "div" del HTML
  var dSP1Lessons = document.getElementById('SP1lessons');
  var dSP1Quiz = document.getElementById('SP1quiz');
  var dSP2Lessons = document.getElementById('SP2lessons');
  var dSP2Quiz = document.getElementById('SP2quiz');
  var dSP3Lessons = document.getElementById('SP3lessons');
  var dSP3Quiz = document.getElementById('SP3quiz');
  //Implementando funcion show --> muestra el Sprint seleccioado
  function show(showLesson,showQuiz) {
    showLesson.style.display = "block";
    showQuiz.style.display = "block";
  }
  function hide(hideLesson,hideQuiz) {
    hideLesson.style.display = "none";
    hideQuiz.style.display = "none";
  }
  //Implementando funcion hide --> oculta el Sprint no seleccioado
  //Implementando las funciones CallBack del evento onclick de cada button
  bSprint1.onclick = function () {
    show(dSP1Lessons,dSP1Quiz);
    hide(dSP2Lessons,dSP2Quiz);
    hide(dSP3Lessons,dSP3Quiz);
  }
  bSprint2.onclick = function () {
    show(dSP2Lessons,dSP2Quiz);
    hide(dSP1Lessons,dSP1Quiz);
    hide(dSP3Lessons,dSP3Quiz);
  }
  bSprint3.onclick = function () {
    show(dSP3Lessons,dSP3Quiz);
    hide(dSP1Lessons,dSP1Quiz);
    hide(dSP2Lessons,dSP2Quiz);
    document.getElementById('button4').style.display = "none";
  }
//CARGA DEL FORMULARIO
  //Implementando la función CallBack del evento onload
  window.onload = function () {
    bSprint2.click();
  }
