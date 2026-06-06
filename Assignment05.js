let btn = document.getElementById('btn');
let error = document.getElementById('error');

btn.addEventListener("click", () => {

    let list = document.getElementById('list');
    let input = document.getElementById('tsk');
    let tsk = input.value.trim();

    if (tsk.length === 0) {
        error.textContent = "Enter the Valid Input";
        return;
    } else {
        error.textContent = "";
    }

    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let status = document.createElement('p');
    status.style.textAlign = "center";

    checkbox.addEventListener("change", () => {

    if (checkbox.checked) {
        status.textContent = "Task marked as completed.";
    } else {
        status.textContent = "Task marked as incomplete.";
    }
    status.style.color = "green";
    status.style.textAlign = "center";
    status.style.fontSize = "20px";
    status.style.display = "block"; 
    setTimeout(() => {
        status.style.display = "none";
    }, 2000);

});

    let del = document.createElement('button');
    del.textContent = "Delete";

    let deleteMsg = document.createElement('p');
    deleteMsg.style.textAlign = "center";
    deleteMsg.style.color = "green";
    deleteMsg.style.fontSize = "20px";

    del.addEventListener("click", () => {
        li.remove();
        deleteMsg.textContent = "Task Deleted Successfully!";
        list.appendChild(deleteMsg);

        setTimeout(() => {
            deleteMsg.remove();
        }, 2000);
    });

    let text = document.createElement('p');
    text.textContent = "Task Entered Successfully!";
    text.style.textAlign = "center";
    text.style.color = "green";
    text.style.fontSize = "20px";

    li.append(checkbox, " ", tsk, " ", status, " ", del);

    list.appendChild(li);
    list.appendChild(text);
    list.appendChild(status);

    input.value = "";

    setTimeout(() => {
        text.remove();
    }, 2000);
});