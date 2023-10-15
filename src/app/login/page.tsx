"use client";

import LoginForm from "./loginForn";

function page() {
  const handleSignup = (data: any) => {
    // Handle signup logic here
    console.log("Signup data:", data);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
}

export default page;
