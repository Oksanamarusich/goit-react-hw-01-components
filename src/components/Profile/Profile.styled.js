import styled from "styled-components";

export const ProfileContainer = styled.div`
margin: 0 auto;

width: 480px;

background-color: white;
border-radius:8px;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}

`
export const DescriptionContainer = styled.div`
padding-top: 40px;
`
export const ImgProfile = styled.img`
margin-left: 150px;
margin-bottom: 40px;

width: 150px;

border-radius: 50%;
border: 2px solid rgb(216, 225, 225);
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const Username = styled.p`
margin-bottom: 10px;

font-style:normal;
font-weight: 600;
font-size: 35px;
line-height: 1.2;
margin-left: 125px;
color:#2e2f42;

`

export const Tag = styled.p`
justify-content: center;
text-align:center;
margin-bottom: 10px;

color:#8e8f99;
font-weight: 500;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.02em;
`

export const Location = styled.p`
justify-content: center;
text-align:center;
margin-bottom: 40px;

font-weight: 500;
font-size: 20px;
line-height: 1.2;
   color:#434455;
    
`
export const Status = styled.ul`
display:flex;
padding: 0;
width: 100%;
list-style: none;
`

export const LiStatus = styled.li`
display:flex;
flex-direction: column;
padding: 20px;

width:126px;

border:2px solid rgb(216, 225, 225);
background-color: #f4f4fd;
font-weight: 500;
font-size: 20px;
line-height: 1.2;
color:#434455;
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const Label = styled.span`
margin-left: 15px;
`
export const Quantity = styled.span`
margin-left: 25px;
`
