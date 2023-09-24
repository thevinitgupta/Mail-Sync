import React from 'react'
import { Html, Text, Body, Head, Container, Preview, Heading, Tailwind, Img, Section, Link } from '@react-email/components'
import { Inter, Josefin_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({ weight: "600", subsets: ["latin"] })
function Email({name}) {
  return (
    
    <Html>
      <Head></Head>
      <Preview>Why {name} should Hire Vinit Gupta!!</Preview>
      <Tailwind>
        <Body className={`bg-white`}>
          <Container className="w-[450px] px-4 py-6 background-image relative">
          <Section className='fixed flex gap-2 top-12 left-[-60px] z-5 w-40 m-0 px-4 py-2 rotate-90'>
            {/* <Link href="https://github.com/thevinitgupta/">
            <Img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
            </Link>
            <Link href="https://linkedin.com/in/thevinitgupta/">
            <Img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
            </Link> */}
            <Link className='h-full object-contain' href="https://bit.ly/Vinit_Gupta_Resume">
            <Img alt="Static Badge" className='h-full' src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/b8c895ff-94d4-4dea-91ba-53ceb6cf1075"/>

            </Link>
          </Section>
          <Section className=''>
            <Heading className="text-3xl text-start max-w-lg font-bold leading-relaxed my-2 text-cyan-400 tracking-wide">
              Why {name} should Hire
            </Heading>
            <Heading className={`text-start text-5xl my-2 font-heading font-extrabold ${josefin.className}`}>
              Vinit Gupta  🇮🇳
            </Heading>
          </Section>
          <Section className='w-[90%] py-5 px-4 flex flex-row justify-start items-center gap-5 bg-white rounded-md shadow-md'>
            <Img width={450} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ce957ruayqqd1fu2ux1l.png" />
          </Section>
          <Section className={`w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
            <Img width={450}  src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4u9mbjnf2d4x0xf7yqka.png"/>
          </Section>
          <Section className={`w-[90%] py-2 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md`}>
            <Text className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Highlights
              </Text>
            <Section className={`w-full`}>
              {/* 1 */}
              <Link href="https://pigshell.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-l-0 border-r border-r-slate-700/10 border-b border-b-slate-700/10`}>
                <Img alt="pigshell" src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/fa71377e-4994-465c-af70-5698014ee88a" width={200} height={100} className={`aspect-auto h-full rounded-lg mx-4`} />
                <Text className={`text-2xl my-4 font-semibold ${josefin.className}`}>Pigshell - Image Manipulator</Text>
              </Link>

              {/* 2 */}
              <Link href="https://moviefling.netlify.app/" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-t-0 border-r-0 border-l border-l-slate-700/10 border-b border-b-slate-700/10`}>
                <Img src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/1527023c-293b-4b34-ae31-4f29687fb1dd" width={200} height={100} className={`h-full mx-4 rounded-lg`} />
                <Text className={`text-2xl my-4 font-semibold ${josefin.className}`}>MoveiFling - Moive Search</Text>
              </Link>

              {/* 3 */}
              <Link href="https://dev.to/thevinitgupta" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b border-b-slate-700/10  border-l-0 border-r border-r-slate-700/10 border-t border-t-slate-700/10`}>
                <Img alt="featured" src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/440abfe7-9657-4b44-bed8-0cd4d1449dff" width={200} height={100} className={`aspect-auto mx-4 h-full rounded-lg`} />
                <Text className={`text-2xl my-4 font-semibold ${josefin.className}`}>Featured Blog on DevTo</Text>
              </Link>

              {/* 4 */}
              <Link href="https://github.com/thevinitgupta/lynkit-backend" className={`px-4 py-6 flex flex-col items-center justify-center rounded-sm border-b-0 border-r-0 border-t border-t-slate-700/10 border-l border-l-slate-700/10`}>
                <Img src="https://github.com/thevinitgupta/100-Days-of-Learning/assets/65801700/f1936506-6831-4156-86a2-a2b23cf1033e" width={200} height={100} className={`aspect-auto mx-4 h-full rounded-lg`} />
                <Text className={`text-2xl my-4 font-semibold ${josefin.className}`}>Lynkit - Cached URL Shortner</Text>
              </Link>
            </Section>
          </Section>
          <Section className='w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md'>
          <Text className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Facts About Me ⚡
              </Text>

            <Section className={`h-full`}>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
              When I am not Reading 📚, I'm 
                <span className='text-2xl text-purple-400 mx-2'>
                playing Basketball 🏀
              </span>
              </Text>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
                I also do
                <span className='text-2xl text-purple-400 mx-2'>
                Open Source 🌐
              </span>
                contributions
              </Text>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
                I am good at
                <span className='text-2xl text-purple-400 mx-2'>
                Painting and Sketching 🎨
              </span>
              </Text>
            </Section>
          </Section>
          <Section className='w-[90%] py-5 px-4 flex flex-col justify-start items-start gap-5 bg-white rounded-md shadow-md'>
          <Text className='w-full my-1 text-start text-2xl max-w-lg font-bold text-cyan-400'>
              Ways to Contact Me 📞
              </Text>

            <Section className={`h-full`}>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
              Email 📩 
                <span className='text-2xl text-purple-400 mx-2'>
                thevinitgupta@gmail.com
              </span>
              </Text>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
                Phone 📲
                <span className='text-2xl text-purple-400 mx-2'>
                +91 8389073221
              </span>
              </Text>
              <Text className={`text-xl my-2 font-semibold text-slate-600`}>
                Portfolio 🚀
                <span className='text-2xl text-purple-400 mx-2'>
                <Link href="https://thevinitgupta.netlify.app">
                  thevinitgupta
                  </Link>
              </span>
              </Text>
            </Section>
          </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default Email