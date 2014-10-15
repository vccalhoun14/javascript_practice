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

var author = document.getElementById('author1').value;
var title = document.getElementById('title1').value;
var subtitle = document.getElementById('subtitle1').value;

var blogpost1 = new Post(author, title, subtitle);
var blogpost2 = new Post(author, title, subtitle);

alert(blogpost.createByline());


window.onload = function () {
  document.getElementById('author_1').textContent = localStorage.getItem('author1');
  document.getElementById('title_1').textContent = localStorage.getItem('title1');
  document.getElementById('subtitle_1').textContent = localStorage.getItem('subtitle1');
}

if (window.localStorage) {
  var txtAuthor1 = document.getElementById('author1');
  var txtTitle1 = document.getElementById('title1');
  var txtSubtitle1 = document.getElementById('subtitle1');

  txtAuthor1.value = localStorage.getItem('author1'); //Makes it so that text typed
  txtTitle1.value = localStorage.getItem('title1');   //still loads after refresh of page
  txtSubtitle1.value = localStorage.getItem('subtitle1');

  document.getElementById('submit1').onclick = function() {
    localStorage.setItem('author1', txtAuthor1.value);
    localStorage.setItem('title1', txtTitle1.value);
    localStorage.setItem('subtitle1', txtSubtitle1.value);

    document.getElementById('author_1').textContent = localStorage.getItem('author1');
    document.getElementById('title_1').textContent = localStorage.getItem('title1');
    document.getElementById('subtitle_1').textContent = localStorage.getItem('subtitle1');

    return false;
  }
}
