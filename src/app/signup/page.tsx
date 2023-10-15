"use client";
import SignupForm from "./sighUpForm";

function page() {
  const handleSignup = (data: any) => {
    // Handle signup logic here
    console.log("Signup data:", data);
  };
  return (
    <div>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
}

export default page;
