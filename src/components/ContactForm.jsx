import { useState } from "react"

function ContactForm(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        contactMe: '',
        isAccess: true
    })

    function handleChange(event){
        const { name, value, type, checked } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();

        console.log(formData); // zapros depi api

        setFormData({
             fullName: '',
             email: '',
             phone: '',  
             message: '', 
             contactMe:'', 
             isAccess: true
            })
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center scroll-animate">
            <h2 className="text-3xl font-bold mt-10">Contact Us</h2>
            <div className="flex w-full flex-col items-center justify-center gap-6 px-5 sm:gap-8 md:flex-row md:max-w-2xl md:items-center md:gap-3 md:px-3 lg:max-w-6xl lg:gap-16 lg:px-5 xl:gap-25">
                <div className="flex flex-col gap-5 w-full mt-5 sm:w-full md:w-1/2 md:gap-4 lg:w-1/2">
                    <input
                        className="border rounded-2xl h-12 px-3 w-full"
                        name="fullName"
                        type="text"
                        placeholder="Type your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="border rounded-2xl h-12 px-3 w-full"
                        type="email"
                        name="email"
                        placeholder="Type your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className="border rounded-2xl h-12 px-3 w-full"
                        type="tel"
                        name="phone"
                        placeholder="+374-xx-xx-xx-xx"
                        pattern="\+374-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <select
                        className="border rounded-2xl h-12 px-3 w-full"
                        name="contactMe"
                        value={formData.contactMe}
                        onChange={handleChange}
                    >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="isAccess"
                            onChange={handleChange}
                            checked={formData.isAccess}
                        />
                        Access ...
                    </label>
                    <button type="submit" className="bg-white text-[#3e0000] font-semibold rounded-xl h-12 hover:bg-white/80"> Submit </button>
                </div>
                <div className="w-full mt-2 md:w-1/2 md:mt-5 lg:w-1/2">
                    <textarea
                        name="message"
                        className="border rounded-2xl p-3 w-full h-72 sm:h-80 md:h-72 lg:h-72"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    )
}

export default ContactForm

