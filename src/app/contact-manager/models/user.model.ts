export class User {
  public id: number;
  public birthDate: Date;
  public name: string;
  public avatar: string;
  public bio: string;
  constructor(
    id: number,
    birthDate: Date,
    name: string,
    avatar: string,
    bio: string
  ) {
    this.id = id;
    this.birthDate = birthDate;
    this.name = name;
    this.avatar = avatar;
    this.bio = bio;
  }
}
