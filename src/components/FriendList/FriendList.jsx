import PropTypes from "prop-types";
import {UlFriendList} from "../FriendList/FriendList.styled"
export const FriendList = ({ friends, children }) => {
    
    return <UlFriendList>{children}</UlFriendList>
};





FriendList.propTypes = {
  friends: PropTypes.array,
  children:PropTypes.array,
};