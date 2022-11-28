const book = [];
function CreateBook(titleValue, authorValue) {
  this.title = titleValue;
  this.author = authorValue;
}
const pushBook = () => {
  const titleValue = document.getElementById('Title').value;
  const authorValue = document.getElementById('Author').value;
  const theBook = new CreateBook(titleValue, authorValue);
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

    const line = document.createElement('hr');
    bookList.append(line);
  }
};
const addBtn = document.querySelector('#Add-Button');
addBtn.addEventListener('click', () => {
  pushBook();
  createBook();
});
