// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useUser } from "@/context/UserContext";
// import { useRouter } from "next/navigation";

// type Role = "developer" | "agent" | null;

// export default function Login() {
//   const [selectedRole, setSelectedRole] = useState<Role>(null);
//   const [isLogin, setIsLogin] = useState(true);
//   const [form, setForm] = useState({ name: "", email: "", role: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const { setUser } = useUser();
//   const router = useRouter();

//   const handleRoleSelect = (role: Role) => {
//     setSelectedRole(role);
//     setForm({ name: "", email: "", role: role || "", password: "" });
//     setError("");
//   };

//   const handleSubmit = async () => {
//     setError("");
//     setLoading(true);
//     try {
//       const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
//       const res = await axios.post(url, form);

//       if (res.status === 200) {
//         if (isLogin) {
//           setUser(res.data.user);
//           setForm({ name: "", email: "", role: "", password: "" });
//           setError("");
//           router.push("/");
//         } else {
//           setIsLogin(true);
//           setForm({ name: "", email: "", role: selectedRole || "", password: "" });
//           setError("");
//         }
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
//     setForm({ name: "", email: "", role: selectedRole || "", password: "" });
//   };

//   const handleBack = () => {
//     setSelectedRole(null);
//     setIsLogin(true);
//     setError("");
//     setForm({ name: "", email: "", role: "", password: "" });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-container">
//         <div className="modal-top-bar" />

//         <div className="modal-content">
//           {/* Logo */}
//           <div className="modal-header">
//             <div className="w-40 mx-auto">
//               <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
//             </div>
//           </div>

//           {/* STEP 1: Role Selection */}
//           {!selectedRole ? (
//             <div className="role-selection">
//               <p className="role-title">Who are you?</p>
//               <p className="role-subtitle">Select your role to continue</p>

//               <div className="role-cards">
//                 <button className="role-card" onClick={() => handleRoleSelect("developer")}>
//                   <div className="role-icon">💻</div>
//                   <span className="role-name">Developer</span>
//                   {/* <span className="role-desc">Build &amp; integrate</span> */}
//                 </button>

//                 <button className="role-card" onClick={() => handleRoleSelect("agent")}>
//                   <div className="role-icon">🏢</div>
//                   <span className="role-name">Agent</span>
//                   {/* <span className="role-desc">List &amp; manage</span> */}
//                 </button>
//               </div>
//             </div>
//           ) : (
//             /* STEP 2: Login / Signup Form */
//             <>
//               {/* Back + Role Badge */}
//               <div className="form-top-row">
//                 <button className="back-btn" onClick={handleBack}>← Back</button>
//                 <span className="role-badge">
//                   {selectedRole === "developer" ? "💻 Developer" : "🏢 Agent"}
//                 </span>
//               </div>

//               {/* Tabs */}
//               <div className="modal-tabs">
//                 <button
//                   onClick={() => switchMode(true)}
//                   className={`tab-btn ${isLogin ? "active" : ""}`}
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={() => switchMode(false)}
//                   className={`tab-btn ${!isLogin ? "active" : ""}`}
//                 >
//                   Sign up
//                 </button>
//               </div>

//               {/* Fields */}
//               <div className="modal-fields">
//                 {!isLogin && (
//                   <input
//                     className="input"
//                     placeholder="Full name"
//                     value={form.name}
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   />
//                 )}
//                 <input
//                   className="input"
//                   type="email"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//                 <input
//                   className="input"
//                   type="password"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}
//                 />
//               </div>

//               {error && <p className="error">{error}</p>}

//               <button onClick={handleSubmit} disabled={loading} className="submit-btn text-white">
//                 {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       <style jsx>{`
//         .modal-overlay {
//           position: fixed;
//           inset: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           z-index: 50;
//         }
//         .modal-container {
//           width: 340px;
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//         }
//         .modal-top-bar {
//           height: 4px;
//           width: 100%;
//           background: #1800ad;
//         }
//         .modal-content {
//           padding: 20px;
//         }
//         .modal-header {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           margin-bottom: 4px;
//         }

//         /* Role Selection */
//         .role-selection {
//           margin-top: 12px;
//           text-align: center;
//         }
//         .role-title {
//           font-size: 16px;
//           font-weight: 700;
//           color: #111827;
//           margin-bottom: 4px;
//         }
//         .role-subtitle {
//           font-size: 12px;
//           color: #6b7280;
//           margin-bottom: 20px;
//         }
//         .role-cards {
//           display: flex;
//           gap: 12px;
//           justify-content: center;
//         }
//         .role-card {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 6px;
//           padding: 18px 10px;
//           border-radius: 14px;
//           border: 1.5px solid #e5e7eb;
//           background: #f9fafb;
//           cursor: pointer;
//           transition: all 0.15s ease;
//         }
//         .role-card:hover {
//           border-color: #1800ad;
//           background: #f0f1ff;
//         }
//         .role-icon {
//           font-size: 26px;
//           background: #1800ad1a;
//           border-radius: 10px;
//           width: 48px;
//           height: 48px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .role-name {
//           font-size: 13px;
//           font-weight: 700;
//           color: #111827;
//         }
//         .role-desc {
//           font-size: 10px;
//           color: #6b7280;
//         }

//         /* Form top row */
//         .form-top-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 4px;
//         }
//         .back-btn {
//           background: none;
//           border: none;
//           font-size: 12px;
//           color: #6b7280;
//           cursor: pointer;
//           padding: 0;
//         }
//         .back-btn:hover {
//           color: #1800ad;
//         }
//         .role-badge {
//           font-size: 11px;
//           font-weight: 600;
//           color: #1800ad;
//           background: #1a47fb1a;
//           padding: 3px 10px;
//           border-radius: 20px;
//           border: 1px solid #1a47fb33;
//         }

//         /* Tabs */
//         .modal-tabs {
//           display: flex;
//           background: #1a47fb1a;
//           padding: 4px;
//           border-radius: 10px;
//           margin: 12px 0;
//         }
//         .tab-btn {
//           flex: 1;
//           padding: 8px;
//           border: none;
//           background: transparent;
//           font-size: 14px;
//           color: #9ca3af;
//           cursor: pointer;
//         }
//         .tab-btn.active {
//           background: white;
//           color: #1800ad;
//           border-radius: 8px;
//           border: 1px solid #1a47fb33;
//         }

//         /* Fields */
//         .modal-fields {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }
//         .input {
//           padding: 10px;
//           border-radius: 10px;
//           border: 1px solid #e5e7eb;
//           font-size: 14px;
//           width: 100%;
//           box-sizing: border-box;
//         }
//         .input:focus {
//           outline: none;
//           border-color: #1800ad;
//           box-shadow: 0 0 0 2px #1a47fb1a;
//         }

//         .error {
//           margin-top: 10px;
//           font-size: 12px;
//           color: red;
//           background: #fef2f2;
//           padding: 8px;
//           border-radius: 8px;
//         }
//         .submit-btn {
//           margin-top: 15px;
//           width: 100%;
//           padding: 10px;
//           border-radius: 10px;
//           background: #1800ad;
//           border: none;
//           cursor: pointer;
//           font-weight: 500;
//         }
//         .submit-btn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

type Role = "developer" | "agent" | null;

export default function Login() {
  const [selectedRole, setSelectedRole] = useState<Role>("agent");
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", role: "agent", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setForm({ ...form, role: role || "" });
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
          setForm({ name: "", email: "", role: selectedRole || "", password: "" });
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

  return (
    <div className="page">
      {/* LEFT: promo panel */}
      <div className="left-panel">
        <div className="left-content">
          <div className="logo-wrap">
            <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
          </div>

          <h1 className="hero-title">
            List, sell or rent your property <span className="underline-word">faster</span> with
            Proputy
          </h1>
          <p className="hero-sub">
            One platform for owners, agents, developers and builders to manage properties
            end-to-end.
          </p>

          <ul className="hero-list">
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Post your property for free
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Connect with verified clients
            </li>
            <li>
              <span className="tick">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Get personalised support, faster
            </li>
          </ul>

          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>
      </div>

      {/* RIGHT: form panel */}
      <div className="right-panel">
        <div className="form-card">
          <p className="welcome-text">Welcome back</p>
          <h2 className="form-title">Login to your account</h2>

          {/* Role selector */}
          <div className="role-tabs">
            <button
              type="button"
              onClick={() => handleRoleSelect("agent")}
              className={`role-tab ${selectedRole === "agent" ? "active" : ""}`}
            >
              <span className="role-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 21V8.4L12 3l8 5.4V21M9 21v-6h6v6M4 21h16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Owner
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect("developer")}
              className={`role-tab ${selectedRole === "developer" ? "active" : ""}`}
            >
              <span className="role-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 19h16M5 19v-3a7 7 0 0114 0v3M12 6V3M9.5 19l1-4.5h3l1 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Broker / Builder
            </button>
          </div>

          {/* Fields */}
          <div className="fields">
            {!isLogin && (
              <div className="input-wrap">
                <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 21a8 8 0 10-16 0M12 11a4 4 0 100-8 4 4 0 000 8z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  className="input"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
            )}

            <div className="input-wrap">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16v12H4V6zm0 0l8 7 8-7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                className="input"
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="input-wrap">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 11V8a6 6 0 1112 0v3M5 11h14v9H5v-9z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                className="input"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
          </div>

          {error && <p className="error">{error}</p>}

          <button onClick={handleSubmit} disabled={loading} className="submit-btn">
            {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
          </button>

          <p className="switch-text">
            {isLogin ? (
              <>
                New to Proputy?{" "}
                <button className="link-btn" onClick={() => switchMode(false)}>
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button className="link-btn" onClick={() => switchMode(true)}>
                  Login here
                </button>
              </>
            )}
          </p>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          background: #fff;
        }

        /* ===== LEFT PANEL ===== */
        .left-panel {
          position: relative;
          background: linear-gradient(135deg, #3a1ad6 0%, #2410b8 50%, #1800ad 100%);
          color: white;
          padding: 40px 28px;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .left-content {
          position: relative;
          z-index: 2;
          max-width: 480px;
          margin: 0 auto;
        }
        .logo-wrap {
          width: 130px;
          margin-bottom: 22px;
        }
        .logo-wrap img {
          width: 100%;
          border-radius: 8px;
          display: block;
        }
        .hero-title {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 12px 0;
        }
        .underline-word {
          position: relative;
          display: inline-block;
        }
        .underline-word::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 100%;
          height: 4px;
          background: #facc15;
          border-radius: 2px;
        }
        .hero-sub {
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0 0 24px 0;
        }
        .hero-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .hero-list li {
          font-size: 14.5px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .tick {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: rgba(250, 204, 21, 0.18);
          color: #facc15;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tick svg {
          width: 14px;
          height: 14px;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          z-index: 1;
        }
        .orb-1 {
          width: 280px;
          height: 280px;
          background: rgba(255, 255, 255, 0.06);
          top: -100px;
          right: -100px;
        }
        .orb-2 {
          width: 200px;
          height: 200px;
          background: rgba(250, 204, 21, 0.08);
          bottom: -80px;
          left: -60px;
        }

        /* ===== RIGHT PANEL ===== */
        .right-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px 24px 48px;
          background: #fff;
        }
        .form-card {
          width: 100%;
          max-width: 380px;
        }
        .welcome-text {
          font-size: 13px;
          font-weight: 600;
          color: #1800ad;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 6px 0;
        }
        .form-title {
          font-size: 24px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 22px 0;
        }

        .role-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
        }
        .role-tab {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 14px 8px;
          border-radius: 14px;
          border: 1.5px solid #e5e7eb;
          background: #f9fafb;
          color: #6b7280;
          font-size: 12.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .role-tab:hover {
          border-color: #1800ad55;
        }
        .role-tab.active {
          border-color: #1800ad;
          background: #f0eefe;
          color: #1800ad;
        }
        .role-icon {
          width: 30px;
          height: 30px;
          border-radius: 9px;
          background: rgba(24, 0, 173, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .role-icon svg {
          width: 16px;
          height: 16px;
        }

        .fields {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 13px;
          width: 17px;
          height: 17px;
          color: #9ca3af;
          pointer-events: none;
        }
        .input {
          width: 100%;
          padding: 12px 14px 12px 40px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
          box-sizing: border-box;
          background: #fafafa;
        }
        .input:focus {
          outline: none;
          border-color: #1800ad;
          background: #fff;
          box-shadow: 0 0 0 3px #1800ad14;
        }

        .error {
          margin-top: 12px;
          font-size: 12.5px;
          color: #dc2626;
          background: #fef2f2;
          padding: 9px 10px;
          border-radius: 10px;
        }

        .submit-btn {
          margin-top: 18px;
          width: 100%;
          padding: 13px;
          border-radius: 12px;
          background: linear-gradient(135deg, #2bbd8e, #5ddbb0);
          color: white;
          border: none;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .submit-btn:hover {
          opacity: 0.92;
        }
        .submit-btn:active {
          transform: scale(0.99);
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .switch-text {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-top: 16px;
        }
        .link-btn {
          background: none;
          border: none;
          padding: 0;
          font-size: 13px;
          font-weight: 700;
          color: #1800ad;
          text-decoration: underline;
          cursor: pointer;
        }

        /* ===== RESPONSIVE ===== */
        @media (min-width: 901px) {
          .page {
            flex-direction: row;
          }
          .left-panel {
            width: 50%;
            min-height: 100vh;
            padding: 60px;
          }
          .right-panel {
            width: 50%;
            min-height: 100vh;
          }
          .hero-title {
            font-size: 34px;
          }
        }

        @media (max-width: 900px) {
          .left-panel {
            padding: 32px 24px 60px;
          }
          .hero-title {
            font-size: 24px;
          }
          .hero-sub {
            font-size: 13.5px;
          }
        }

        @media (max-width: 480px) {
          .role-tabs {
            gap: 8px;
          }
          .role-tab {
            font-size: 11.5px;
            padding: 12px 6px;
          }
        }
      `}</style>
    </div>
  );
}