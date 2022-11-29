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
  book.push(theBook);
};

const bookList = document.querySelector('.books-list');
const createBook = () => {
  bookList.innerHTML = ' ';
  for (let i = 0; i < book.length; i += 1) {
    const title = document.createElement('p');
    title.innerText = book[i].title;
    bookList.append(title);

    const author = document.createElement('p');
    author.innerText = book[i].author;
    bookList.append(author);

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    bookList.append(removeBtn);
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

    const line = document.createElement('hr');
    bookList.append(line);
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

book = JSON.parse(localStorage.getItem('book')) || [];
createBook();
