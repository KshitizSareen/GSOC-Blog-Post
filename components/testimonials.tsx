import React from 'react';

interface PeopleInterface{
  description: String;
  name: String;
  linkedInUrl: string;
}

const People : React.FC<PeopleInterface> = ({description,name,linkedInUrl}) =>{
  return(
    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
    <div>
      <div className="relative inline-flex flex-col mb-4">
        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
        </svg>
      </div>
    </div>
    <blockquote className="text-lg text-gray-400 grow">{description}</blockquote>
    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
      <cite className="text-gray-200 not-italic">{name}</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href={linkedInUrl}>LinkedIn</a>
    </div>
  </div>
  )
}

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet some of my Mentors and Collaborators</h2>
            <p className="text-xl text-gray-400">I would like to thank my mentors, collaborators, INCF and the Google Summer of Code Program for this opportunity</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <People 
            description={"Dr. Cengiz Gunay was my mentor throughout this project. He was vey supportive throughout the entire phase. His experience and knowledge as a software engineer and researcher in computational neuroscience, and his mentorship were invaluable as it gave me a very clear direction on how I should implement my project goals."} 
            name={"Dr. Cengiz Gunay"} 
            linkedInUrl='https://www.linkedin.com/in/cengiz-gunay-5010a89/'/>

            {/* 2nd testimonial */}
            <People 
            description={"Dr. Anca Doloc-Mihu mentorship was essential in the front-end side of the project. While I was not mentored directly by her, she mentored my co-collaborator, by mentoring and guiding in the development of intuitive and user-friendky interfaces for the platform. "} 
            name={"Dr. Anca Doloc-Mihu"} 
            linkedInUrl='https://www.linkedin.com/in/anca-doloc-mihu-359aa312/'/>

            {/* 3rd testimonial */}
            <People 
            description={"Raja was my co-collaborator in this project. We collaborated to build the front-end side of Analysim. He was very supportive throughout this project. He built and enahnced the front-end of many components in Angular. I really enjoyed participating in code reviews, meetings and discussions regarding the project. I look forward to collaborating with him more in this project."} 
            name={"Pon Raja Prabhu S K"} 
            linkedInUrl='https://www.linkedin.com/in/ponrajaprabhusk/'/>

          </div>

        </div>
      </div>
    </section>
  )
}
