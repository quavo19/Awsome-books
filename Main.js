/* eslint-disable no-loop-func */
let book = [];

function CreateBook(titleValue, authorValue, id) {
  this.title = titleValue;
  this.author = authorValue;
  this.id = id;
}

const pushBook = () => {
  const titleValue = document.getElementById('Title').value;
  const authorValue = document.getElementById('Author').value;
  const id = book.length;
  const theBook = new CreateBook(titleValue, authorValue, id);
  // eslint-disable-next-line eqeqeq
  if (titleValue != '' || authorValue != '') {
    book.push(theBook);
  }
};

const bookList = document.querySelector('.books-list');
const createBook = () => {
  bookList.innerHTML = ' ';
  for (let i = 0; i < book.length; i += 1) {
    const individualBook = document.createElement('div');
    bookList.append(individualBook);
    const bookDetails = document.createElement('p');
    bookDetails.innerText = `"${book[i].title}" By ${book[i].author}`;
    individualBook.append(bookDetails);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    individualBook.append(removeBtn);
    removeBtn.id = book[i].id;
    const removeBook = () => {
      const target = removeBtn.id;
      book.splice(target, 1);

      let theId = 0;
      if (book.length > 0) {
        book.forEach((m) => {
          m.id = theId;
          theId += 1;
        });
      }
    };

    removeBtn.addEventListener('click', () => {
      book = JSON.parse(localStorage.getItem('book')) || [];
      removeBook();
      // eslint-disable-next-line no-use-before-define
      store();
      window.location.reload();
    });
  }
};
const store = () => {
  localStorage.setItem('book', JSON.stringify(book));
};
const addBtn = document.querySelector('#Add-Button');
addBtn.addEventListener('click', () => {
  pushBook();
  store();
  window.location.reload();
});

book = JSON.parse(localStorage.getItem('book'));
createBook();
