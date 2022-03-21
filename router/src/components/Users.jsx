import axios from "axios";
import { useEffect, useState } from "react";

export const users = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("").then((response) => {
      setList([...response.data.data]);
    });
  }, []);
  return (
    <div>
      {list.map((e) => (
        <div key={e.id}>
          {e.id}. {e.first_name}
        </div>
      ))}
    </div>
  );
};
