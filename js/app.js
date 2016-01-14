// my js will be here
var hours = ['6:00am', '7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm','9:00pm']


var seatacAirport = {
      mincust: 68,
      maxcust: 124,
      avgcups: 1.1,
      avglbs:  2.7,
      // hourlycups:[],
      // hourlyBeansnyLbs:0,
      generateRandom: function() {
        return Math.floor(Math.random() * (this.maxcust - this.mincust + 1)) + this.mincust;
      },
}

var sum = 0;
for (var i = 0; i < hours.length; i++) {
  var p = document.createElement('p'); //"<p></p>"
  var people = seatacAirport.generateRandom();
  var togo = parseFloat((people * seatacAirport.avglbs).toFixed(2));
  var cups = parseFloat((people * seatacAirport.avgcups).toFixed(2));
  var lbs = parseFloat((cups / 20).toFixed(2));
  var total = parseFloat((lbs + togo).toFixed(2));
  sum += total;

  // var pikePlaceMarket = {
  //       mincust: 14,
  //       maxcust: 55,
  //       avgcups: 1.2,
  //       avglbs:  3.7,
  //       // hourlycups:[],
  //       // hourlyBeansnyLbs:0,
  //       generateRandom: function() {
  //         return Math.floor(Math.random() * (this.maxcust - this.mincust + 1)) + this.mincust;
  //       },
  // }
  //
  // var sum = 0;
  // for (var i = 0; i < hours.length; i++) {
  //   var p = document.createElement('p'); //"<p></p>"
  //   var people = pikePlaceMarket.generateRandom();
  //   var togo = parseFloat((people * pikePlaceMarket.avglbs).toFixed(2));
  //   var cups = parseFloat((people * pikePlaceMarket.avgcups).toFixed(2));
  //   var lbs = parseFloat((cups / 20).toFixed(2));
  //   var total = parseFloat((lbs + togo).toFixed(2));
  //   sum += total;

  // p.textContent = hours[i] + ": ";
  // p.textContent += total + " lbs";
  // p.textContent += " [" +  people + " customers, ";
  // p.textContent += cups + " cups ";
  // p.textContent += "(" + lbs  + " lbs), ";
  // p.textContent += togo + " lbs to-go]";
  // document.body.appendChild(p); //<body>...var p</body>
  var time = document.createElement("th"); // "<td></td>"
  time.textContent = hours[i];  // <td>hours[i]</td>
  document.getElementById("times").appendChild(time); //<tr id="times">... var times</tr>


  var data = document.createElement("td"); // "<td></td>"
  data.textContent = total;  // <td>total</td>
  document.getElementById("data").appendChild(data); //<tr id="times">... var data</tr>
}
var total = document.createElement("th");
total.textContent = "Total";
document.getElementById("times").appendChild(total);
total = document.createElement("td");
total.textContent = sum;
document.getElementById("data").appendChild(total);



function coffeeShop(placeName, mincust, maxcust, cups, lbs) {
console.log("inside coffeeshop function");
    this.placeName = placeName;
    console.log("placeName:" + placeName);
    this.mincust = mincust;
    console.log("mincust:" + mincust);
    this.maxcust = maxcust;
    console.log("maxcust: " + maxcust);
    this.cups = cups;
    console.log("cups: " + cups);
    this.lbs = lbs;
    console.log("lbs: " + lbs);
    this.intro = function() {
    console.log('locationName is ' + this.placeName);
  }
}

var pikePlaceMarket = new coffeeShop('pikePlaceMarket', 14, 55, 1.2, 3.7);
var capitolHill = new coffeeShop('capitolHill', 32,48,3.2,0.4);
var seattlePublicLibrary = new coffeeShop('seattlePublicLibrary',49,75,2.6,0.2);
var seattleLakeUnion = new coffeeShop('seattleLakeUnion',35,88,1.3,3.7);
var seatacAirport = new coffeeShop('seatacAirport',68,124,1.1,2.7);
var websiteSales = new coffeeShop('websiteSales',3,6,0,6.7);
