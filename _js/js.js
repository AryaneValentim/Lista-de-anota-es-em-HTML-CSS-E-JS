document.querySelector('#clicar').onclick = function(){
    if(document.querySelector('#novatarefa input').value.length == 0){
        alert("Por favor, digite uma tarefa.")
    }
    else{
        document.querySelector('#tarefas').innerHTML += `
        <div class="tarefa">
            <span id="nometarefa">
                ${document.querySelector ('#novatarefa input').value}
            </span>
            <button class="deletar">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        
        var current_tarefas = document.querySelectorAll(".deletar");
        for(var i=0; i<current_tarefas.length; i++){
            current_tarefas[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

    var tarefas = document.querySelectorAll(".tarefa");
    for(var i=0; i<tarefas.length; i++){
        tarefas[i].onclick = function(){
            this.classList.toggle('completo');
        }
    }

    document.querySelector('#novatarefa input').value = "";
}