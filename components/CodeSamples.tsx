'use client'
import { useMediaQuery } from "@mui/material";
import React from "react";
import { Button, ButtonGroup, Image } from "react-bootstrap";

interface CodeSampleProps{
    srcImage: string;
    frontendCodeUrl: string;
    backendCodeUrl: string;
    heading: string
}

const CodeSample : React.FC<CodeSampleProps>=({srcImage,frontendCodeUrl,backendCodeUrl,heading})=>{

    const matches = useMediaQuery('(max-width:700px)');

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: matches ? '10px' : '50px',
            width: matches ? '90vw' : '600px',
            borderRadius: '10px',
        }} className="bg-gray-700">
            <Button href={srcImage} target="_blank" style={{
                padding: 0
            }}>
            <Image src={srcImage} style={{
                width: '100%',
                height: '400px',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px'
            }}/>
            </Button>
                  <h4 className="h4 mb-3" style={{
                    margin: '10px',
                    textAlign: 'center'
                  }}>{heading}</h4>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width:  '100%',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '10px',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px'
            }} className="bg-gray-700">
                <Button className="btn text-white bg-purple-600 hover:bg-purple-700" href={frontendCodeUrl} style={{
                    textAlign: 'center'
                }} target="_blank">Checkout Angular code</Button>
                <Button className="btn text-white bg-purple-600 hover:bg-purple-700" href={backendCodeUrl} style={{
                    textAlign: 'center'
                }} target="_blank">Checkout ASP.NET code</Button>
            </div>
        </div>
    )
}

export default function CodeSamplesGithub(){
    return(
        <>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            <CodeSample srcImage="/images/CodeSample1.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/projects/project-file-explorer" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/ProjectController.cs#L1377" 
            heading="Dataset File System Manager"/>
            <CodeSample srcImage="/images/CodeSample2.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/projects/project-file-explorer/csvdata-browser" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/ProjectController.cs#L185" 
            heading="CSV Data Browser"/>
            <CodeSample srcImage="/images/CodeSample3.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/projects/project-file-explorer/csvdata-browser/visualize-data" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/ProjectController.cs#L185" 
            heading="Dataset Visualizations"/>
            <CodeSample srcImage="/images/CodeSample4.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/projects/project-overview/project-overview-view/project-content/project-notebook-item" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/ProjectController.cs#L207" 
            heading="Notebook Integration System"/>
            <CodeSample srcImage="/images/CodeSample5.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/projects/project-overview/project-overview-view/project-content" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/ProjectController.cs#L700" 
            heading="Notebook Creation"/>
            <CodeSample srcImage="/images/CodeSample6.png" 
            frontendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/tree/cns2023_demo/src/Analysim.Web/ClientApp/src/app/register" 
            backendCodeUrl="https://github.com/soft-eng-practicum/AnalySim/blob/cns2023_demo/src/Analysim.Web/Controllers/AccountController.cs#L230" 
            heading="Sign up functionality"/>
            </div>
        </>
    )
}