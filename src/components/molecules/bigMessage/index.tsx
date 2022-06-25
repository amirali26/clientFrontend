import {
  Button, ButtonProps, Styles, Typography,
} from 'helpmycase-storybook/dist/components/External';
import theme from 'helpmycase-storybook/dist/theme/theme';
import React from 'react';
import styled from 'styled-components';

interface IProps {
  icon: JSX.Element,
  title: string,
  subtitle: string,
  buttonProps?: ButtonProps,
  style?: React.CSSProperties,
}

const ContainerStyled = styled.div({
  maxWidth: '700px',
  top: '40%',
  '@media (max-width: 768px)': {
    width: '80% !important',
  },
  '@media (max-width: 468px)': {
    '> div:first-of-type': {
      width: '70px !important',
      height: '70px !important',
    },
    h2: {
      fontSize: '30px !important',
    },
    h6: {
      fontSize: '1rem !important',
    },
  },
});

const useStyles = Styles.makeStyles({
  iconHolder: {
    '& > svg': {
      width: '100%',
      height: '100%',
      color: theme.palette.primary.main,
    },
  },
});

const BigMessage: React.FC<IProps> = ({
  icon, title, subtitle, buttonProps, style,
}: IProps) => {
  const classes = useStyles();
  return (
    <ContainerStyled className="absolute alignCenter flex column center" style={{ ...style }}>
      <div style={{ width: '100px', height: '100px' }} className={classes.iconHolder}>
        {icon}
      </div>
      <Typography variant="h2" className="marginBottomSmall textAlignCenter">{title}</Typography>
      <Typography variant="h6" className="marginBottomMedium textAlignCenter">{subtitle}</Typography>
      {
        buttonProps
        && (
          <Button variant="contained" color="primary" {...buttonProps}>
            {buttonProps.children}
          </Button>
        )
      }
    </ContainerStyled>
  );
};

export default BigMessage;
