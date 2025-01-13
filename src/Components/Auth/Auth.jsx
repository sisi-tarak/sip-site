import React, { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Tabs = ({ children, defaultValue, onValueChange }) => {
  return <div className="w-full max-w-md">{children}</div>;
};

const TabsList = ({ children }) => {
  return <div className="grid w-full grid-cols-2 mb-4">{children}</div>;
};

const TabsTrigger = ({ value, active, onClick, children }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`p-2 text-center transition-all duration-300 ${
        active ? "border-b-2 border-headColor" : "border-b-2 border-transparent"
      }`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, activeTab, children }) => {
  return (
    <div
      className={`transition-opacity duration-300 absolute w-full ${
        value === activeTab
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8"
      }`}
      style={{
        visibility: value === activeTab ? "visible" : "hidden",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ children, className }) => {
  return <div className={`rounded-lg shadow-lg ${className}`}>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="mb-6">{children}</div>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded border border-gray-300 bg-transparent text-headColor placeholder-gray-500"
    />
  );
};

const Button = ({ disabled, onClick, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full p-2 mt-4 bg-headColor text-brandsBgColor rounded hover:opacity-90 disabled:opacity-50 transition-opacity"
    >
      {children}
    </button>
  );
};

const Auth = () => {
  const [activeTab, setActiveTab] = useState("signin");
  const [signInForm, setSignInForm] = useState({ userEmail: "", password: "" });
  const [signUpForm, setSignUpForm] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const isSignInValid = signInForm.userEmail && signInForm.password;
  const isSignUpValid =
    signUpForm.userName && signUpForm.userEmail && signUpForm.password;

  return (
    <div className="flex flex-col min-h-screen text-headColor font-ubuntu">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-headColor/20">
        <Link to="/" className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 mr-4" />
          <span className="font-extrabold text-xl tracking-widest">Student Incubator Program - SVCE</span>
        </Link>
      </header>

      <div className="flex items-center justify-center flex-grow p-4">
        <Tabs defaultValue="signin" onValueChange={setActiveTab}>
          <TabsList className="transition-all duration-300 ease-in-out">
            <TabsTrigger
              value="signin"
              active={activeTab === "signin"}
              onClick={setActiveTab}
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              active={activeTab === "signup"}
              onClick={setActiveTab}
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <div className="relative h-[400px]">
            <TabsContent
              value="signin"
              activeTab={activeTab}
              className="transition-all duration-300 ease-in-out"
            >
              <Card className="p-6 space-y-4 bg-brandsBgColor text-headColor">
                <CardHeader>
                  <h1 className="text-xl font-bold">Sign in to your account</h1>
                  <p className="text-sm mt-1">
                    Enter your email and password to access your account
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email"
                      value={signInForm.userEmail}
                      onChange={(e) =>
                        setSignInForm({
                          ...signInForm,
                          userEmail: e.target.value,
                        })
                      }
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={signInForm.password}
                      onChange={(e) =>
                        setSignInForm({
                          ...signInForm,
                          password: e.target.value,
                        })
                      }
                    />
                    <Button disabled={!isSignInValid}>Sign In</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              value="signup"
              activeTab={activeTab}
              className="transition-all duration-300 ease-in-out"
            >
              <Card className="p-6 space-y-4 bg-brandsBgColor text-headColor">
                <CardHeader>
                  <h1 className="text-xl font-bold">Create a new account</h1>
                  <p className="text-sm mt-1">
                    Enter your details to get started
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Username"
                      value={signUpForm.userName}
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          userName: e.target.value,
                        })
                      }
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      value={signUpForm.userEmail}
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          userEmail: e.target.value,
                        })
                      }
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={signUpForm.password}
                      onChange={(e) =>
                        setSignUpForm({
                          ...signUpForm,
                          password: e.target.value,
                        })
                      }
                    />
                    <Button disabled={!isSignUpValid}>Sign Up</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
