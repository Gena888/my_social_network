import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getProfileDataThunk, setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        // debugger
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileDataThunk(userId);
    }

    render() {
        return (
            <div>

                <Profile {...this.props} profile={this.props.profile} />

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps,
    { setUserProfile, getProfileDataThunk })(WithUrlDataContainerComponent);
