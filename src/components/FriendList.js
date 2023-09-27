import PropTypes from "prop-types";

export const FriendList = ({ friends, children }) => {
    
    return <ul className="friend-list">{children}</ul>
};


FriendList.propTypes = {
  friends: PropTypes.array,
  children:PropTypes.array,
};