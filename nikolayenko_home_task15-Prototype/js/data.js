let listPeople = [];

let listCar = [];

const savedListPeople = localStorage.getItem("people");
if (savedListPeople) {
  listPeople = JSON.parse(savedListPeople).map((people) =>
    Object.assign(new People(), people)
  );
  console.log(listPeople);
}
const savedListCar = localStorage.getItem("car");
if (savedListCar) {
  listCar = JSON.parse(savedListCar).map((car) =>
    Object.assign(new Car(), car)
  );
}
