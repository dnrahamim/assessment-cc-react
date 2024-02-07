import { Monster, StatKey } from '../../models/interfaces/monster.interface';
import { ProgressBar, StatTitle, StyledStatBar } from './StatBar.styled';

type StatBarProps = {
  statKey: StatKey;
  monster: Monster;
};

export const StatBar = ({ statKey, monster }: StatBarProps) => (
  <StyledStatBar key={statKey}>
    <StatTitle>
      {statKey == 'hp'
        ? 'HP'
        : `${statKey.charAt(0).toUpperCase()}${statKey.substring(1)}`}
    </StatTitle>
    <ProgressBar value={monster[statKey]} variant="determinate" />
  </StyledStatBar>
);
