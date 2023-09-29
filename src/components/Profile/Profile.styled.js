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
width: 150px;
border-radius: 50%;
margin-left: 150px;
margin-bottom: 40px;
border: 2px solid rgb(216, 225, 225);
&:hover{
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
}
`

export const Username = styled.p`
font-style:normal;
font-weight: 600;
font-size: 35px;
line-height: 1.2;
margin-left: 125px;
color:#2e2f42;
margin-bottom: 10px;
`

export const Tag = styled.p`
color:#8e8f99;
font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
    margin-left: 180px;
    margin-bottom: 10px;
`

export const Location = styled.p`
font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color:#434455;
    margin-left: 145px;
    margin-bottom: 40px;
`
export const Status = styled.ul`
list-style: none;
display:flex;
width: 100%;
padding: 0;
`

export const LiStatus = styled.li`
display:flex;
flex-direction: column;
width:126px;
border:2px solid rgb(216, 225, 225);
padding: 20px;
background-color: #f4f4fd;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color:#434455;
`

export const Label = styled.span`
margin-left: 15px;
`
export const Quantity = styled.span`
margin-left: 25px;
`
