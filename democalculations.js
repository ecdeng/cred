<!DOCTYPE html>
<html>
<body>

<p id="demo">Display the result here.</p>

<script>
//values for author
var authorScore1;
var authorScore2;
var authorScore3;
var author1conf;
var author2conf;
var author3conf;
var totconf = author1conf + author2conf + author3conf;
//values for places
// place1-3 are booleans
var place1;
var place2;
var place3;
var place1count;
var place2count;
var place3count;
var placecounttotal = place1count+place2count+place3count;
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
</script>

</body>
</html>
