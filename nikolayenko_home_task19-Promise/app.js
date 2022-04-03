const btn = document.querySelector(".form");
btn.addEventListener("submit", function (e) {
  e.preventDefault();
  let validate = true;
  const fieldInput = document.querySelector(".input");
  let value = +fieldInput.value;

  if (value > 0 && value <= 100) {
    validate = true;
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => res.json())
      .then((json) => {
        const wrapper = document.querySelector('.wrapper');
        wrapper.innerHTML = `
        <div class="post">
        <h3 class="post__title">Title: ${(json).title}</h3>
        <h4 class="post__item">Post: ${(json).body}</h4>
        </div>
        `
        fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
          .then((res) => res.json())
          .catch(err => alert(err))
          .then((json) => {
            (json).forEach(element => {
              wrapper.insertAdjacentHTML('beforeend', `
              <b><p>${element.name}</p></b>
              <p>${element.body}</p>
              `)
            });
      
          });
      });
  } else {
    validate = false;
    alert("Ошибка на сервере");
  }
});
