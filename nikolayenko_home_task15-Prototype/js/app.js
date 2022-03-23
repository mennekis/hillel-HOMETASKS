let wrapper = document.querySelector('.wrapper');
 

displayListPeople();


let container = document.querySelector('.container')
container.addEventListener('click',(e)=>{

    let target = e.target;
    if( target.classList.contains('btn-people')){

    wrapper.innerHTML = '';
    displayListPeople();
    console.log(e.target);
    } if(target.classList.contains('btn-car')){
        wrapper.innerHTML = '';
        displayListCar();
        console.log(e.target);
    }
}
)
