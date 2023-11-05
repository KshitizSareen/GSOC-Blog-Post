import { IconDefinition, faChartLine, faCode, faDatabase, faFileArchive, faFolder, faFolderTree, faProjectDiagram, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface FeatureIcon{
  icon: IconDefinition;
}

interface FeatureDescription{
  heading: String;
  text: String;
}

interface FeatureItem{
  icon: IconDefinition;
  heading: string;
  text: string;
}

const RenderFeatureIcon : React.FC<FeatureIcon>= ({icon})=>{
  return(
    <div style={{
      backgroundColor: '#5D5DFF',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '15px',
      width: '60px',
      height: '60px'
    }}>
      <FontAwesomeIcon icon={icon}   style={{
      fontSize: '28px',
      color: '#F4F4FF'
    }}/>
    </div>
  )
}

const RenderFeatureDescription : React.FC<FeatureDescription> = ({heading,text})=>{
  return(
    <>
      <h4 className="h4 mb-2" style={{
    textAlign: 'center'
  }}>{heading}</h4>
  <p className="text-lg text-gray-400 text-center">{text}</p>
    </>
  )
}

const RenderFeatureItem : React.FC<FeatureItem> = ({icon,heading,text})=>{
  return(
    <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
      <RenderFeatureIcon icon={icon}/>
      <RenderFeatureDescription heading={heading} text={text}/>
      </div>
  )
}

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">As a contributor in the Google Summer of Code, 2023 Program, I contributed to the International Neuroinformatics Coordinating Facility (INCF) organization where I worked on the Analysim Platform</h2>
            <h4 className="h4 mb-4">AnalySim is a data sharing platform where users can simplify the visualization of datasets. Users can collaborate together and share their data with the world, or browse through our multiple projects related to data science, data analysis and research.</h4>
            <p className="text-xl text-gray-400">Check out some of the features of Analysim</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <RenderFeatureItem icon={faProjectDiagram} heading="Create Your Own Project" text="Create your own project and share your ideas"/>

            {/* 2nd item */}
            <RenderFeatureItem icon={faFolderTree} heading="Browse Through Projects" text="Get inspired and collaborate on others users projects"/>

            {/* 3rd item */}
            <RenderFeatureItem icon={faDatabase} heading="Host Your Datasets" text="Get Access to an online storage system where you can store your datasets in a file system manager"/>

            {/* 4th item */}
            <RenderFeatureItem icon={faTable} heading="Browse Through Your Datasets" text="Interact with your CSV Datasets through sort, filter, and extraction of sub-datasets"/>

            {/* 5th item */}
            <RenderFeatureItem icon={faChartLine} heading="Visualize Your Datasets" text="Visualize your datasets through multiple in-built and user-defined visualizations"/>

            {/* 6th item */}
            <RenderFeatureItem icon={faCode} heading="Integrate Your Code Through Notebooks" text="Integrate and interact with notebooks in your project"/>


          </div>

        </div>
      </div>
    </section>
  )
}
