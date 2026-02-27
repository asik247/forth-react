
import User from './User';
const Users = ({ users2 }) => {
    return (
        <div>
            <h1>iam users here</h1>
            {
                users2.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;