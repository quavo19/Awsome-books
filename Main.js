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
  book = JSON.parse(localStorage.getItem('book')) || [];

  for (let i = 0; i < book.length; i += 1) {
    const individualBook = document.createElement('div');
    if (book[i].id % 2 === 0) {
      individualBook.id = 'even';
    } else {
      individualBook.id = 'odd';
    }
    bookList.append(individualBook);
    const bookDetails = document.createElement('p');
    bookDetails.innerText = `"${book[i].title}" By ${book[i].author}`;
    individualBook.append(bookDetails);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    if (book[i].id % 2 === 0) {
      removeBtn.classList.add('even');
    } else {
      removeBtn.classList.add('odd');
    }
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

book = JSON.parse(localStorage.getItem('book')) || [];
createBook();

const homePage = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === false) {
    addNewBook.classList.add('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === false) {
    contact.classList.add('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === true) {
    bookDisplay.classList.remove('vanish');
  }
};

homePage();

const contactArea = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === false) {
    addNewBook.classList.add('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === true) {
    contact.classList.remove('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === false) {
    bookDisplay.classList.add('vanish');
  }
};

const addBookkkkk = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === true) {
    addNewBook.classList.remove('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === false) {
    contact.classList.add('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === false) {
    bookDisplay.classList.add('vanish');
  }
};

const toHome = document.querySelector('.home');
toHome.addEventListener('click', () => {
  homePage();
});

const Home = document.querySelector('.Home');
Home.addEventListener('click', () => {
  homePage();
});

const toAddNew = document.querySelector('.add-new');
toAddNew.addEventListener('click', () => {
  addBookkkkk();
});

const toContact = document.querySelector('.contact-link');
toContact.addEventListener('click', () => {
  contactArea();
});

const tolist = document.querySelector('.list');
tolist.addEventListener('click', () => {
  homePage();
});
