window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const letters = "abcdefghijklmnopqrstuvwxyz";

document.querySelector("h1").addEventListener("mouseover", event => {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((letter, index) => {
        if(index < iterations){
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1/3;
  }, 30);
});


function openSection(evt, sectionName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    if (!tabcontent[i].classList.contains("nav-button")) {
      tabcontent[i].style.display = "none";
    }
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(sectionName).style.display = "block";
  if (evt) { // Only try to add 'active' class if event exists
    evt.currentTarget.className += " active";
  } else {
    // Find the button corresponding to the sectionName and add 'active' class
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i].getAttribute('onclick').includes(sectionName)) {
        tablinks[i].className += " active";
      }
    }
  }
}

function quotePlace() {
      // Read the contents of the quotes.txt file
      fetch('quotes.txt')
      .then(response => response.text())
      .then(data => {
        // Split the text into an array of quotes
        const quotes = data.split('\n');

        // Select a random quote from the array
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        // Insert the quote into the <p> element with ID "top"
        document.getElementById("top").innerHTML = randomQuote;
      })
      .catch(error => {
        console.error('Error:', error);
      });
}


// Call openSection to display the 'who-section' tab content when the page is loaded
document.addEventListener('DOMContentLoaded', () => openSection(null, 'who-section'));


