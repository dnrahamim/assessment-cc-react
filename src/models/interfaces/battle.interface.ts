export interface PostBattleBody {
  monster1Id: string;
  monster2Id: string;
}

interface Winner {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface Battle {
  winner: Winner;
  tie: boolean;
}
