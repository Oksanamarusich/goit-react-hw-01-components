import PropTypes from "prop-types";
import {FriendListLi, Status,  Avatar, Name} from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
      return <FriendListLi>
            <Status isOnline = {isOnline}></Status>
            < Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
      </FriendListLi>
        
};


FriendListItem.propTypes = {
      avatar:PropTypes.string,
      name:PropTypes.string,
      isOnline: PropTypes.bool,   
}


