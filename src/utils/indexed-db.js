import idb from 'idb';

export function createDB() {
  if (!('indexedDB' in window)) return;

  idb.open('metadata', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore('metadata', { keyPath: 'id' });
        upgradeDb.transaction.objectStore('metadata')
          .createIndex('rating', 'rating', { unique: false })
        break;
      default:
    }
  });

  idb.open('gifs', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
        upgradeDb.createObjectStore('gifs', { keyPath: 'id' });
        break;
      default:
    }
  });
}

export function saveData(storeName, data) {
  if (!('indexedDB' in window)) return;

  idb.open(storeName, 1).then(db => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);

    return Promise.all(data.map(item => {
      if (item.type === 'blob') {
        return window.fetch(item.url)
          .then(response => response.blob())
          .then(blob => {
            const txBlob = db.transaction(storeName, 'readwrite');
            const storeBlob = txBlob.objectStore(storeName);
            return storeBlob.add({
              id: item.id,
              gif: blob
            });
          });
      }

      return store.add(item);
    }))
      .catch(() => tx.abort());
  });
}

export function getData(storeName) {
  if (!('indexedDB' in window)) return;

  const dbPromise = idb.open(storeName, 1);

  return dbPromise.then(db =>
    db.transaction(storeName)
      .objectStore(storeName).getAll()
  );
}
