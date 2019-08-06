import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

/**
 * The only true Button component.
 */
const Button = styled.button`
  text-align: center;   
  line-height: 1.15;
  height: 38px;
  cursor: pointer;
  outline: none;

  border: none;
  box-shadow: 1px 2px 7px 5px rgba(0, 0, 0, 0.08);
  background-color: #FF00FF;
  color: #FFFFFF;
  &:hover {
    background-color: #FFF0FF;
  }
  &:active {
    background-color: #FF000F;
  }

  ${props => (props.light || props.dark) && css`
    background: none;
    box-shadow: none;
    border: solid 1px;
    &:active {
      background: none;
      border-color: #FFFFFF;
      color: #FFFFFF;
    }
    &:hover {
      background: none;
    }
  `}

  ${props => props.light && css`
    color: #000000;
    border-color: #000000;
    &:hover {
      border-color: #FFFFFF;
      color: #FFFFFF;
    }
  `}

  ${props => props.dark && css`
    color: #FFFFFF;
    border-color: #FFFFFF;
    &:hover {
      border-color: #FF0000;
      color: #FF0000;
    }
    &:active {
      border-color: #00FF00;
      color: #00FF00;
    }
  `}

  ${props => props.disabled && `
    cursor: default;
    background-color: #d1cdd2;
    box-shadow: none;
    &:hover { background-color: #d1cdd2 }
    &:active { background-color: #d1cdd2 }
  `}

  ${props => props.color && `
    color: ${props.color};
  `}
`

Button.propTypes = {
  /** Children nodes. */
  children: PropTypes.node,
  /** Disable button. */
  disabled: PropTypes.bool,
  /** Dark button style. */
  dark: PropTypes.bool,
  /** Light button style. */
  light: PropTypes.bool,
  /** Button text color. */
  color: PropTypes.string,
  /** Button type. */
  type: PropTypes.string
}

Button.defaultProps = {
  type: 'button'
}

Button.displayName = 'Button'

/** @component */
export default Button
