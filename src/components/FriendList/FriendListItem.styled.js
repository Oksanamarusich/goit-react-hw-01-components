import styled from "styled-components";

export const FriendListLi = styled.li`
display: flex;
margin-bottom: 20px;
padding: 20px;
position: relative;

width: 100%;

background-color: white;
border: 2px solid rgb(216, 225, 225);
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
border-radius: 8px;
`

export const Status = styled.span`
margin-right:60px;
position: absolute;
top: 50px;
right: 400px;


width: ${({ size = 20 }) => `${size}px`};
height: ${({ size = 20 }) => `${size}px`};

border-radius: 50%;
background-color:${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
}
    
};
`
export const Avatar = styled.img`
margin-right:60px;
margin-left: 60px;

width:80px;
height: 80px;
border-radius: 5px;
border: 2px solid rgb(216, 225, 225);
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

`
export const Name = styled.p`
justify-content: center;
text-align:center;

font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 1.2;
color: #2e2f42;
    
`