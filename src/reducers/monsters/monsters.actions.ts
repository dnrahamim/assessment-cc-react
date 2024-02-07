import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { Battle } from '../../models/interfaces/battle.interface';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const postBattleData = createAsyncThunk<Battle>(
  'monsters/postBattle',
  MonsterService.postBattle,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setComputerMonster = createAction<Monster | null>(
  'monsters/setComputerMonster',
);
