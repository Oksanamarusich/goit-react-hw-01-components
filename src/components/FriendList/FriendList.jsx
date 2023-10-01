import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import {UlFriendList} from "../FriendList/FriendList.styled"

export const FriendList = ({ friends }) => {
    
  return <UlFriendList>{friends.map((friend) => (
    <FriendListItem
    key={friend.id}
    id={friend.id}
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline} />
  )
  )
  }
      </UlFriendList>
};





FriendList.propTypes = {
  friends: PropTypes.array,
  id: PropTypes.number,
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,
};