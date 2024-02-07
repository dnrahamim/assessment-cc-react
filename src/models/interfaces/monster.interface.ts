interface MonsterStats {
  attack: number;
  defense: number;
  hp: number;
  speed: number;
}

export type StatKey = keyof MonsterStats;

export interface Monster extends MonsterStats {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
}
