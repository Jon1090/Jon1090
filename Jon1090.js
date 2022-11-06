/*
create projects
add task to project
projects need:
be able to create task in project with:
    title
    description
    due date
    priority
    notes
    checklist
    
    */
    let taskClassList = [];
    let taskCounter = 1;
    
    function newTask() {
        let taskContainer = document.createElement("div");
        taskContainer.innerText = "Due Date: ";
        taskContainer.setAttribute("class", "taskContainer");
    
        let taskNameBox = document.createElement("input");
        taskNameBox.setAttribute("type", "text");
        taskNameBox.setAttribute("id", "projectName");
        taskNameBox.setAttribute("placeholder", "Task");
        let taskDate = document.createElement("input");
        taskDate.setAttribute("id", "taskDate");
        taskDate.setAttribute("type", "date");
    
        let addButton = document.createElement("button");
        addButton.innerText = "Confirm";
        addButton.addEventListener("click", function () {
            if (!document.getElementById("projectName").value){
                alert("This task is empty!")
                return;
            }
            publishTask();
        });
    
        let clearButton = document.createElement("button");
        clearButton.addEventListener("click", function () {
            this.parentElement.remove();
        }) 
        clearButton.innerText = "Cancel";
    
        document.querySelector(".pendingProject").appendChild(taskContainer);
        taskContainer.appendChild(taskDate);
        taskContainer.appendChild(taskNameBox);
        taskContainer.appendChild(addButton);
        taskContainer.appendChild(clearButton);
    }
    
    //add sub tasks to tasks that can be expanded and minimized. 
    //ability to edit tasks
    function publishTask() {
        let newTask = document.createElement("div");
        newTask.innerText = "Due Date: " + document.getElementById("taskDate").value + " " + document.getElementById("projectName").value;
        taskClassList.push("task" + taskCounter);
        taskCounter++;
        let newTaskClass = taskClassList[(taskClassList.length - 1)]
        newTask.setAttribute("class", newTaskClass);
        document.querySelector(".projectList").appendChild(newTask);
    
    
    
        let completedButton = document.createElement("button");
        completedButton.addEventListener("click", function () {
           this.parentElement.style.color = "green";
           newSubTaskButton.remove();
           this.remove();
        }) 
        completedButton.innerText = "Task Completed";
        document.querySelector("." + newTaskClass).appendChild(completedButton);
        
        let clearButton = document.createElement("button");
        clearButton.addEventListener("click", function () {
            document.querySelector("." + newTaskClass).remove();
        }) 
        clearButton.innerText = "Remove Task";
        document.querySelector("." + newTaskClass).appendChild(clearButton);
    
        let newSubTaskButton = document.createElement("button");
        newSubTaskButton.addEventListener("click", function () {
            newSubTask(newTaskClass);
        });
        newSubTaskButton.innerText = "Add a sub task";
        document.querySelector("." + newTaskClass).appendChild(clearButton);
        document.querySelector("." + newTaskClass).append(newSubTaskButton);
        document.querySelector(".taskContainer").remove();
    
        
    }
    
    
    function newSubTask(newTaskClass) {
        let subTaskContainer = document.createElement("div");
        subTaskContainer.innerText = "Sub Task:";
        subTaskContainer.setAttribute("class", "subTaskContainer");
    
        let subTaskNameBox = document.createElement("input");
        subTaskNameBox.setAttribute("type", "text");
        subTaskNameBox.setAttribute("id", "subTaskName");
    
        let addButton = document.createElement("button");
        addButton.innerText = "Confirm";
        addButton.addEventListener("click", function () {
            if (!document.getElementById("subTaskName").value){
                alert("This sub task is empty!")
                return;
            }
            publishSubTask(newTaskClass, subTaskNameBox.value);
            subTaskContainer.remove();
            this.parentElement.remove();
        });
    
        let clearButton = document.createElement("button");
        clearButton.addEventListener("click", function () {
            this.parentElement.remove();
        }) 
        clearButton.innerText = "Cancel";
        subTaskContainer.appendChild(subTaskNameBox);
        subTaskContainer.appendChild(addButton);
        subTaskContainer.appendChild(clearButton);
        document.querySelector("." + newTaskClass).appendChild(subTaskContainer);
    }
    
    
    function publishSubTask(newTaskClass, subTaskNameBoxValue) {
        let publishedSubTask = document.createElement("div");
        publishedSubTask.setAttribute("class", "subTask");
        publishedSubTask.innerText = subTaskNameBoxValue;
        document.querySelector("." + newTaskClass).appendChild(publishedSubTask);
        let completedButton = document.createElement("button");
        completedButton.innerText = "Sub Task Completed";
        publishedSubTask.appendChild(completedButton);
        completedButton.addEventListener("click", function () {
           this.parentElement.remove(); 
        }) 
        
    }