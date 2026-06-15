// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useUser } from "@/context/UserContext";
// import {useRouter} from "next/navigation";

// export default function Login() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({ name: "", email: "", role: '', password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const {setUser} = useUser();
//   const router = useRouter();

//   const handleSubmit = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
//       const res = await axios.post(url, form);

//       if(res.status === 200){
//         if (isLogin) {
//         setIsLogin(true);
//         setUser(res.data.user);
//         setForm({ name: "", email: "", role: '', password: "" });
//         setError("");
//         router.push('/');
//       } else {
//         setIsLogin(true);
//         setForm({ name: "", email: "", role: '', password: "" });
//         setError("");
//       }
//       }


//     } catch (err: any) {
//       setError(err.response?.data?.message || "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const switchMode = (mode: boolean) => {
//     setIsLogin(mode);
//     setError("");
//     setForm({ name: "", email: "", role: '', password: "" });
//   };

//   return (
//     <div className="modal-overlay">
//   <div className="modal-container">

//     <div className="modal-top-bar" />

//     <div className="modal-content">

//       <div className="modal-header">
//          <div className="w-40 mx-auto">
//             <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
//           </div>
//       </div>

//       {/* Tabs */}
//       <div className="modal-tabs">
//         <button
//           onClick={() => switchMode(true)}
//           className={`tab-btn ${isLogin ? "active" : ""}`}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => switchMode(false)}
//           className={`tab-btn ${!isLogin ? "active" : ""}`}
//         >
//           Sign up
//         </button>
//       </div>

//       {/* Inputs */}
//       <div className="modal-fields">
//         {!isLogin && (
//           <input
//             className="input"
//             placeholder="Full name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//         )}

//         <input
//           className="input"
//           type="email"
//           placeholder="Email address"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />

//         <input
//           className="input"
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//         />
//       </div>

//       {error && <p className="error">{error}</p>}

//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="submit-btn text-white"
//       >
//         {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
//       </button>
//     </div>
//   </div>
//   <style jsx>{`
// .modal-overlay {
//   position: fixed;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 50;
// }

// .modal-container {
//   width: 340px;
//   background: white;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 10px 25px rgba(0,0,0,0.1);
// }

// .modal-top-bar {
//   height: 4px;
//   width: 100%;
//   background: #1800ad;
// }

// .modal-content {
//   padding: 20px;
// }

// .modal-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: start;
// }

// .modal-icon {
//   width: 40px;
//   height: 40px;
//   background: #1a47fb1a;
//   border: 1px solid #1a47fb33;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .modal-close {
//   cursor: pointer;
//   background: none;
//   border: none;
// }

// .modal-tabs {
//   display: flex;
//   background: #1a47fb1a;
//   padding: 4px;
//   border-radius: 10px;
//   margin: 20px 0;
// }

// .tab-btn {
//   flex: 1;
//   padding: 8px;
//   border: none;
//   background: transparent;
//   font-size: 14px;
//   color: #9ca3af;
//   cursor: pointer;
// }

// .tab-btn.active {
//   background: white;
//   color: #1800ad;
//   border-radius: 8px;
//   border: 1px solid #1a47fb33;
// }

// .modal-fields {
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// }

// .input {
//   padding: 10px;
//   border-radius: 10px;
//   border: 1px solid #e5e7eb;
//   font-size: 14px;
// }

// .input:focus {
//   outline: none;
//   border-color: #1800ad;
//   box-shadow: 0 0 0 2px #1a47fb1a;
// }

// .error {
//   margin-top: 10px;
//   font-size: 12px;
//   color: red;
//   background: #fef2f2;
//   padding: 8px;
//   border-radius: 8px;
// }

// .submit-btn {
//   margin-top: 15px;
//   width: 100%;
//   padding: 10px;
//   border-radius: 10px;
//   background: #1800ad;
//   border: none;
//   cursor: pointer;
//   font-weight: 500;
// }

// .submit-btn:disabled {
//   opacity: 0.6;
//   cursor: not-allowed;
// }
// `}</style>
// </div>

//   );
// }

"use client";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

type Role = "developer" | "agent" | null;

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", role: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setForm({ name: "", email: "", role: role || "", password: "" });
    setError("");
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await axios.post(url, form);

      if (res.status === 200) {
        if (isLogin) {
          setUser(res.data.user);
          setForm({ name: "", email: "", role: "", password: "" });
          setError("");
          router.push("/");
        } else {
          setIsLogin(true);
          setForm({ name: "", email: "", role: selectedRole || "", password: "" });
          setError("");
        }
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const switchMode = (mode: boolean) => {
    setIsLogin(mode);
    setError("");
    setForm({ name: "", email: "", role: selectedRole || "", password: "" });
  };

  const handleBack = () => {
    setSelectedRole(null);
    setIsLogin(true);
    setError("");
    setForm({ name: "", email: "", role: "", password: "" });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-top-bar" />

        <div className="modal-content">
          {/* Logo */}
          <div className="modal-header">
            <div className="w-40 mx-auto">
              <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
            </div>
          </div>

          {/* STEP 1: Role Selection */}
          {!selectedRole ? (
            <div className="role-selection">
              <p className="role-title">Who are you?</p>
              <p className="role-subtitle">Select your role to continue</p>

              <div className="role-cards">
                <button className="role-card" onClick={() => handleRoleSelect("developer")}>
                  <div className="role-icon">💻</div>
                  <span className="role-name">Developer</span>
                  {/* <span className="role-desc">Build &amp; integrate</span> */}
                </button>

                <button className="role-card" onClick={() => handleRoleSelect("agent")}>
                  <div className="role-icon">🏢</div>
                  <span className="role-name">Agent</span>
                  {/* <span className="role-desc">List &amp; manage</span> */}
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: Login / Signup Form */
            <>
              {/* Back + Role Badge */}
              <div className="form-top-row">
                <button className="back-btn" onClick={handleBack}>← Back</button>
                <span className="role-badge">
                  {selectedRole === "developer" ? "💻 Developer" : "🏢 Agent"}
                </span>
              </div>

              {/* Tabs */}
              <div className="modal-tabs">
                <button
                  onClick={() => switchMode(true)}
                  className={`tab-btn ${isLogin ? "active" : ""}`}
                >
                  Login
                </button>
                <button
                  onClick={() => switchMode(false)}
                  className={`tab-btn ${!isLogin ? "active" : ""}`}
                >
                  Sign up
                </button>
              </div>

              {/* Fields */}
              <div className="modal-fields">
                {!isLogin && (
                  <input
                    className="input"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                )}
                <input
                  className="input"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button onClick={handleSubmit} disabled={loading} className="submit-btn text-white">
                {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
              </button>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
        }
        .modal-container {
          width: 340px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .modal-top-bar {
          height: 4px;
          width: 100%;
          background: #1800ad;
        }
        .modal-content {
          padding: 20px;
        }
        .modal-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 4px;
        }

        /* Role Selection */
        .role-selection {
          margin-top: 12px;
          text-align: center;
        }
        .role-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 4px;
        }
        .role-subtitle {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 20px;
        }
        .role-cards {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        .role-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 18px 10px;
          border-radius: 14px;
          border: 1.5px solid #e5e7eb;
          background: #f9fafb;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .role-card:hover {
          border-color: #1800ad;
          background: #f0f1ff;
        }
        .role-icon {
          font-size: 26px;
          background: #1800ad1a;
          border-radius: 10px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .role-name {
          font-size: 13px;
          font-weight: 700;
          color: #111827;
        }
        .role-desc {
          font-size: 10px;
          color: #6b7280;
        }

        /* Form top row */
        .form-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .back-btn {
          background: none;
          border: none;
          font-size: 12px;
          color: #6b7280;
          cursor: pointer;
          padding: 0;
        }
        .back-btn:hover {
          color: #1800ad;
        }
        .role-badge {
          font-size: 11px;
          font-weight: 600;
          color: #1800ad;
          background: #1a47fb1a;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid #1a47fb33;
        }

        /* Tabs */
        .modal-tabs {
          display: flex;
          background: #1a47fb1a;
          padding: 4px;
          border-radius: 10px;
          margin: 12px 0;
        }
        .tab-btn {
          flex: 1;
          padding: 8px;
          border: none;
          background: transparent;
          font-size: 14px;
          color: #9ca3af;
          cursor: pointer;
        }
        .tab-btn.active {
          background: white;
          color: #1800ad;
          border-radius: 8px;
          border: 1px solid #1a47fb33;
        }

        /* Fields */
        .modal-fields {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .input {
          padding: 10px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }
        .input:focus {
          outline: none;
          border-color: #1800ad;
          box-shadow: 0 0 0 2px #1a47fb1a;
        }

        .error {
          margin-top: 10px;
          font-size: 12px;
          color: red;
          background: #fef2f2;
          padding: 8px;
          border-radius: 8px;
        }
        .submit-btn {
          margin-top: 15px;
          width: 100%;
          padding: 10px;
          border-radius: 10px;
          background: #1800ad;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}