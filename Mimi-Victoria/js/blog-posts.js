window.onload = function () {
  document.getElementById('author_1').textContent = localStorage.getItem('author1');
  document.getElementById('title_1').textContent = localStorage.getItem('title1');
  document.getElementById('subtitle_1').textContent = localStorage.getItem('subtitle1');
  document.getElementById('author_2').textContent = localStorage.getItem('author2');
  document.getElementById('title_2').textContent = localStorage.getItem('title2');
  document.getElementById('subtitle_2').textContent = localStorage.getItem('subtitle2');
}

if (window.localStorage) {
    var txtAuthor1 = document.getElementById('author1'); // Get form elements
    var txtTitle1 = document.getElementById('title1');
    var txtSubtitle1 = document.getElementById('subtitle1');
    var txtAuthor2 = document.getElementById('author2');
    var txtTitle2 = document.getElementById('title2');
    var txtSubtitle2 = document.getElementById('subtitle2');

    txtAuthor1.value = localStorage.getItem('author1');  // Elements populated
    txtTitle1.value = localStorage.getItem('title1');    // by localStorage data
    txtSubtitle1.value = localStorage.getItem('subtitle1');
    txtAuthor2.value = localStorage.getItem('author2');
    txtTitle2.value = localStorage.getItem('title2');
    txtSubtitle2.value = localStorage.getItem('subtitle2');

    txtAuthor1.addEventListener('click', function () {    // Data saved on keyup
      localStorage.setItem('author1', txtAuthor1.value);
    }, false);

    txtTitle1.addEventListener('click', function () {      // Data saved on keyup
      localStorage.setItem('title1', txtTitle1.value);
    }, false);

    txtSubtitle1.addEventListener('click', function () {      // Data saved on keyup
      localStorage.setItem('subtitle1', txtSubtitle1.value);
    }, false);

    txtAuthor2.addEventListener('click', function () {      // Data saved on keyup
      localStorage.setItem('author2', txtAuthor2.value);
    }, false);

    txtTitle2.addEventListener('click', function () {      // Data saved on keyup
      localStorage.setItem('title2', txtTitle2.value);
    }, false);

    txtSubtitle2.addEventListener('click', function () {      // Data saved on keyup
      localStorage.setItem('subtitle2', txtSubtitle2.value);
    }, false);
  }

document.getElementById('submit').addEventListener('click', function () {
  localStorage.setItem('author1', txtAuthor1.value);
  localStorage.setItem('title1', txtTitle1.value);
  localStorage.setItem('subtitle1', txtSubtitle1.value);
}, false);

document.getElementById('submit1').onclick = function(){
  document.getElementById('author_1').textContent = localStorage.getItem('author1');
  document.getElementById('title_1').textContent = localStorage.getItem('title1');
  document.getElementById('subtitle_1').textContent = localStorage.getItem('subtitle1');
  return false;
};


document.getElementById('submit2').onclick = function(){
  // function Post (author, title, subtitle) {
  //   this.author = author;
  //   this.title = title;
  //   this.subtitle = subtitle;
  // }

  // var author = document.getElementById('author2').value;
  // var title = document.getElementById('title2').value;
  // var subtitle = document.getElementById('subtitle2').value;

  // var blogpost2 = new Post(author, title, subtitle);

  document.getElementById('author_2').textContent = localStorage.getItem('author2');
  document.getElementById('title_2').textContent = localStorage.getItem('title2');
  document.getElementById('subtitle_2').textContent = localStorage.getItem('subtitle2');

  // document.getElementById('author_2').textContent = blogpost2.author;
  // document.getElementById('title_2').textContent = blogpost2.title;
  // document.getElementById('subtitle_2').textContent = blogpost2.subtitle;

  return false;
};
