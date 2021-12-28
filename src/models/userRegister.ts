export type UsersPermissionsRegisterInput = {
  username: string
  email: string
  password: string
}

export type MutationRegisterJwt = {
  jwt: string | null
}

export type MutationRegister = {
  register: MutationRegisterJwt
}

export type MutationRegisterVariables = {
  input: UsersPermissionsRegisterInput
}
