export interface MonsterStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

export type StatKey = keyof MonsterStats;

export interface Monster extends MonsterStats {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}
