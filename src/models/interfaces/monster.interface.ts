export interface MonsterStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export type StatKey = keyof MonsterStats;
export const statKeys: StatKey[] = ['hp', 'attack', 'defense', 'speed'];

export interface Monster extends MonsterStats {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}
