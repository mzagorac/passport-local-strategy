import React, { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/profile");
      const responseData = await response.json();

      setUser(responseData);

      console.log(responseData);
    })();
  }, []);

  console.log(user);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px", fontWeight: "300" }}>
        Home page
      </h1>
    </div>
  );
}
