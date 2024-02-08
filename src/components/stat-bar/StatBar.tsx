import { startCase } from 'lodash';
import { Monster, StatKey } from '../../models/interfaces/monster.interface';
import { ProgressBar, StatTitle, StyledStatBar } from './StatBar.styled';

type StatBarProps = {
  statKey: StatKey;
  monster: Monster;
};

export const StatBar = ({ statKey, monster }: StatBarProps) => (
  <StyledStatBar key={statKey}>
    <StatTitle>{statKey === 'hp' ? 'HP' : startCase(statKey)}</StatTitle>
    <ProgressBar value={monster[statKey]} variant="determinate" />
  </StyledStatBar>
);
