import React from 'react'
import { Html, Text, Body, Head, Tailwind, Img, Section, Link } from '@react-email/components'
import { Inter, Josefin_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({ weight: "600", subsets: ["latin"] })
function Email() {
  return (
    <Tailwind config={{
      theme: {
        extend: {
          backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
              'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          },
          fontFamily : {
            heading : ["Inter", 'sans-serif'],
            body : ["Lato",'sans-serif']
          }
        },
      },
      plugins: [],
    }}>
    <Html>
      <Head></Head>
      
        <Body className={`flex bg-white min-h-screen flex-col items-center justify-start gap-5 px-4 py-6 ${inter.className} background-image relative`}>
          <div className='fixed flex gap-2 top-12 left-[-60px] z-5 w-40 m-0 px-4 py-2 rotate-90'>
            <Link href="https://github.com/thevinitgupta/">
            <Img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
            </Link>
            <Link href="https://linkedin.com/in/thevinitgupta/">
            <Img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
            </Link>
            <Link className='h-full object-contain' href="https://bit.ly/Vinit_Gupta_Resume">
            <Img alt="Static Badge" className='h-full' src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/b8c895ff-94d4-4dea-91ba-53ceb6cf1075"/>

            </Link>
          </div>
          <div className=''>
            <h1 className="text-3xl text-center max-w-lg font-bold leading-relaxed my-2 text-cyan-400 tracking-wide">
              Why Hire
            </h1>
            <h2 className={`text-center text-5xl my-2 font-heading font-extrabold ${josefin.className}`}>
              Vinit Gupta  🇮🇳
            </h2>
          </div>
          <div className='w-[90%] py-5 px-4 flex flex-row justify-start items-center gap-5 bg-white rounded-md shadow-md'>
            <Img src="https://avatars.githubusercontent.com/u/65801700?v=4" width={150} height={150} className={`rounded-full border-2 border-cyan-300`} />

            <div className={`h-full`}>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                <span className='text-2xl text-purple-400 mr-2'>
                Built an App
              </span>
                to send this Email 📩 in 1 day
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                <span className='text-2xl text-purple-400 mr-2'>
                31k+ Readers
              </span>
                on DevTo 📝
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                <span className='text-2xl text-purple-400 mr-2'>
                1 Yr+ Experience
              </span>
                in Building Websites and 
                <span className='text-2xl text-amber-400 mx-2'>
                  Making Coffee
                </span> ☕
              </p>
            </div>
          </div>
          <div className={`w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
            <p className='w-full my-1 text-start text-2xl max-w-lg font-bold leading-relaxed text-cyan-400'>Skilled In</p>
            <div className={`flex flex-wrap gap-x-2 gap-y-4`}>
            <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
            <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
            <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" />
              
              <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
              <img src=" 	https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" />
              <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=black" />
              <img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" />
              <img src="https://img.shields.io/badge/bun-282a36?style=for-the-badge&logo=bun&logoColor=fbf0df" />
              <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />
              <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
              <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />
              
              
              <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
              
              <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=React_Query&logoColor=white" />
              <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
              <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
              
              <img src="https://img.shields.io/badge/Vue%20js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D" />
              <img src="https://img.shields.io/badge/Solidity-e6e6e6?style=for-the-badge&logo=solidity&logoColor=black" />
            </div>
          </div>
          <div className={`w-[90%] py-2 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
            <p className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Highlights
              </p>
            <div className={`w-full grid grid-cols-2 gap-3 grid-flow-row`}>
              {/* 1 */}
              <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-l-0 border-r border-r-slate-700/10 border-b border-b-slate-700/10`}>
                <Img alt="pigshell" src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/fa71377e-4994-465c-af70-5698014ee88a" width={200} height={100} className={`aspect-auto h-full rounded-lg`} />
                <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Pigshell - Image Manipulator</p>
              </Link>

              {/* 2 */}
              <Link href="https://moviefling.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-r-0 border-l border-l-slate-700/10 border-b border-b-slate-700/10`}>
                <Img src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/1527023c-293b-4b34-ae31-4f29687fb1dd" width={200} height={100} className={`h-full rounded-lg`} />
                <p className={`text-xl my-4 font-semibold ${josefin.className}`}>MoveiFling - Moive Search</p>
              </Link>

              {/* 3 */}
              <Link href="https://dev.to/thevinitgupta" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b border-b-slate-700/10 sm:border-b-0  border-l-0 border-r border-r-slate-700/10 border-t border-t-slate-700/10`}>
                <Img alt="featured" src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/440abfe7-9657-4b44-bed8-0cd4d1449dff" width={200} height={100} className={`aspect-auto h-full rounded-lg`} />
                <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Featured Blog on DevTo</p>
              </Link>

              {/* 4 */}
              <Link href="https://github.com/thevinitgupta/lynkit-backend" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b-0 border-r-0 border-t border-t-slate-700/10 border-l border-l-slate-700/10`}>
                <Img src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/f1936506-6831-4156-86a2-a2b23cf1033e" width={200} height={100} className={`aspect-auto h-full rounded-lg`} />
                <p className={`text-xl my-4 font-semibold ${josefin.className}`}>Lynkit - Cached URL Shortner</p>
              </Link>
            </div>
          </div>
          <div className='w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md'>
          <p className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Facts About Me ⚡
              </p>

            <div className={`h-full`}>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
              When I am not Reading 📚, I'm 
                <span className='text-2xl text-purple-400 mx-2'>
                playing Basketball 🏀
              </span>
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                I also do
                <span className='text-2xl text-purple-400 mx-2'>
                Open Source 🌐
              </span>
                contributions
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                I am good at
                <span className='text-2xl text-purple-400 mx-2'>
                Painting and Sketching 🎨
              </span>
              </p>
            </div>
          </div>
          <div className='w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md'>
          <p className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Ways to Contact Me 📞
              </p>

            <div className={`h-full`}>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
              Email 📩 
                <span className='text-2xl text-purple-400 mx-2'>
                thevinitgupta@gmail.com
              </span>
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                Phone 📲
                <span className='text-2xl text-purple-400 mx-2'>
                +91 8389073221
              </span>
              </p>
              <p className={`text-xl my-2 font-semibold text-slate-600`}>
                Portfolio 🚀
                <span className='text-2xl text-purple-400 mx-2'>
                <Link href="https://thevinitgupta.netlify.app">
                  thevinitgupta
                  </Link>
              </span>
              </p>
            </div>
          </div>
        </Body>
    </Html>
      </Tailwind>
  )
}

export default Email