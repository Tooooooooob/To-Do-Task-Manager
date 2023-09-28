'use strict';
// const questionsRelatedToTask = function(){
//     let taskTitle = prompt('What is the title of the TASK?');
//     let taskDescription = prompt('What is the Description of the task?');
//     let taskDue = prompt('when is the task due? (Enter a Date and Time)');
//     logging(taskTitle,taskDescription,taskDue);
// } 
// console.log('Do you want to create a task? (Hit ENTER for YES)\n')
// document.addEventListener('keydown' , function answerTOInitialQuestion(event){
//  let keyPressed = event.key;
//  if(keyPressed == 'Enter') questionsRelatedToTask();
// })

// const logging = function(taskTitle,taskDescription,taskDue){ 
// document.querySelector('.title').textContent = taskTitle;
// document.querySelector('.description').textContent = taskDescription;
// document.querySelector('.deadline').textContent = taskDue;  
// };

// document.querySelector('#on-going').addEventListener('click', function(){
//     document.querySelector('.card').style.backgroundColor = '#F0F0F0'
// })
// document.querySelector('#completed').addEventListener('click', function(){
//     document.querySelector('.card').style.backgroundColor = 'limegreen'
// })

document.querySelector('.add-task').addEventListener('click', function(){
    document.querySelector('.form').style.display = 'flex'
    document.querySelector('.add-task').style.display = 'none';
})