const teams = [
  { name: "Barcelona", goals: 0, played: false },
  { name: "R.Madrid", goals: 0, played: false },
  { name: "Sevilla", goals: 0, played: false },
  { name: "Glorioso R.Betis", goals: 0, played: false },
  { name: "R.Sociedad", goals: 0, played: false },
  { name: "R.Valencia", goals: 0, played: false },
  { name: "Villareal", goals: 0, played: false },
  { name: "Levante", goals: 0, played: false },
  { name: "Celta", goals: 0, played: false },
  { name: "Cadiz", goals: 0, played: false },
  { name: "Villareal", goals: 0, played: false },
  { name: "Puerto Hurraco", goals: 0, played: false },
];

const results = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5];

const team_1 = document.getElementById("team-1");
const team_2 = document.getElementById("team-2");
const team_1Score = document.getElementById("team-1-score");
const team_2Score = document.getElementById("team-2-score");
const btn = document.getElementById("button");
const results_Div = document.getElementById("resultTable");

//Funcion elegir equipo
function getRandomTeam() {
  let team1 = teams.pop();
  let result = true;
  result = checkLength(teams);
  if (!result) {
    console.error("no hay más");
  } else {
    return team1;
  }
}

//Funcion goles

function getRandomGoal(teams) {
  let result = checkLength(results);
  if (!result) {
    return;
  } else {
    let pos = Math.floor(Math.random() * results.length);
    teams.goals += results[pos];
    return results[pos];
  }
}

//Genera puntuacion
function generateMatch() {
  let team1 = getRandomTeam();
  let team2 = getRandomTeam();
  let goals1 = getRandomGoal(team1);
  let goals2 = getRandomGoal(team2);

  let result = checkLength(teams);
  if (!result) {
    return;
  } else {
    pintDate(team1, goals1, team2, goals2);
    saveMatch(team1, goals1, team2, goals2);
  }
}

//Pinta los datos
function pintDate(team1, goals1, team2, goals2) {
  team_1.textContent = team1.name;
  team_2.textContent = team2.name;
  team_1Score.textContent = goals1;
  team_2Score.textContent = goals2;
}

function saveMatch(team1, goals1, team2, goals2) {
  let nextDiv = document.createElement("tr");
  let t1 = document.createElement("td");
  t1.className = "td-team"
  t1.textContent = team1.name;
  let t1Goals = document.createElement("td");
  t1Goals.className = "tGoals"
  t1Goals.textContent = goals1;
  let t2 = document.createElement("td");
  t2.className = "td-team"
  t2.textContent = team2.name;
  let t2Goals = document.createElement("td");
  t2Goals.className = "tGoals"
  t2Goals.textContent = goals2;
  nextDiv.appendChild(t1);
  nextDiv.appendChild(t1Goals);
  nextDiv.appendChild(t2);
  nextDiv.appendChild(t2Goals);
  results_Div.appendChild(nextDiv);
}

//Comprueba si queda item
function checkLength(array) {
  if (array.length > 0) {
    return true;
  } else {
    return false;
  }
}

//Registra las jornadas


btn.addEventListener("click", generateMatch);
