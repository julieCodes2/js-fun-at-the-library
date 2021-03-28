function createTitle(title) {
  var modifiedTitle = "The " + title;
  return modifiedTitle;
      //bookIdea = "Storm's Awakening";
      //return "The " + bookIdea;
};
//createTitle("Dancing Sushi");


function buildMainCharacter(name, age, pronouns) {
return {name, age, pronouns};

};
//
//var reviews = []

function saveReview(title, reviews) {
  //console.log(reviews.length);
  if (reviews.includes(title)) {
    return
  } else {
    reviews.push(title);
  }

//console.log(reviews.length);
};
function calculatePageCount(bookTitle) {
return bookTitle.length * 20;
}
//Thanks to Taryn
function writeBook(title, character, genre) {
  var book = {
title: title,
mainCharacter: character,
pageCount: calculatePageCount(title),
genre: genre,
  }
  return book;
}
//break

function editBook(book) {
book.pageCount = book.pageCount * .75
return book.pageCount
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
