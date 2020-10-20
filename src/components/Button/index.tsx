import styled from 'styled-components'

interface Props {
  outlined?: boolean
}

export default styled.button<Props>`
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};

  padding: 16px;
  border-radius: 35px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    transition: 0.5s;
    background: ${(props) =>
      props.outlined
        ? 'var(--twitter-dark-hover)'
        : 'var(--twitter-light-hover)'};
  }
`
