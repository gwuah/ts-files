interface User {
  username,
  passwword
}

class User {
  constructor() {

  }
}

let login: (username: string, password: string) => User

login = (username, password) => { new User()}