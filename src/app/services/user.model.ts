import { Move } from './move.model';

export class User {
  constructor(
    public _id?: string,
    public name: string = '',
    public coins: number = 100,
    public moves: Array<Move> = []
  ) {}

  setId?() {
    // Implement your own set Id
    var text = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < possible.length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    console.log(text);
    return (this._id = text);
  }
}
