import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";
import Contacts from "../Contacts";


function UserCv() {
    return (
        <div>
            <PersonalInfo/>
            <Experience/>
            <Contacts/>
        </div>
    );
}

export default UserCv;