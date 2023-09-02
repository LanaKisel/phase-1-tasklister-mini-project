document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset()
      });})
  
 function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = " x";
  btn.addEventListener('click', handleDelete)
  p.textContent = ` ${todo} `;
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)

}; 
function handleDelete(e){
e.target.parentNode.remove()
}