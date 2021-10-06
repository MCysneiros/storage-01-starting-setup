const userId = 'u123';
const user = {
  name: 'John',
  age: 36,
  hobbies: ['swimming', 'tennis'],
};

const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});
retrBtn.addEventListener('click', () => {
  const extractedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  if (extractedId && extractedUser) {
    console.log(`Got the id ${extractedId} and the user ${extractedUser}`);
  } else {
    console.log('Could not get the id ');
  }
});
