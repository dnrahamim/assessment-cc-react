import { API_URL } from '../../constants/env';
import {
  Battle,
  PostBattleBody,
} from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (postBattleBody: PostBattleBody): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(postBattleBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  postBattle,
};
