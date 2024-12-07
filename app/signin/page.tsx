'use client'; 

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import { login } from '../../store/userSlice'; 

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize the router

  const handleSignIn = async () => {
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        dispatch(login({ email, name: data.name }));
        setSuccess(data.message);

        // Redirect to the home page after a short delay
        setTimeout(() => {
          router.push('/'); // Navigate to the home page
        }, 1000);
      } else {
        setError(data.error);  
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
      setError('An error occurred during sign-in. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">{success}</p>}
      </div>
    </div>
  );
}
