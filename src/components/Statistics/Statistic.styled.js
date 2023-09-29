import styled from "styled-components";
import {getRandomHexColor} from "../../utilits"

export const StatisticContainer = styled.div`
margin: 40px auto;
padding-top: 40px;
display:flex;
flex-direction: column;

width:480px;

background-color: white;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
border-radius: 8px;

`
export const TitleStatistic = styled.h2`
margin-bottom: 40px;
text-align: center;

text-transform: uppercase;
font-size: 36px;
line-height: 1.1;
letter-spacing: 0.02em;
color: #2e2f42;
`
export const StatList = styled.ul`
padding: 0;
display: flex;

width: 100%;

list-style: none;

`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
text-align:center;

width: 96px;
height: 96px;

background-color:${props => getRandomHexColor(props.index)};
color:white;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

