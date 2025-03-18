import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';

const Login = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Initialize as true

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Remove loading once user state is retrieved
                setIsLoading(false);

                await setUser(user);
                // console.log("Login successful");
                // console.log(user);
                Cookies.set('token', user.accessToken, { expires: 1 / 24 });
            } else {
                setUser(null);
                setIsLoading(false); // Remove loading if no user is authenticated
            }
        });

        return () => unsubscribe();
    }, [auth]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true); // Set loading to true while authenticating

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                Cookies.set('token', user.accessToken, { expires: 1 / 24 });
                setIsLoading(false); // Set loading to false after authentication
            })
            .catch((error) => {
                setError("WRONG EMAIL OR PASSWORD");
                // console.error(error);
                setIsLoading(false); // Set loading to false in case of an error
            });
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            // console.log("Logout successful");
            Cookies.remove('token');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='flex flex-col p-12 self-center w-fit h-fit shadow-2xl rounded-lg bg-base-300 space-y-12'>
            <h2 className='text-3xl self-center mt-12 font-bold text-base-content'>Login</h2>
            {isLoading ? (
                <>
                    <h2 className='text-2xl self-center'>Please Wait...</h2>
                    <div className="text-2xl self-center">
                        <span className="loading loading-ring loading-lg text-primary"></span>
                    </div>
                </>
            ) : user ? (
                <div className='self-center text-2xl'>
                    <p>Welcome, {user.email}</p>
                    <button className='self-center btn-wide btn btn-accent m-10' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form className='flex flex-col self-center space-y-7' onSubmit={handleLogin}>
                    <div className=''>
                        <label className='text-2xl'>Email:</label>
                        <input
                            className='input input-bordered input-secondary w-full max-w-xs'
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className=''>
                        <label className='text-2xl'>Password:</label>
                        <input
                            className='input input-bordered input-secondary w-full max-w-xs'
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <button className='self-center btn-wide btn btn-primary m-10' type='submit'>Login</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Login;
