class User {
  constructor(name, gender, birth, country, email, password, photo, admin) {
    this.id;
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._photo = photo;
    this._admin = admin;

    this._register = new Date();
  }

  get id() {
    return this._id;
  }
  get register() {
    return this._register;
  }

  get name() {
    return this._name;
  }

  get gender() {
    return this._gender;
  }

  get birth() {
    return this._birth;
  }

  get country() {
    return this._country;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get photo() {
    return this._photo;
  }

  get admin() {
    return this._admin;
  }

  set photo(value) {
    this._photo = value;
  }

  /*
  set id(id) {
      this._id = id
  }
  */
  loadFromJSON(json) {
    for (let name in json) {
      switch (name) {
        case "_register":
          this[name] = new Date(json[name]);

          break;

        default:
          this[name] = json[name];
      }
    }
  }

  static getUserStorage() {
    let users = [];

    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
  }

  getNewId() {
    let userID = parseInt(localStorage.getItem("userID"));
    if (!userID) userID = 0; // a partir do igual nós podemos chamar o id sem window, pois ele já está referenciado

    userID++;
    localStorage.setItem("userID", userID);
    return userID;
  }

  toJSON() {
    let json = {};

    Object.keys(this).forEach((key) => {
      // aqui to usando o método do obejectt...onde ele busca uma key
      //essa key é o this, ou seja, o this vai mandar um array, e esse array vai ter keys, onde podemos
      //executar um forEach que vai veriricar todas as keys dentro desse array

      if (this[key] !== undefined) json[key] = this[key];
      //dentro desse array ele vai executar um if para verificar se a key é undefined, e caso nao seja
      //ele pela o objeto vazio json criado noe escpopo do método e iguala À key do array
    });
    return json; //enfim ele retorna
  }
  //-------------------

  save(){

    return new Promise((resolve, reject) => {

        let promise;

        if (this.id) {

            promise = HttpRequest.put(`/users/${this.id}`, this.toJSON());

        } else {

            promise = HttpRequest.post(`/users`, this.toJSON());

        }

        promise.then(data => {

            this.loadFromJSON(data);

            resolve(this);

        }).catch(e => {

            reject(e);

        });

    });

}

 /*
  save() {
    return new Promise((resolve, reject) => { //criamos uma nova promise
      let promise; //variavel que vai receber o json do HTTPrequest
      if (this.id) { //pega o id
        promise = HttpRequest.put(`/users/${this.id}`, this.toJSON()); //faz o request com a url, a id e o objeto JSON
        //colocando o httprequest put para criar editar um usuário , passando o parametro da rota e o id
        //e caso exista id ele simplesmente atualiza
        //caso contrario cai nesse else que cadastra um novo
      } else {
        promise = HttpRequest.post(`/users`, this.toJSON());
        //colocando o httprequest put para criar editar um usuário , passando o parametro da rota e o id
      }

      promise.then((data) => {
        this.loadFromJSON(data); //pega a promise e usa o método loadFromJson para colocar o JSon dentro de um array
          resolve(this)
      }).catch(e=>{
        reject(e);
      });

    });
    
  }

  */
  //-----------
  deleteUser() {
    let users = User.getUserStorage();
    users.forEach((UserData, index) => {
      if (this._id == UserData._id) {
        users.splice(index, 1);
      }
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
}
