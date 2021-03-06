import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

export const WrapperWithStyledComponents: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
