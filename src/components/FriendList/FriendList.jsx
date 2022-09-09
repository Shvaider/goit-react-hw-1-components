import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function FriendList({ friends }) {
    return (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.number.isRequired,
    })
  ),
};
