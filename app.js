const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

let db;

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};
dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;
  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction('products', 'readwrite')
      .objectStore('products');
    productsStore.add({
      id: 'p1',
      title: 'the first product',
      price: 1299,
      tags: ['luxury', 'expensive'],
    });
  };
};
dbRequest.onerror = function (event) {
  console.log('error');
};

storeBtn.addEventListener('click', () => {
  if (!db) {
    return;
  }

  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  productsStore.add({
    id: 'p2',
    title: 'the second product',
    price: 1239,
    tags: ['luxury', 'expensive'],
  });
});
retrBtn.addEventListener('click', () => {
  const productsStore = db
    .transaction('products', 'readwrite')
    .objectStore('products');
  const request = productsStore.get('p2');

  request.onsuccess = () => {
    console.log(request.result);
  };
});
