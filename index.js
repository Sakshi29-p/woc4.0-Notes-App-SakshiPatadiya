function hand(){
        document.getElementById("addplus").style.cursor="pointer";
}

function addList(){
        const person = prompt("Enter the title of your New List:");
        document.getElementById("second")= person;
        addNewList(person);
}
