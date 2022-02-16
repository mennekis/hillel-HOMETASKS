let listPeople = [];

let listCar = [
    new Car(1, 'BMW', 15000),
    new Car(2, 'VW', 10000)
];

const savedListPeople = localStorage.getItem('people');
if (savedListPeople) {
    listPeople = JSON.parse(savedListPeople).map((people) => Object.assign(new People(), people));
    // властивість car має бути обєктом Car
    console.log(listPeople);
}
const savedListCar = localStorage.getItem('car');