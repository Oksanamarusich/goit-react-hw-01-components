import styled from "styled-components";

export const FriendListLi = styled.li`
background-color: white;
display: flex;
border: 2px solid rgb(216, 225, 225);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
padding: 40px;
border-radius: 8px;
margin-bottom: 20px;

`
export const Status = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${({ isOnline }) => {
    if (isOnline === true) {
        return "green";
    } else {
        return "red";
    }
}};
margin-right:40px;


`
export const Avatar = styled.img`
width:100px;
height: 100px;
border-radius: 5px;
border: 2px solid rgb(216, 225, 225);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
margin-right:40px;
`
export const Name = styled.p`
font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 1.2;
    color: #2e2f42;
    
`