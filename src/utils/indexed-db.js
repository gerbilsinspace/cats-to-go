import idb from 'idb';

const storeName = 'cats-to-go';

export function createDB() {
  if (!('indexedDB' in window)) return;

  idb.open(storeName, 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore(storeName, { keyPath: 'id' });
        upgradeDb.transaction.objectStore(storeName)
          .createIndex('rating', 'rating', { unique: false })
        break;
      default:
    }
  });
}

export function saveData(data) {
  if (!('indexedDB' in window)) return;

  idb.open(storeName, 1).then(db => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);

    return Promise.all(data.map(item =>
      store.add(item)
    ))
      .catch(() =>
        tx.abort()
      );
  });
}

export function getData() {
  if (!('indexedDB' in window)) return;

  const dbPromise = idb.open(storeName, 1);

  return dbPromise.then(db =>
    db.transaction(storeName)
      .objectStore(storeName).getAll()
  );
}
