export class ClassList {
  public constructor(
    private readonly _classes: string[]
  ) {}

  public toString(): string {
    return this._classes.join(' ');
  }
}
