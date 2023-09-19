import React from 'react'
import Image from 'next/image'
import { Inter, Josefin_Sans } from 'next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({ weight: "600", subsets: ["latin"] })
function Email() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-start gap-5 px-4 lg:px-10 py-6 ${inter.className}`}>
      <div className=''><h1 className="text-3xl text-center max-w-lg font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400 tracking-wide">Why Hire</h1>
        <h2 className={`text-center text-5xl font-heading font-extrabold ${josefin.className}`}>Vinit Gupta</h2></div>
      <div className='w-[90%] lg:w-[60%] py-5 px-4 flex flex-col sm:flex-row justify-start items-center gap-5 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow'>
        <Image src="/profile.png" width={150} height={150} className={`rounded-full border-2 border-cyan-300`} />
        <div className={`h-full`}>
          <p className={`text-xl my-2 font-semibold text-slate-600`}><span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mr-2'>
            Built an App
          </span>
            to send this Email 📩 in 1 day
          </p>
          <p className={`text-xl my-2 font-semibold text-slate-600`}><span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mr-2'>
            31k+ Readers
          </span>
            on DevTo 📝
          </p>
          <p className={`text-xl my-2 font-semibold text-slate-600`}><span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-400 mr-2'>
            1 Yr+ Experience
          </span>
            in Building Websites and <span className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-700 mr-2'>
              Making Coffee
            </span> ☕
          </p>
        </div>
      </div>
      <div className={`w-[90%] lg:w-[60%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
        <p className='w-full text-start text-2xl max-w-lg font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400'>Highlights</p>
        <div className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-3 grid-flow-row`}>
          {/* 1 */}
          <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-l-0 border-r-0 sm:border-r border-r-slate-700/10 border-b border-b-slate-700/10`}>
            <Image src="/pigshell.png" width={200} height={100} className={`aspect-auto w-full rounded-lg`} />
            <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Pigshell - Image Manipulator</p>
          </Link>

          {/* 2 */}
          <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-r-0 border-l-0 sm:border-l border-l-slate-700/10 border-b border-b-slate-700/10`}>
            <Image src="/moviefling.png" width={200} height={100} className={`w-full rounded-lg`} />
            <p className={`text-xl my-4 font-semibold ${josefin.className}`}>MoveiFling - Moive Search</p>
          </Link>

          {/* 3 */}
          <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b border-b-slate-700/10 sm:border-b-0  border-l-0 border-r-0 sm:border-r border-r-slate-700/10 border-t-0 sm:border-t border-t-slate-700/10`}>
            <Image src="/featured.png" width={200} height={100} className={`aspect-auto w-full rounded-lg`} />
            <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Featured Blog on DevTo</p>
          </Link>

          {/* 4 */}
          <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b-0 border-r-0 border-t-0 sm:border-t border-t-slate-700/10 border-l-0 sm:border-l border-l-slate-700/10`}>
            <Image src="/lynkit.png" width={200} height={100} className={`aspect-auto w-full rounded-lg`} />
            <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Lynkit - Cached URL Shortner</p>
          </Link>
        </div>
      </div>
      <div className={`w-[90%] lg:w-[60%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
        <p className='w-full text-start text-2xl max-w-lg font-bold leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400'>Skilled In</p>
        <div className={`flex flex-wrap gap-x-2 gap-y-4`}>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
          <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
          <img src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black"/>
          <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
          <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white"/>
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
          <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/>
          <img src=" 	https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white"/>
          <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=black"/>
          <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/>
          <img src="https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df"/>
          <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/>
          <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black"/>
          <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/>
          <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
          <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
          <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white"/>
          <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
          <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/>
          <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
          <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"/>
        </div>
      </div>
    </div>
  )
}

export default Email