// dom node
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
// let todolist = document.querySelector(".todolist")


// function
function addTodo() {
    let inputvalue = input.value;
    // let ul = document.createElement("ul");

    if (inputvalue) {
        // let ul = document.createElement("ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let text = document.createTextNode(inputvalue);
        span.appendChild(text)
        // let text = document.createTextNode(inputvalue);
        let dltbtn = document.createElement("button");
        dltbtn.textContent = "Delete";
        dltbtn.addEventListener("click", removeTodo);
        let checkboxinput = document.createElement("input");
        checkboxinput.type = "checkbox";
        checkboxinput.addEventListener("click", function(){
            span.classList.add("line");
        });
        // checkboxinput.addEventListener("click", function(){
        //     span.classList.remove("line");
        // });
        li.appendChild(checkboxinput);
        li.appendChild(span);
        li.appendChild(dltbtn);
        ul.appendChild(li);

        // todolist.appendChild(ul);
        input.value = "";
    }
    // console.log(inputvalue);
}
function showChar(e) {
    if (e.which === 13) {
        addTodo();
    }
}


function removeTodo(){
    let li = this.parentElement;
    li.remove();
}


// events
btn.addEventListener("click", addTodo);
input.addEventListener("keypress", showChar);