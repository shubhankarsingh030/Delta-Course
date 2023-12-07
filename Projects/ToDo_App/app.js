let todo = [];

let req = prompt("Please Enter Your Request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("---------------");
        for(let i=1; i<todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }else if(req == "add"){
        let task = prompt("Please Enter the Task you want to Add");
        todo.push(task);
        console.log("Task Added");
    }else if(req == "delete"){
        let idx = prompt("Please Enter the task Index");
        todo.splice(idx,1);
        console.log("Task deleted");
    }else{
        console.log("Wrong Request")
    }
    req = prompt("Please Enter your Request");
}