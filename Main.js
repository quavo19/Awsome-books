const Button = document.getElementById('Add-Button');
const Title = document.getElementById('Book-title');
const Author = document.getElementById('Book-author');

Button.addEventListener('click', () => {
  Title.innerHTML = 'Book';
  Author.innerHTML = 'Auther';
});
