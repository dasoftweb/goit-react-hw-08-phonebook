import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.svg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontWeight: 700,
    marginRight: 10,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);