import styled from '@emotion/styled';
import {
  Card,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material';
import { colors } from '../../constants/colors';

export const BattleMonsterCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'centralized',
})<{ centralized?: boolean }>(({ centralized }) => ({
  // padding: '13px 11px',
  width: 'calc(307px - 22px)',
  height: '415px',
  background: colors.white,
  boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: '7px',
  display: centralized ? 'flex' : 'auto',
  alignItems: centralized ? 'center' : 'auto',
  justifyContent: centralized ? 'center' : 'auto',
  // My Additions
  flexFlow: 'column',
  padding: '11px 12px',
}));

// My Style Component
export const MonsterImage = styled.img(() => ({
  borderRadius: '7px',
  width: '100%',
  marginBottom: '14px',
}));

export const HorizontalRule = styled((props: { className?: string }) => {
  return (
    <svg
      className={props.className}
      width="283"
      height="2"
      viewBox="0 0 283 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1L283 0.999975" stroke="black" strokeOpacity="0.1" />
    </svg>
  );
})`
  width: 100%;
`;

export const BattleMonsterTitle = styled(Typography)(() => ({
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '400',
  // fontSize: '36px',
  // lineHeight: '42px',
  color: colors.black,
  // My Additions
  fontSize: '22px',
  lineHeight: '26px',
  textAlign: 'left',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: colors.progressBarBackground,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: colors.progressColor,
  },
}));
