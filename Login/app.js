function logon() {
   // const das = [{id:1, email:"teste@mail.com"}]
    
    const dados = [
        {id:1, email:"Pedro", senha:"123"},
        {id:2, email:"Nick", senha:"123"},
        {id:3, email:"Ally", senha:"123"}
    ]
    

   return dados
}



function login(email, senha) {
    
    const user = logon()
    
   // alert(email + ":" + senha)
      
    for(let i = 0; i < user.length; i++) {
    
        if (email == user[i].email && senha == user[i].senha) {
            //alert('Você logou!')
            window.location.href="http://www.google.pt"
            window.location.href="dados.html"
            break
        } else {
            alert('ERRO!')
        }
    }
   
}

 