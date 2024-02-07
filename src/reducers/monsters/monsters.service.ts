import { API_URL } from '../../constants/env';
import { Battle } from '../../models/interfaces/battle.interface';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const postBattle = async (): Promise<Battle> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
  }).then((response) => response.json());

export const MonsterService = {
  getAll,
  postBattle,
};
