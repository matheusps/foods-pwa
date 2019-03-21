import styled from 'styled-components'

interface Props {
  width?: number
  height?: number
  full?: boolean
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  items?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}

/**
 * Easy Flex container
 */
const Container = styled.div`
  background-color: ${props => props.theme.background};
  padding: 0.5rem;
  display: flex;
  width: ${({ full, width }: Props) => (full ? 100 : width)}%
  height: ${({ full, height }: Props) => (full ? `100vh` : height + `%`)}
  flex-direction: ${(props: Props) => props.direction}
  flex-wrap:  ${(props: Props) => props.wrap}
  justify-content: ${(props: Props) => props.justify}
  align-items: ${(props: Props) => props.items}
  align-content: ${(props: Props) => props.content}
`

Container.defaultProps = {
  full: false,
  direction: 'row',
  wrap: 'nowrap',
}

export default Container
