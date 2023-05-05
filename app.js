function logon() {
    
    const dados = [
        {id:1, email:"root", senha:"123"},
        {id:2, email:"user1", senha:"123"},
        {id:3, email:"user2", senha:"123"}
    ]
    
   return dados
}

function login(email, senha) {
    
    const user = logon()

    for(let i = 0; i < user.length; i++) {
    
        if (email == user[i].email && senha == user[i].senha) {
            
            window.location.href="dados.html"
            alert('Você logou!')
            
            break

        } else if (email != user[i].email && senha != user[i].senha) {
            
            alert('ERRO!')
            
            break
        }
    }
}

 