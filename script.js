import "./styles.css";

const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    makeTask(inputText)
}

const onClickMovetoDone = (task) => {
    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "done-item";
    p.innerText = task;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
        //戻すボタンを押された際に押されたボタンのliタグを削除
        const tempDiv = returnButton.closest(".list-row");
        const returnTask = tempDiv.querySelector(".done-item").textContent
        returnButton.closest("li").remove();
        makeTask(returnTask)
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        //削除ボタンを押された際に押されたボタンのliタグを削除
        deleteButton.closest("li").remove();
    });

    div.appendChild(p);
    div.appendChild(returnButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("complete-list").appendChild(li);
}

const makeTask = (taskText) => {
    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = "list-row";

    //p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = taskText;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        const tempDiv = completeButton.closest(".list-row");
        const donTaskText = tempDiv.querySelector(".todo-item").textContent
        // document.getElementById("incomplete-list").removeChild(completeButton.closest("li"))
        completeButton.closest("li").remove()
        onClickMovetoDone(donTaskText);
    });

    const deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", () => {
        //削除ボタンを押された際に押されたボタンのliタグを削除
        deleteButton.closest("li").remove();
    });
    deleteButton.innerText = "削除";

    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);