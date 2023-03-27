document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //add task
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let value = document.getElementById('new-task-description').value
    let li = document.createElement('li')
    li.innerText = value
    let btn = document.createElement('button')
    btn.innerText = " x"
    btn.id = "button"
    btn.style.marginLeft = "10%";
    li.appendChild(btn)
    document.getElementById('tasks').appendChild(li)

    //delete task
    btn.addEventListener('click', (e) => {
      btn.parentElement.remove()
    })

    
    
  })
});
