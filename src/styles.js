import styled, { css } from "styled-components";

export const Content = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    flex-direction: column;
  `}
`;

export const TasksBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.box};
    width: 60vw;
    height: 100%;
    padding: 30px;
    border-radius: 10px;
    box-shadow: -3px 14px 15px rgb(0 0 0 / 15%);
  `}
`;

export const TodoTitle = styled.h1`
  ${() => css`
    transform: rotate(2deg);
    padding: 0.2rem 1.2rem;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    background-color: hsla(166, 100%, 50%, 0.7);
    color: #18191a;
    font-size: 3rem;
    font-family: "Gochi Hand", cursive;
  `}
`;

export const Options = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    color: #fff;
    height: 40px;
    img {
      margin: 0 10px;
    }
  `}
`;

export const Ul = styled.ul`
  ${({ align, justifyContent }) => css`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: ${align || "column"};
    justify-content: ${justifyContent || "flex-end"};
    width: 100%;
  `}
`;

export const Li = styled.li`
  ${({ theme, padding, cursor, unset }) => css`
    border-radius: 10px;
    padding: ${padding || "15px"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: ${cursor || "initial"};
    :nth-child(odd) {
      background-color: ${unset || theme.odd};
    }
  `}
`;

export const Tabs = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    margin: 20px 0;
    background-color: ${theme.box};
    width: 60vw;
    height: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: -3px 14px 15px rgb(0 0 0 / 15%);
  `}
`;

export const Tab = styled.div`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 200px;
    font-weight: 600;
    border-radius: 99px;
    cursor: pointer;
    background-color: ${active && theme.odd};
    border-radius: 10px;
    transition: 0.25s ease-out;
  `}
`;

export const Counter = styled.span`
  ${({ active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: 5px;
    border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
    transform: rotate(1deg);
    background-color: #efefef;
    transition: 0.15s ease-in;

    background-color: ${(active ? "#582a9b" : "#fff")};
    color: ${(active ? "#fff" : "#582a9b")};
  `}
`;
