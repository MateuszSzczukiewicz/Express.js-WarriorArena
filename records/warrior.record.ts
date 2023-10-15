import { ValidationError } from "../utils/errors";

export class WarriorRecord {
  public id?: string;
  public readonly name: string;
  public readonly power: number;
  public readonly defence: number;
  public readonly stamina: number;
  public readonly agility: number;
  public wins?: number;

  constructor(obj: WarriorRecord) {
    const { id, name, power, defence, stamina, agility, wins } = obj;

    const sum = [stamina, defence, power, agility].reduce(
      (prev, curr) => prev + curr,
      0,
    );

    if (sum !== 10) {
      throw new ValidationError(
        `Suma wszystkich statystyk musi wynosić 10. Aktualnie jest to ${sum}.`,
      );
    }

    if (name.length < 3 && name.length > 50) {
      throw new ValidationError(
        `Imię musi posiadać od 3 do 50 znaków. Aktualnie jest to ${sum}.`,
      );
    }

    this.id = id;
    this.name = name;
    this.power = power;
    this.defence = defence;
    this.stamina = stamina;
    this.agility = agility;
    this.wins = wins;
  }

  async insert() {}

  async update() {}

  static async getOne(id: string) {}

  static async listAll() {}

  static async listTop(topCount: number) {}
}
