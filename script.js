var elems = document.querySelectorAll('.elem');
var comElem = document.querySelectorAll('.comelem')
var fullElemBtn = document.querySelectorAll('.back-btn')
var fullElem = document.querySelector('.fullElem')

elems.forEach(function (elem) {
    elem.addEventListener('click', function () {
        // console.log(elem.id);
        comElem[elem.id].style.display = 'block';
        fullElem.style.display = 'block';
        fullElemBtn.forEach(function (btns) {
            btns.addEventListener('click', function () {
                // console.log('clicked')
                comElem[elem.id].style.display = 'none';
                fullElem.style.display = 'none';
            })
        })
    })
})

var todoSubmit = document.querySelector(".task-add");
var taskinput = document.querySelector('.todo-details form input');
var textAreaInput = document.querySelector('.todo-details form textarea');
var taskImp = document.querySelector('.todo-details form .task-imp input');

var currTask = [];
if(localStorage.getItem('currTask')){
    var alltask = localStorage.getItem(JSON.parse('currTask'));
}
else{
    console.log("List is Empty");
}

// Preventing Default submit Nature


function rendertask() {
    var task = document.querySelector('.todolist .all-tasks');
    var sum = '';
    currTask.forEach(function (elem) {
        sum += `<div class="task">
        <h2>${elem.taskName}<span class='${elem.isImp}'>imp</span></h2>
        <button class="task-complete">Mark as Complete</button>
        </div>`
    })
    
    task.innerHTML = sum;
}
todoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    currTask.push({
        taskName:taskinput.value,
        taskDetail:textAreaInput.value,
        isImp:taskImp.checked,
    })
    localStorage.setItem('task', JSON.stringify(currTask))
    taskinput.value="";
    textAreaInput.value="";
    taskImp.checked=false;
    
    console.log(currTask);
    rendertask();
})
