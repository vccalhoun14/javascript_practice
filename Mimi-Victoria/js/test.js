//Reloads what is in local storage
window.onload = function () {
  document.getElementById('author_1').textContent = blogpost1.author;
  document.getElementById('title_1').textContent = blogpost1.title;
  document.getElementById('subtitle_1').textContent = blogpost1.subtitle;
}

function Post (author, title, subtitle) {
  this.author = author;
  this.title = title;
  this.subtitle = subtitle;
  this.createByline = function() {
    var today = new Date();
    var byline = this.author + " " + (today.getMonth() + 1) + "." + today.getDate() + "." + today.getFullYear();
    return byline;
  };
}

//creates variables that are connected to DOM elements
//we will pass these variables into our instances
var author = document.getElementById('author1').value;
var title = document.getElementById('title1').value;
var subtitle = document.getElementById('subtitle1').value;

//creates an instance with DOM-connected variables
var blogpost1 = new Post(author, title, subtitle);



/////////////////



//The meat of our code
if (window.localStorage) {

  //Connects the object to local storage
  blogpost1.author = localStorage.getItem('author1');
  blogpost1.title = localStorage.getItem('title1');
  blogpost1.subtitle = localStorage.getItem('subtitle1');

  //Makes the text last saved in local storage
  //load after page refresh
  var txtAuthor = document.getElementById('author1');
  var txtTitle = document.getElementById('title1');
  var txtSubtitle = document.getElementById('subtitle1');

  txtAuthor.value = localStorage.getItem('author1');
  txtTitle.value = localStorage.getItem('title1');
  txtSubtitle.value = localStorage.getItem('subtitle1');

  //What happens when we click submit
  document.getElementById('submit1').onclick = function() {
    localStorage.setItem('author1', document.getElementById('author1').value);
    localStorage.setItem('title1', document.getElementById('title1').value);
    localStorage.setItem('subtitle1', document.getElementById('subtitle1').value);

    // localStorage.setItem('author1', blogpost1.author);
    // localStorage.setItem('title1', blogpost1.title);
    // localStorage.setItem('subtitle1', blogpost1.subtitle);

    document.getElementById('author_1').textContent = localStorage.getItem('author1');
    document.getElementById('title_1').textContent = localStorage.getItem('title1');
    document.getElementById('subtitle_1').textContent = localStorage.getItem('subtitle1');

    return false;
  }
}
