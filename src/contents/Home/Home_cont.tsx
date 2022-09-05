import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { motion, useAnimation } from 'framer-motion'
import { theme } from 'styles/theme'
import { useState, useEffect } from 'react'

export const Home_cont = () => {
  const blocks = new Array(48).fill('_')
  const [clickedBlock, setClickedBlock] = useState<number>()

  return (
    <ThemeProvider theme={theme}>
      <Main
        animate={{
          background: [
            `linear-gradient(90deg, ${theme.colors.blue9}, ${theme.colors.blue12})`,
            `linear-gradient(90deg, ${theme.colors.red7}, ${theme.colors.red9})`,
            `linear-gradient(180deg, ${theme.colors.green9}, ${theme.colors.green12})`,
            `linear-gradient(45deg, ${theme.colors.orange7}, ${theme.colors.orange9})`,
            `linear-gradient(90deg, ${theme.colors.purple9}, ${theme.colors.purple12})`,
            `linear-gradient(180deg, ${theme.colors.teal7}, ${theme.colors.teal9})`,
            `linear-gradient(90deg, ${theme.colors.pink9}, ${theme.colors.pink12})`,
            `linear-gradient(45deg, ${theme.colors.blue9}, ${theme.colors.blue12})`,
          ],
          transition: { duration: 20, repeat: Infinity },
        }}
      >
        {blocks.map((_: any, index: number) => {
          return (
            <Block
              key={index}
              whileHover={{
                backgroundColor: 'rgba(0,0,0,0)',
              }}
              transition={{
                from: 'rgba(0,0,0,0)',
                ease: 'easeOut',
                duration: 2,
              }}
              onClick={() => {
                setClickedBlock(index)
              }}
            >
              <svg
                width='4'
                height='4'
                viewBox='0 0 4 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M4.23438 0.62915H0.234375V4.62915L4.23438 0.62915Z'
                  fill='white'
                />
              </svg>
            </Block>
          )
        })}
      </Main>
    </ThemeProvider>
  )
}

const Main = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 100%;
  height: 100vh;
`
const Block = styled(motion.div)`
  position: relative;
  isolation: isolate;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
`
const childBlock = styled(motion.div)`
  width: 100%;
  height: 100%;
`
