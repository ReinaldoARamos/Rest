const { json } = require("express");
const { response } = require("../../app");

class Fetch {

    static get(url, params= {}) {
        return Fetch.request('GET', url, params)

    }
    static put(url, params= {}) {
      return Fetch.request('PUT', url, params)

  }
  static post(url, params= {}) {
    return Fetch.request('POST', url, params)

}
static delete(url, params= {}) {
  return Fetch.request('DELETE', url, params)//a gente chama o request para ele realizar o ajax e retornar uma promise
  //Lembrando que tudo isso é chamado la no users.js

}
    static request(method/*get set etc*/, url/* a rota* */, params = {}) { 
        //colocamos um método estático porque desse jeito podemos chamar o método 
        //fora da classe de forma direta, sme precisar criar uma intância da classe
        return new Promise((resolve, reject)=>{
       
       
          fetch(url).then(response=>{ 
            //o fetch retorna uma promessa e passamos a url como parametro pra ele pegar os dados
            //o response vao ser os dados que ele vai dar get dentro de users na porta 4000
            //retprnando esses dados dentro do responde.json()

            response.json().then(json=>{
                resolve(json)
            }).catch(e=>{
                reject(e)

            })
          }).catch(e=>{
            reject(e)
          })
       
       
        });
            
        
    }
}