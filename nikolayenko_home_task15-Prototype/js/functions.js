function displayListPeople() {
  let people = `<div class="people">
        ${getListPeople()}
    </div>
    <button type="button" class="btn btn-warning btn-add-people">Add people</button>`;
  wrapper.insertAdjacentHTML("afterbegin", people);

  let wrapPeople = document.querySelector(".people");

  wrapPeople.addEventListener("click", (event) => {
    
    const editButtons = document.querySelectorAll(".btn-edit");
    const deleteButtons = document.querySelectorAll(".btn-delete");
    for (const button of editButtons) {
      button.addEventListener("click", (event) => {
        const id = +event.target.parentNode.dataset.id;
        console.log(`People ID: ${id}`);
        console.log(JSON.parse(localStorage.getItem("people")));

        const people = JSON.parse(localStorage.getItem("people")).find(
          (person) => person.id === id
        );

        const form = document.querySelector(".form-edit-people");
        if (form) {
          form.remove();
        } else {
          wrapper.insertAdjacentHTML(
            "beforeend",
            getFormEditPeople(people.id, people.name, people.age, people.car)
          );
          document
            .querySelector(".form-edit-people")
            .addEventListener("submit", handlerFormEditPeople);
        }
      });
    }
    for (const button of deleteButtons) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target;
        const confirmation = confirm("Вы действительно хотите удалить?");
        const id = +target.closest("li").getAttribute("data-id");
        target.closest("li").remove();

        const people = listPeople.find((people) => people.id === id);
        const indexOf = listPeople.findIndex((people) => people.id === id);
        if (people && confirmation) {
          listPeople.splice(indexOf, 1);
          // console.log(this.parentNode);
          target.closest("li").remove();
          updateStorage();
          //     this.innerHTML = "";
          // wrapPeople?.removeEventListener("click", listener, false);
        } else {
          console.log(this);
          console.log("Передумал");
          // displayListPeople();
        }
        console.log("Удаляем");
      });
    }
  });
  toggleFormAddPeople();
}

function displayListCar() {
  let car = `<div class="car">
        ${getListCar()}
    </div>
    <button type="button" class="btn btn-warning btn-add-car">Add car</button>`;
  wrapper.insertAdjacentHTML("afterbegin", car);

  let wrapCar = document.querySelector(".car");

  wrapCar.addEventListener("click", (event) => {
    const editButtons = document.querySelectorAll(".btn-edit");
    const deleteButtons = document.querySelectorAll(".btn-delete");
    for (const button of editButtons) {
      button.addEventListener("click", (event) => {
        const id = +event.target.parentNode.dataset.id;
        console.log(`Car ID: ${id}`);
        console.log(JSON.parse(localStorage.getItem("car")));

        const car = JSON.parse(localStorage.getItem("car")).find(
          (car) => car.id === id
        );

        const form = document.querySelector(".form-edit-car");
        if (form) {
          form.remove();
        } else {
          wrapper.insertAdjacentHTML(
            "beforeend",
            getFormEditCar(car?.id, car?.model, car?.price)
          );
          document
            .querySelector(".form-edit-car")
            .addEventListener("submit", handlerFormEditCar);
        }
      });
    }
    for (const button of deleteButtons) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const target = event.target;
        const confirmation = confirm("Вы действительно хотите удалить?");
        const id = +target.closest("li").getAttribute("data-id");
        target.closest("li").remove();

        const people = listCar.find((car) => car.id === id);
        const indexOf = listCar.findIndex((car) => car.id === id);
        if (car && (confirmation===true)) {
          listCar.splice(indexOf, 1);
          target.closest("li").remove();
          updateStorage();
        } else {
          console.log(this);
          console.log("Передумал");
        }
        console.log("Удаляем");
      });
    }
  });
  toggleFormAddCar();
}

function getListPeople() {
  let list = `<ul class="list-group">`;
  listPeople.forEach((people) => {
    list += `<li class="list-group-item" data-id="${people.id}">
            <p>Name: ${people?.name}</p>
            <p>Age: ${people?.age}</p>
            <p>Car: ${people?.car?.model}</p>
            <button type="button" class="btn btn-warning btn-edit">Edit</button>
            <button type="button" class="btn btn-danger btn-delete">Delete</button>
        </li>`;
  });
  list += "</ul>";
  return list;
}
function getListCar() {
  let list = `<ul class="list-group">`;
  listCar.forEach((car) => {
    list += `<li class="list-group-item" data-id="${car.id}">
            <p>Model: ${car?.model}</p>
            <p>Price: ${car?.price}</p>
            <button type="button" class="btn btn-warning btn-edit">Edit</button>
            <button type="button" class="btn btn-danger btn-delete">Delete</button>
        </li>`;
  });
  list += "</ul>";
  return list;
}

function getFormAddPeople(name = "", age = "", carId = null) {
  let form = `<form class="form-add-people">
        <div class="mb-3">
            <input type="text" name="name" value="${name}" class="form-control" placeholder="Name">
        </div>
        <div class="mb-3">
            <input type="text" name="age" value="${age}" class="form-control" placeholder="Age">
        </div>
        <div class="mb-3">
            <select class="form-select" name="car">
                <option selected>-</option>
                ${getOptionsCar(carId)}
            </select>
        </div>
        <button type="submit" class="btn btn-info">Add</button>
    </form>`;
  return form;
}
function getFormAddCar(model = "", price = "") {
  let form = `<form class="form-add-car">
        <div class="mb-3">
            <input type="text" name="model" value="${model}" class="form-control" placeholder="model">
        </div>
        <div class="mb-3">
            <input type="text" name="price" value="${price}" class="form-control" placeholder="price">
        </div>
        <button type="submit" class="btn btn-info">Add car</button>
    </form>`;
  return form;
}

function getFormEditPeople(id = null, name = "", age = "", car = null) {
  let form = `<form class="form-edit-people">
        <div><input type="hidden" name="id" value="${id}"></div>
        <div class="mb-3">
            <input type="text" name="name" value="${name}" class="form-control" placeholder="Name">
        </div>
        <div class="mb-3">
            <input type="text" name="age" value="${age}" class="form-control" placeholder="Age">
        </div>
        <div class="mb-3">
            <select class="form-select" name="car">
                <option>-</option>
                ${getOptionsCar(car?.id)}
            </select>
        </div>
        <button type="submit" class="btn btn-info">Edit</button>
    </form>`;
  return form;
}
function getFormEditCar(id = null, model = "", price = "") {
  let form = `<form class="form-edit-car">
        <div><input type="hidden" name="id" value="${id}"></div>
        <div class="mb-3">
            <input type="text" name="model" value="${model}" class="form-control" placeholder="model">
        </div>
        <div class="mb-3">
            <input type="text" name="price" value="${price}" class="form-control" placeholder="price">
        </div>
        <button type="submit" class="btn btn-info">Edit</button>
    </form>`;
  return form;
}

function getOptionsCar(carId) {
  let options = "";
  listCar.forEach((car) => {
    options += `<option ${car.id === carId ? "selected" : ""} value="${
      car.id
    }">${car.model}</option>`;
  });
  return options;
}

function toggleFormAddPeople() {
  document
    .querySelector(".btn-add-people")
    .addEventListener("click", function () {
      const form = document.querySelector(".form-add-people");
      if (form) {
        form.remove();
      } else {
        wrapper.insertAdjacentHTML("beforeend", getFormAddPeople());
        document
          .querySelector(".form-add-people")
          .addEventListener("submit", handlerFormAddPeople);
      }
    });
}

function toggleFormAddCar() {
  document.querySelector(".btn-add-car").addEventListener("click", function () {
    const form = document.querySelector(".form-add-car");
    if (form) {
      form.remove();
    } else {
      wrapper.insertAdjacentHTML("beforeend", getFormAddCar());
      document
        .querySelector(".form-add-car")
        .addEventListener("submit", handlerFormAddCar);
    }
  });
}

function handlerFormAddPeople(e) {
  e.preventDefault();

  let itemPeople = new People(
    generateId(listPeople),
    this.elements.name.value,
    this.elements.age.value
  );
  let idCar = +this.elements.car.value;
  let selectCar = listCar.find((car) => car.id === idCar);
  itemPeople.setCar(selectCar);

  listPeople.push(itemPeople);

  this.remove();
  document.querySelector(".people").innerHTML = getListPeople();
  updateStorage();
}
function handlerFormAddCar(e) {
  e.preventDefault();

  let itemCar = new Car(
    generateId(listCar),
    this.elements.model.value,
    this.elements.price.value
  );
  console.dir(itemCar);
  listCar.push(itemCar);
  this.remove();
  document.querySelector(".car").innerHTML = getListCar();
  updateStorage();
}

function handlerFormEditPeople(e) {
  e.preventDefault();
  let itemPeople = new People(
    this.elements.id.value,
    this.elements.name.value,
    this.elements.age.value
  );

  let idCar = +this.elements.car.value;
  let selectCar = listCar.find((car) => car.id === idCar);
  itemPeople.setCar(selectCar);

  listPeople = listPeople.map((person) => {
    if (person.id === itemPeople.id) return itemPeople;
    else {
      return person;
    }
  });

  console.log(`listPeople: ${JSON.stringify(listPeople)}`);

  this.remove();
  document.querySelector(".people").innerHTML = getListPeople();
  updateStorage();
}
function handlerFormEditCar(e) {
  e.preventDefault();
  debugger;
  let itemCar = new Car(
    +this.elements.id.value,
    this.elements.model.value,
    this.elements.price.value
  );
  console.log(`ItemCar: ${itemCar.model}`);
  listCar = listCar.map((car) => {
    debugger;
    if (car.id === +itemCar.id) return itemCar;
    else {
      return car;
    }
  });

  updateStorage();
  document.querySelector(".car").innerHTML = getListCar();
  this.remove();
}

function generateId(list) {
  let id = 0;
  if (list.length > 0) {
    id = list[list.length - 1].id + 1;
  }
  return id;
}

function updateStorage() {
  localStorage.setItem("people", JSON.stringify(listPeople)),
    localStorage.setItem("car", JSON.stringify(listCar));
}


// 1. Редагування людей
// 2. Видалення з підтвердженням
// 3. Переключення вкладок люди-авто
// 4. Для авто все аналогічно як для людей, без присвоєння авто
