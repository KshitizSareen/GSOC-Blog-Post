export const metadata = {
    title: 'Code Samples',
    description: 'Page description',
  }

import CodeSamplesGithub from "@/components/CodeSamples";
import Hero from "@/components/CodeSamplesHero";

export default function CodeSamples(){
    return(
        <>
        <Hero/>
        <CodeSamplesGithub/>
        </>
    )
};