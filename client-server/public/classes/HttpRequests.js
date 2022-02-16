class HttpRequest {

    static request() {
        let ajax = new XMLHttpRequest; //criando a solicitação https XML

        ajax.open("GET", "/users"); //Aqui eu tenho que definir o método que o ajax vai usar e onde usar
        ajax.onload = (event) => {
          // aqui criamos um evento que executa quando o request é carregado
    
          let obj = { users: [] }; //criado um obj como array users vazio pra nao ter problema no foreach
    
          try {
            obj = JSON.parse(ajax.responseText); //executa um try catch, se retornar um JSON válido ele subscreve...caso nao ele da erro
            //Esse evento aqui cria um let obj que contém a informação que o servidor retornou
            //como é um JSON é feito um parse
            //Como faremos um parse do JSON, ele vai pegar a informação e tranformar em um nod
            //Com array de usuários
          } catch (e) {
            console.log(e); //console do erro
          }
    
          obj.users.forEach((dataUser) => {
            //colocamos o users poir ele virou um array por conta do parse
            //aray esse que é feito o for each para adicionar os usuários na tela
            let user = new User();
            user.loadFromJSON(dataUser);
            this.AddLine(user);
            //O SelectALl pega a coleção do user storage e instancia, em seguida, essa instancia
            //recebe os valores do loadfromJSon(que se iguala a cada atributo do objeto json)
            // e em seguida manda pro addLine, que por sua vez irá mandar os valores recebidos
            //pelo parâmetro até a template string
          });
        };
    
        ajax.send();

    }
}