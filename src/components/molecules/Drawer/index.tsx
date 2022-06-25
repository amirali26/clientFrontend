import { DrawerProps, Drawer as MuiDrawer, styled } from 'helpmycase-storybook/dist/components/External';
import React from 'react';

type IProps = DrawerProps

const MuiStyledDrawer = styled(MuiDrawer)<IProps>({
  '& > .MuiPaper-root': {
    width: '664px',
    maxWidth: '90%',
  },
  '@media (max-width: 599px)': {
    '.MuiPaper-root': {
      maxWidth: '90%',
    },
    '.MuiPaper-root > div:first-of-type': {
      padding: '28px 24px !important',
    },
    '.MuiPaper-root > div:last-of-type': {
      margin: '16px !important',
    },
  },
});

const Drawer: React.FC<IProps> = ({ children, ...rest }: IProps) => (
  <MuiStyledDrawer {...rest} anchor="right">
    <div
      className="flex fullWidth row alignItemsCenter"
      style={{
        boxSizing: 'border-box',
        padding: '32px 24px',
        height: '64px',
        backgroundColor: '#121212',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      }}
    />
    <div style={{ margin: '32px' }}>
      {children}
    </div>
  </MuiStyledDrawer>
);

export default Drawer;
