function getServerValue(url) {
  return fetch(url)
    .catch(err => showError(err))
}

Promise.all([getSeverValue(url1), getSeverValue(url1)])
  .then(([arr1, arr2]) => combine(arr1, arr2))
  .then(display);
