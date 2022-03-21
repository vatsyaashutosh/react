import { Card } from "../UI/Card";

import "./UserList.css";
export const UserList = ({ users }) => {
  

  return (
    <Card className="users">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
