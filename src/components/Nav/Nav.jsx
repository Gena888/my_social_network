import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import NavFriends from './Friends/NavFriends';

const Nav = (props) => {
    // console.log(props)
    let navFriend =
        props.navPage.navFriendsData.map(navFriendEl =>
            <NavFriends key={navFriendEl.id} imgSrc={navFriendEl.imgSrc} name={navFriendEl.name} />);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Users">Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/News">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Settings">Settings</NavLink>
            </div>
            <div className={s.navFriends}>
                <div>
                    <h2>Friends</h2>
                </div>
                <div className={s.navFriendsInner}>
                    {navFriend}
                </div>
            </div>

        </nav>
    );
}

export default Nav;


