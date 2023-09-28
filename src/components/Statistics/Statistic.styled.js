import styled from "styled-components";
import {getRandomHexColor} from "../../utilits"

export const StatisticContainer = styled.div`
width:480px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
border-radius: 8px;
background-color: white;
margin-top: 40px;
margin-left:auto;
margin-right:auto;
margin-bottom: 40px;
padding-top: 40px;
display:flex;
flex-direction: column;
`
export const TitleStatistic = styled.h2`
font-size: 36px;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: #2e2f42;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;

`
export const StatList = styled.ul`
list-style: none;
width: 100%;
padding: 0;
display: flex;
`

export const StatItem = styled.li`
width: 96px;
height: 96px;
display: flex;
flex-direction: column;
background-color:${props => getRandomHexColor(props.index)};
color:white;
font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    justify-content: center;
    text-align:center;

`

