// my js will be here
var hours = ['6:00', '7:00am','8:00am','9:00am','10:00am','11:00','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm']
var seatacAirport = {
      mincust: 68,
      maxcust: 124,
      avgcups: 1.1,
      avglbs:  2.7,
      generateRandom: function() {
        return Math.floor(Math.random() * (this.maxcust - this.mincust + 1)) + this.mincust;
      },
}

for (var i = 0; i < hours.length; i++) {
  var p = document.createElement('p');
  var rand = seatacAirport.generateRandom();
  var lbs = rand * seatacAirport.avglbs;
  var cups = rand * seatacAirport.avgcups;
  var total = lbs + (cups / 20);
  p.textContent = hours[i] + ": ";
  p.textContent += total + " lbs";
  p.textContent += " [" +  rand + " customers, ";
  p.textContent += cups + " cups ";
  p.textContent += "(" + cups / 20 + " lbs), ";
  p.textContent += lbs + " lbs to-go]";
  document.body.appendChild(p);
}
