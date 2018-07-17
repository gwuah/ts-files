interface IUser {
  email: string,
  password: string,
  isActive: boolean
}

// export interface IAdmin {
//   email: string,
//   password: string,
//   isActive: boolean,
//   adminSince: Date
// }

// but since we can treat interfaces likes classes

interface IAdmin extends IUser {
  adminSince: number
}

let xyz: IAdmin = {
  email: "griffith@gmail.com",
  password: "tooken",
  isActive: true,
  adminSince: Date.now()
}