import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header";

function SignIn({cartLength}) {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState({
        email: '',
        password: '',
    })

    function handleChange(event) {
        const { name, value } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        setError(prev => ({
            ...prev,
            [name]: ''
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        const newErrors = {
            email: '',
            password: '',
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters.'
        }

        setError(newErrors)

        if (Object.values(newErrors).some(error => error !== '')) {
            return
        }

        console.log(formData)

        setFormData({
            email: '',
            password: '',
        })
    }

    return (
    <div className="min-h-screen bg-[#3e0000] flex flex-col">
        <Header cart={cartLength} />
        <main className="flex flex-1 items-center justify-center px-4 py-12">
            <form onSubmit={handleSubmit} className="bg-[#fff8f3] w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-5 border border-[#d9a18d]">
                <div className="text-center mb-4">
                    <h2 className="text-4xl font-bold text-[#3e0000]"> Welcome Back! </h2>
                    <p className="text-[#8c6259] mt-3"> Sign in to continue shopping with us. </p>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#3e0000] font-semibold"> Email Address </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-white border border-[#d9b8aa] text-[#3e0000] outline-none focus:border-[#3e0000] focus:ring-2 focus:ring-[#3e0000]/20 transition"
                    />
                    {error.email && ( <p className="text-red-600 text-sm"> {error.email} </p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#3e0000] font-semibold"> Password </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="h-12 px-4 rounded-xl bg-white border border-[#d9b8aa] text-[#3e0000] outline-none focus:border-[#3e0000] focus:ring-2 focus:ring-[#3e0000]/20 transition"
                    />
                    {error.password && (
                        <p className="text-red-600 text-sm"> {error.password} </p>
                    )}
                </div>
                <button type="submit" className="h-12 bg-[#3e0000] text-white rounded-xl font-semibold hover:bg-[#5a1010] hover:scale-[1.02] active:scale-100 transition-all duration-200 cursor-pointer mt-3 shadow-lg"> Sign In </button>
                <div className="text-center border-t border-[#e5cfc4] pt-5">
                    <p className="text-[#8c6259] text-sm"> Don't have an account? {" "}
                        <Link to="/signup" className="text-[#3e0000] font-bold hover:underline"> Sign Up </Link>
                    </p>
                </div>
            </form>
        </main>
    </div>
);
}
export default SignIn;
