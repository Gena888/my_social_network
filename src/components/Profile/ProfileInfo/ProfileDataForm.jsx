import { React } from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from './../../Common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';
import sForm from './../../Common/FormsControls/FormsControls.module.css'




const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <div className={s.profileDataForm}>

            {/* createField = (validate, placeholder, component, name, type) */}

            {/* save button */}
            <form onSubmit={handleSubmit} >
                <div className={s.profileDataFormDiv + ' ' + s.saveDiv}>
                    <button>Save</button>
                </div>
                {/* error message */}
                {error &&
                    <div className={sForm.formSummeryError}>
                        {error}
                    </div>}

                {/* full name */}
                <div className={s.mainInfo}>
                    <div className={s.profileDataFormDiv}>
                        <b>Full name: </b>
                        {createField([], 'Full name', Input, "fullName", 'text')}
                    </div>

                    {/* aboutme */}
                    <div className={s.profileDataFormDiv}>
                        <b>Abot me: </b>
                        {createField([], 'About me', Textarea, "aboutMe", 'text', '1')}
                    </div>

                    {/* job descriptoin */}
                    <div className={s.profileDataFormDiv}>
                        <b>My prof skills: </b>
                        {createField([], 'My professional skills', Textarea, "lookingForAJobDescription", 'text', '1')}
                    </div>
                    {/* job */}
                    <div className={s.profileDataFormDiv + ' ' + s.job}>
                        <b>Looking wor a job: </b>
                        <span>
                            {createField([], '', Input, "lookingForAJob", 'checkbox')}
                        </span>
                    </div>
                </div>
                <div className={s.contacts}>
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key} className={s.contact}>
                                <div className={s.profileDataFormDiv + ' ' + s.contactsBlog}>
                                    <b>{key}: </b>
                                    {createField([], key, Input, "contacts." + key.toLocaleLowerCase(), 'text')}
                                </div>
                            </div>)
                    })}
                </div>
            </form >


        </div>
    )
}


const ProfileDataReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)


export default ProfileDataReduxForm;