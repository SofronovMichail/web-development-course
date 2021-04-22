window.onload = function () {
  // состояние приложения: данные
  var listingElements = ['apple', 'orange'];
  var storeElements = [];

  // логика JS, не связана с DOM
  // данная функция работает только с состоянием
  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }
  function addToListingElements(element) {
    var elementPosition = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.push(element);
      storeElements.splice(elementPosition, 1);
    }
  }
  function deleteElements(element) {
    var elementPosition1 = listingElements.indexOf(element);
    var elementPosition2 = storeElements.indexOf(element);
    if (elementPosition > -1) {
      listingElements.splice(elementPosition, 1);
      storeElements.splice(elementPosition, 1);
    }
  }

  // updateUI берет данные из массивов и вставляет в DOM
  function updateUI() {
    var storeSelect = document.querySelector('.store-select');
    var listingSelect = document.querySelector('.listing-select');
    storeSelect.innerHTML = '';
    listingSelect.innerHTML = '';

    // вставка элементов из Listing
    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    // вставка элементов из Store
    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement('option');
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  // событие для кнопки "Add to store"
  var addListingButton = document.querySelector('#add-listing-button');
  addListingButton.onclick = function () {
    var selectedOptionListing = document.querySelector(
      '.listing-select option:checked'
    );
    addToStoreElements(selectedOptionListing.innerText);
    updateUI();
  };
  // событие для кнопки "Add to store"
  var addStoreButton = document.querySelector('#add-store-button');
  addStoreButton.onclick = function () {
    var selectedOptionStore = document.querySelector(
      '.store-select option:checked'
    );
    addToListingElements(selectedOptionStore.innerText);
    updateUI();
  };
  // событие для кнопки "Delete element"
  var deleteButton = document.querySelector('#add-store-button');
  addStoreButton.onclick = function () {
    var selectedOptionStore = document.querySelector(
      '.store-select option:checked'
    );
    var selectedOptionListing = document.querySelector(
      '.listing-select option:checked'
    );
    deleteElements(selectedOptionStore.innerText);
    deleteElements(selectedOptionListing.innerText);
    updateUI();
  };

  // запускаем начальное обновление интерфейса
  // для первоначального вывода данных из состояния в UI
  updateUI();
};
