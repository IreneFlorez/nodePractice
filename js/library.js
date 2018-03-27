 /* global $ */

module.exports = {
      print,
      getSumProduct,
      getDate,
      getDateIn120Seconds,
      attachExclamation,
}

function print(text){
  console.log(text);
}

function getSumProduct(){
      function add(){
      var num1=document.form.text1.value;
      var num2=document.form.text2.value;
      document.getElementById("result").innerHTML=Number(num1)+Number(num2);
      }
      function divide(){
      var num1=document.form.text1.value;
      var num2=document.form.text2.value;
      document.getElementById("result").innerHTML=Number(num1)/Number(num2);
      }
      function product(){
      var num1=document.form.text1.value;
      var num2=document.form.text2.value;
      document.getElementById("result").innerHTML=Number(num1)*Number(num2);
      }
      function modulus(){
      var num1=document.form.text1.value;
      var num2=document.form.text2.value;
      document.getElementById("result").innerHTML=Number(num1)%Number(num2);
}}

function getDate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!

      var yyyy = today.getFullYear();
      if(dd<10){
          dd='0'+dd;
      }
      if(mm<10){
          mm='0'+mm;
      }
      var today = dd+'/'+mm+'/'+yyyy;
      return today;
}


function getDateIn120Seconds(date){
      var today = new Date();
      var dateIn120Seconds = today * 60 * 60;
      return dateIn120Seconds;
}

function attachExclamation(text){
      return text + "!";
}



function findMean(numbersArray){
      var length = numbersArray.length;
      var total=0;

      for (var i=0; i < length; i++) {
            total += numbersArray[i];
      }
      var mean = total / length; 
      return mean;
}

function sortNumbers(a,b){
      return a-b;
}

function findMedian(numbersArray){
    var length = numbersArray.length;
    var median = 0; 
    numbersArray.sortNumbers();
 
    if (length % 2 == 0 // is even
          ) {
             let mid = length/2;
             console.log(mid);//check
             let median = Math.round((numbersArray[mid-1]+numbersArray[mid])/2);
             //return median;
          } else { // is odd
              // middle number only
             let middle = Math.round(length/2);
             let median = numbersArray[middle-1];
             console.log(middle);//check
    }
    return median;
}
//see also https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
//see also https://byjus.com/mean-median-mode-formula
  
//document.write(today);

// <script>
// $(document).ready(function() {
//
//      // set an element
//      $("#date").val( moment().format('MMM D, YYYY') );
//
//      // set a variable
//      var today = moment().format('D MMM, YYYY');
//
// });
// </script>

//https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i
