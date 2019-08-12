import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

/**
 * The only true Button component.
 */
const Button = styled.button`
  text-align: center;
  cursor: pointer;
  background-color: #007bff;
  border-radius: 10px;
  color: #FFFFFF;
  border-color: #f8f9fa;
  padding: 8px 16px;

  ${props => props.fontSize && `
    font-size: ${props.fontSize};
  `}

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  ${props => (props.light || props.dark) && css`
    background: #343a40;
    border: solid 1px #343a40;
    color: #FFFFFF;

    &:hover {
      background: #23272b;
      border-color: #1d2124;
    }
  `}

  ${props => props.light && css`
    background: #f8f9fa;
    border-color:  #f8f9fa;
    color: #212529;
    &:hover {
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }
  `}

  ${props => props.dark && css`
    color: #FFFFFF;
    border-color: #343a40;
    &:hover {
      border-color: #1d2124;
      color: #FFFFFF;
    }
  `}

  ${props => props.disabled && `
    cursor: default;
    background-color: #d1cdd2;
    box-shadow: none;
    border: none;
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
  /** Button text color. */
  fontSize: PropTypes.string,
  /** Button type. */
  type: PropTypes.string
}

Button.defaultProps = {
  type: 'button',
  fontSize: '16px'
}

Button.displayName = 'Button'

/** @component */
export default Button
