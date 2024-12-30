import { ChangeEvent, useState } from "react";
import Breaking from "./components/breaking";
import Input from "./components/input";
import Button from "./components/button";

export type UserType = {
  firstName: string;
  lastName: string;
};

function App() {
  const [user, setUser] = useState<UserType>({ firstName: "", lastName: "" });
  const [show, setShow] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShow(false);
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.replace(/[^a-z]/gi, ""),
    }));
  };

  const handleClick = () => {
    setShow(true);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      {show && <Breaking user={user} />}
      <div className="flex flex-col sm:flex-row gap-5 mt-8">
        <Input
          name="firstName"
          placeholder="Firstname"
          value={user.firstName}
          onChange={onChange}
        />
        <Input
          name="lastName"
          placeholder="Lastname"
          value={user.lastName}
          onChange={onChange}
        />
      </div>
      <div className="text-center mt-10">
        <Button type="button" className="w-52" onClick={handleClick}>
          Breakify
        </Button>
      </div>
    </main>
  );
}

export default App;
