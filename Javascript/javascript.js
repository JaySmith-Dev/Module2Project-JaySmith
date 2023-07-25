


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must enter something to add!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}








(function(){
  const buttons = document.querySelectorAll('.counterBtn')
  let count = 0

  buttons.forEach( function(button){
    button.addEventListener('click', function(){
      if(button.classList.contains('prevBtn')){
        count--
      }
      else if(button.classList.contains('nextBtn')){
        count++
      }

      const counter = document.querySelector('#counter')
      counter.textContent = count

      if(count < 0){
        counter.style.color = 'red'
      }
      else if(count > 0){
        counter.style.color = 'lightgreen'
      }
      else{
        counter.style.color = 'white'
      }
      /*body*/
    })
    //statements
  })
}) ()