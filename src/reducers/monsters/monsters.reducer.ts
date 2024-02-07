import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  fetchMonstersData,
  postBattleData,
  setSelectedMonster,
} from './monsters.actions';
import { Battle } from '../../models/interfaces/battle.interface';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  battle: Battle | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  battle: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));

  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(postBattleData.pending, (state) => ({
    ...state,
    battle: null,
  }));

  builder.addCase(postBattleData.rejected, (state) => ({
    ...state,
    battle: null,
  }));

  builder.addCase(postBattleData.fulfilled, (state, action) => ({
    ...state,
    battle: action.payload,
  }));
});
