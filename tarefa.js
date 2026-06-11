function adicionar(){
    let texto = document.getElementById("tarefa").value;

    let li  = document.createElement("li");
    li.textContent = texto;

    document.getElementById("lista").appendChild(li);
}