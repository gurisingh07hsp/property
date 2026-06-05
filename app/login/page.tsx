"use client";
import { useState } from "react";
import axios from "axios";
import { useUser } from "@/context/UserContext";
import {useRouter} from "next/navigation";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, setUser} = useUser();
  const router = useRouter();

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    try {
      const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await axios.post(url, form);

      if(res.status === 200){
        if (isLogin) {
        setIsLogin(true);
        setUser(res.data.user);
        setForm({ name: "", email: "", password: "" });
        setError("");
        router.push('/');
      } else {
        setIsLogin(true);
        setForm({ name: "", email: "", password: "" });
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
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="modal-overlay">
  <div className="modal-container">

    <div className="modal-top-bar" />

    <div className="modal-content">

      <div className="modal-header">
         <div className="w-40 mx-auto">
            <img src="/assets/img/logo/proputy-logo.jpeg" alt="Proputy" />
          </div>
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

      {/* Inputs */}
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

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="submit-btn text-white"
      >
        {loading ? "Loading..." : isLogin ? "Login" : "Create account"}
      </button>
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
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
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
  justify-content: space-between;
  align-items: start;
}

.modal-icon {
  width: 40px;
  height: 40px;
  background: #1a47fb1a;
  border: 1px solid #1a47fb33;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close {
  cursor: pointer;
  background: none;
  border: none;
}

.modal-tabs {
  display: flex;
  background: #1a47fb1a;
  padding: 4px;
  border-radius: 10px;
  margin: 20px 0;
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