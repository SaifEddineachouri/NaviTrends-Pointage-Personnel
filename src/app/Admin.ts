export class Admin {
  public Id: number;
  public Username: string = '';
  public Email: string = '';
  public Password: string = '';
  public role: string = '';

  constructor(
    Id: number,
    username: string,
    email: string,
    password: string,
    role: string
  ) {
    this.Id = Id;
    this.Username = username;
    this.Email = email;
    this.Password = password;
    this.role = role;
  }
}
