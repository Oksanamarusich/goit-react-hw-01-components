import styled from "styled-components";

export const TableTransactionHistory = styled.table`
margin: 40px auto;

width: 80%;

background-color: white;
border-collapse: collapse;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const Th = styled.th`
padding: 20px;

font-weight: 500;
font-size: 20px;
line-height: 1.2;
color:white;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const Thead = styled.thead`
background-color: grey;

`
export const Tbody = styled.tbody`

background-color:
`

export const Td = styled.td`
padding: 20px;
justify-content: center;
text-align:center;

border: 1px solid rgb(216, 225, 225);
font-weight: 500;
font-size: 20px;
line-height: 1.2;
color:#8e8f99;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`