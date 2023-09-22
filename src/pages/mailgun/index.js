import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Mailgun() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log(name, email, location)
        const data = {
            name,
            email,
            location
          };
    
          try {
            const response = await fetch("/api/mailer", {
                method: "POST",
                body: JSON.stringify(data),
              });

              console.log(response)
              setName("");
              setEmail("");
              setLocation("");
          } catch (error) {
            alert(error.message);
          }
    }
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-start gap-10 p-24 ${inter.className}`}
        >
            <div className=''><h1 className="text-6xl text-center max-w-lg font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400">Mail Synk</h1>
                <h2 className='text-center text-5xl font-heading font-extrabold'>Email Superpowered</h2></div>
            <form className='h-[70%] w-full max-w-[500px] px-4 py-5 flex flex-col items-center justify-start gap-5'>
                <div class="mb-6 w-full">
                    <label for="email" class="block mb-2 text-xl font-medium text-gray-900">Email</label>
                    <input type="email" id="email" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="name@flowbite.com" value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                    }} required />
                </div>
                <div class="mb-6 w-full">
                    <label for="password" class="block mb-2 text-xl font-medium text-gray-900">Location</label>
                    <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={location} onChange={(e)=>{
                        setLocation(e.target.value);
                    }} required />
                </div>
                <div class="mb-6 w-full">
                    <label for="password" class="block mb-2 text-xl font-medium text-gray-900">Receiver</label>
                    <input type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " value={name} onChange={(e)=>{
                        setName(e.target.value);
                    }} required />
                </div>
                
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center" onClick={sendEmail}>Submit</button>
            </form>

        </main>
    )
}
