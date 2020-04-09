interface UserAddressInterface {
  readonly street: string
  readonly suite: string
}

export interface UserInterface {
  readonly id: number
  readonly name: string
  readonly username: string
  readonly email: string
  readonly address: UserAddressInterface
  readonly phone?: string
  readonly website?: string
}
