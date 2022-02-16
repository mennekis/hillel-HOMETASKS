function displayListPeople() {
    let people = `<div class="people">
        ${getListPeople()}
    </div>
    <button type="button" class="btn btn-warning btn-add-people">Add people</button>`;
    wrapper.insertAdjacentHTML('afterbegin', people);

    const editButtons = document.querySelectorAll('.btn-edit')
    console.log(editButtons);

    for (const button of editButtons) {

        button.addEventListener('click', event => {
            const id = +event.target.parentNode.dataset.id;
            console.log(`People ID: ${id}`,);
            console.log(JSON.parse(localStorage.getItem('people')));

            const people = JSON.parse(localStorage.getItem('people'))
                .find(person => person.id === id);

            console.log(people);

            const form = document.querySelector('.form-edit-people');
            if (form) {
                form.remove();
            } else {
                wrapper.insertAdjacentHTML('beforeend', getFormEditPeople(people.id, people.name, people.age, People.carId));
                document.querySelector('.form-edit-people').addEventListener('submit', handlerFormEditPeople);
            };
        })
    }

    toggleFormAddPeople();
}

function getListPeople() {
    let list = `<ul class="list-group">`;
    listPeople.forEach((people) => {
        list += `<li class="list-group-item" data-id="${people.id}">
            <p>Name: ${people.name}</p>
            <p>Age: ${people.age}</p>
            <p>Car: ${people.car.model}</p>
            <button type="button" class="btn btn-warning btn-edit">Edit</button>
        </li>`;
    });
    list += '</ul>';
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

function getFormEditPeople(id = null, name = "", age = "", carId = null) {
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
                <option selected>-</option>
                ${getOptionsCar(carId)}
            </select>
        </div>
        <button type="submit" class="btn btn-info">Edit</button>
    </form>`;
    return form;
}

function getOptionsCar(carId) {
    let options = '';
    listCar.forEach(car => {
        options += `<option value="${car.id}">${car.model}</option>`
    });
    return options;
}

function toggleFormAddPeople() {
    document.querySelector('.btn-add-people').addEventListener('click', function() {
        const form = document.querySelector('.form-add-people');
        if (form) {
            form.remove();
        } else {
            wrapper.insertAdjacentHTML('beforeend', getFormAddPeople());
            document.querySelector('.form-add-people').addEventListener('submit', handlerFormAddPeople);
        };
    });
}

function handlerFormAddPeople(e) {
    e.preventDefault();

    let itemPeople = new People(generateId(listPeople), this.elements.name.value, this.elements.age.value);
    let idCar = +this.elements.car.value;
    let selectCar = listCar.find(car => car.id === idCar);
    itemPeople.setCar(selectCar);

    listPeople.push(itemPeople);

    this.remove();
    document.querySelector('.people').innerHTML = getListPeople();
    updateStorage();
}

function handlerFormEditPeople(e) {
    e.preventDefault();

    let itemPeople = new People(this.elements.id.value, this.elements.name.value, this.elements.age.value);
    console.log(`ItemPeople: ${itemPeople}`);

    let idCar = +this.elements.car.value;
    let selectCar = listCar.find(car => car.id === idCar);
    itemPeople.setCar(selectCar);

    listPeople = listPeople.map(person => { 
        if (person.id === itemPeople.id)
            return itemPeople;
        else { 
            return person;
        }
    })

    console.log(`listPeople: ${JSON.stringify(listPeople)}`);

    this.remove();
    document.querySelector('.people').innerHTML = getListPeople();
    updateStorage();
}

function generateId(list) {
    let id = 0;
    if (list.length > 0) {
        id = list[list.length - 1].id + 1;
    }
    return id;
}

function updateStorage() {
    localStorage.setItem('people', JSON.stringify(listPeople));
}

// 1. Редагування людей 
// 2. Видалення з підтвердженням
// 3. Переключення вкладок люди-авто
// 4. Для авто все аналогічно як для людей, без присвоєння авто