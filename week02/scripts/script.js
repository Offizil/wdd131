const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let error = document.querySelector("#error-msg");


input.focus();

button.addEventListener("click", () => {
    if (input.value != "")
    {
        error.textContent = "";   
        const li = document.createElement("li");
        const delBtn = document.createElement("button");

        li.textContent = input.value;
        delBtn.textContent = "❌";

        li.append(delBtn);
        list.appendChild(li);
        input.focus();
        input.value="";



        delBtn.addEventListener("click", function(){
            list.removeChild(li);
            input.focus();

            input.value="";
        })



    }
    else {
        // message.innerHTML = `Please enter a chapter.`;
        input.focus();
        error.textContent = "❗❗ You must enter chapter ❗❗";

      }


})
