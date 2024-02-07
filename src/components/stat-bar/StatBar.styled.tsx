import styled from '@emotion/styled';
import { LinearProgress, linearProgressClasses } from '@mui/material';
import { colors } from '../../constants/colors';

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

export const StyledStatBar = styled.div(() => ({
  fontFamily: 'Roboto',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '14px',
  marginBottom: '11px',
}));

export const StatTitle = styled.div(() => ({
  marginBottom: '5px',
}));
