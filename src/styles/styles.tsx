import { Global, css } from '@emotion/react'
import { PropsWithChildren } from 'react'

export const GlobalStyle = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background: #2f81f7;
            color: '#282A32';
          }
          ::-moz-selection {
            background: #2f81f7;
            color: #282A32';
          }
          ::-webkit-scrollbar {
            width: 0.5rem;
          }
          ::-webkit-scrollbar-track {
            background: '#282A32';
          }
          ::-webkit-scrollbar-thumb {
            background: #2f81f7;  
            border: 0.125rem solid '#282A32';
          }
          html {
            scroll-behavior: smooth;
            cursor: default;
          }
        `}
      />
      {children}
    </>
  )
}
