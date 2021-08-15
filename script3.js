function readMore(link){
    var regex = /\bread\b/;
    var article = link.parentNode;
    if(regex.test(article.className)){
      article.className = article.className.replace(regex, '');
    }else{
      article.className += ' read';
  }
}