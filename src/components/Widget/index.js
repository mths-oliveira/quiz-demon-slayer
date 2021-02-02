import styled from "styled-components";

const Widget = styled.div`
  margin-top: 12px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.25rem;
    padding: 1.25rem 2rem 0.625rem;
  }

  h2 {
    font-size: 1rem;
    padding: 1rem 0rem 0.25rem;
  }

  h3 {
    font-size: 1.25rem;
    padding: 1rem 0;
  }
  p {
    font-size: 1rem;
    padding: 0.5rem 0;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 0 2rem 1.5rem 2rem;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.contrastText}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;

export default Widget;
