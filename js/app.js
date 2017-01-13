//values for author
var authorScore1;
var authorScore2;
var authorScore3;
var author1conf;
var author2conf;
var author3conf;
//values for places
// place1-3 are booleans
var place1 = 1;
var place2 = 1;
var place3 = 1;
var place1count = 1;
var place2count = 1;
var place3count = 1;
//values for dates--only have "n" paired values if there are "n" dates mentioned in papers
var date1z;
var date2z;
var date3z;
var date1sd;
var date2sd;
var date3sd;

//values for statistics and numbers
var stats1z;
var stats2z;
var stats1sd;
var stats2sd;

//auth scores
function setAuthScore1high() {
  authorScore1 = 0.9;
    console.log("val populated" + authorScore1);
    return authorScore1;
}

function setAuthScore1low() {
  authorScore1 = 0.12;
  console.log("val populated" + authorScore1);
  return authorScore1;
}

function setAuthScore2high() {
  authorScore2 = 0.87;
  console.log("val populated" + authorScore2);
  return authorScore2;
}

function setAuthScore2low() {
  authorScore2 = 0.2;
  console.log("val populated" + authorScore2);
  return authorScore2;
}

function setAuthScore3high() {
  authorScore3 = 0.92;
  console.log("val populated" + authorScore3);
  return authorScore3;
}

function setAuthScore3low() {
  authorScore3 = 0.09;
  console.log("val populated" + authorScore3);
  return authorScore3;
}


//auth confidence
function setAuthConf1high() {
  author1conf = 0.9;
  console.log("val populated" + author1conf);
  return author1conf;
}

function setAuthConf1low() {
  author1conf = 0.12;
  console.log("val populated" + author1conf);
  return author1conf;
}

function setAuthConf2high() {
  author2conf = 0.87;
  console.log("val populated" + author2conf);
  return author2conf;
}

function setAuthConf2low() {
  author2conf = 0.2;
  console.log("val populated" + author2conf);
  return author2conf;
}

function setAuthConf3high() {
  author3conf = 0.92;
  console.log("val populated" + author3conf);
  return author3conf;
}

function setAuthConf3low() {
  author3conf = 0.09;
  console.log("val populated" + author3conf);
  return author3conf;
}



//date z vals
function datez1high() {
  date1z = 0.9;
  console.log("val populated" + date1z);
  return date1z;
}

function datez1low() {
  date1z = 0.12;
  console.log("val populated" + date1z);
  return date1z;
}

function datez2high() {
  date2z = 0.87;
  console.log("val populated" + date2z);
  return date2z;
}

function datez2low() {
  date2z = 0.2;
  console.log("val populated" + date2z);
  return date2z;
}

function datez3high() {
  date3z = 0.92;
  console.log("val populated" + date3z);
  return date3z;
}

function datez3low() {
  date3z = 0.09;
  console.log("val populated" + date3z);
  return date3z;
}


//date sd vals
function datesd1high() {
  date1sd = 0.9;
  console.log("val populated" + date1sd);
  return date1sd;
}

function datesd1low() {
  date1sd = 0.12;
  console.log("val populated" + date1sd);
  return date1sd;
}

function datesd2high() {
  date2sd = 0.87;
  console.log("val populated" + date2sd);
  return date2sd;
}

function datesd2low() {
  date2sd = 0.2;
  console.log("val populated" + date2sd);
  return date2sd;
}

function datesd3high() {
  date3sd = 0.92;
  console.log("val populated" + date3sd);
  return date3sd;
}

function datesd3low() {
  date3sd = 0.09;
  console.log("val populated" + date3sd);
  return date3sd;
}


//stat vals
function statsz1high() {
  stats1z = 0.9;
  console.log("val populated" + stats1z);
  return stats1z;
}

function statsz1low() {
  stats1z = 0.12;
  console.log("val populated" + stats1z);
  return stats1z;
}

function statsz2high() {
  stats2z = 0.87;
  console.log("val populated" + stats2z);
  return stats2z;
}

function statsz2low() {
  stats2z= 0.2;
  console.log("val populated" + stats2z);
  return stats2z;
}

function statssd1high() {
  stats1sd = 0.92;
  console.log("val populated" + stats1sd);
  return stats1sd
}

function statssd1low() {
  stats1sd = 0.09;
  console.log("val populated" + stats1sd);
  return stats1sd;
}

function statssd2high() {
  stats2sd = 0.92;
  console.log("val populated" + stats2sd);
  return stats2sd;
}

function statssd2low() {
  stats2sd = 0.09;
  console.log("val populated" + stats2sd);
  return stats2sd;
}


// function calculate(authorScore1, authorScore2, authorScore3, author1conf, author2conf, author3conf, place1, place2, place3, place1count, place2count, place3count, date1z, date2z, date3z, date1sd, date2sd, date3sd, stats1z, stats2z, stats1sd, stats2sd) {
function calculate() {
  var totconf = author1conf + author2conf + author3conf;
  var placecounttotal = place1count+place2count+place3count;
  //calculate score related to the authors scores
  var A = (authorScore1*(author1conf/totconf) + authorScore2*(author2conf/totconf) + authorScore3*(author3conf/totconf));
  //calculate score related to locations mentioned in text
  var B = place1*(place1count/placecounttotal) + place2*(place2count/placecounttotal) + (place3)*(place3count/placecounttotal);
  //calculate score based on dates listed--normalized by 2.57 because 99% confidence
  var C = (date1z+date2z+date3z)/(2.57*3);
  //calculate score based on the stats mentioned in the articles--normalized by 2.57 because 99% confidence interval
  var D = (stats1z+stats2z)/(2.57*2);

  //compare SD/confidence of the metrics presented in stats and dates
  var datesd = (date1sd+date2sd+date3sd)/3;
  var statssd = (stats1sd+stats2sd)/2;
  var sdsum = datesd + statssd;

  //calculate credibility of article--author: 10%, places: 20%, date and stats share 70% based on SD of respective measures
  var cred = (A*10) + (B*20) + (datesd/sdsum)*70*C + (statssd/sdsum)*70*D;
  console.log("cred " + cred);
  firebase.database().ref('cred').set({val: cred});
  return cred;
}


window.onload = function() {
  firebase.database().ref('cred/val').once('value').then(function(snapshot) {
    var Value = snapshot.val();
    liveCred = Value;
    document.getElementById("score").innerHTML = liveCred + ' / 60';
    if (liveCred <= 30) {
      document.getElementById("modal1").src="img/modal37.png";
      document.getElementById("modal2").src="img/modal0.png";
    }
    if (liveCred > 30) {
      document.getElementById("modal1").src="img/modal92.png";
      document.getElementById("modal2").src="img/modal67.png";
    }
    console.log("cred " + cred);
  });
}
