import { ChangeEvent, FormEvent, useState } from "react";
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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-5">
      {show && <Breaking user={user} />}
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-5 mt-8">
          <Input
            className="w-full"
            name="firstName"
            placeholder="Firstname"
            value={user.firstName}
            onChange={onChange}
          />
          <Input
            className="w-full"
            name="lastName"
            placeholder="Lastname"
            value={user.lastName}
            onChange={onChange}
          />
        </div>
        <div className="text-center mt-10">
          <Button className="w-52">Breakify</Button>
        </div>
      </form>
    </main>
  );
}

export default App;
