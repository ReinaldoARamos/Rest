class HttpRequest {

    static get(url, params= {}) {
        return HttpRequest.request('GET', url, params)

    }
    static put(url, params= {}) {
      return HttpRequest.request('PUT', url, params)

  }
  static post(url, params= {}) {
    return HttpRequest.request('POST', url, params)

}
static delete(url, params= {}) {
  return HttpRequest.request('DELETE', url, params)//a gente chama o request para ele realizar o ajax e retornar uma promise
  //Lembrando que tudo isso é chamado la no users.js

}
    static request(method/*get set etc*/, url/* a rota* */, params = {}) { 
        //colocamos um método estático porque desse jeito podemos chamar o método 
        //fora da classe de forma direta, sme precisar criar uma intância da classe
        return new Promise((resolve, reject)=>{
            let ajax = new XMLHttpRequest; 
        //criando a solicitação https XML

        ajax.open(method.toUpperCase(), url); 
        //Aqui eu tenho que definir o método que o ajax vai usar e onde usar
        ajax.onerror = (event)=>{
            reject(event);
        }
        ajax.onload = (event) => {
          // aqui criamos um evento que executa quando o request é carregado
    
          let obj = { }; //criado um obj como array users vazio pra nao ter problema no foreach
    
          try {
            obj = JSON.parse(ajax.responseText); 
            //executa um try catch, se retornar um JSON válido ele subscreve...caso nao ele da erro
            //Esse evento aqui cria um let obj que contém a informação que o servidor retornou
            //como é um JSON é feito um parse
            //Como faremos um parse do JSON, ele vai pegar a informação e tranformar em um nod
            //Com array de usuários
          } catch (e) {
              reject(e)
            console.log(e); //console do erro
          }
    
          resolve(obj);
        };
        ajax.setRequestHeader('Content-Type', 'application/json')
        ajax.send(JSON.stringify(params));

        });
            
        
    }
}