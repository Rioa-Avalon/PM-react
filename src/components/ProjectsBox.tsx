import React from 'react'

function ProjectsBox() {
  return (
    <>  
        <div className="box-project mx-6 mt-3 bg-slate-500 rounded-lg">
            <div className="project-title px-3">
                <h1 className="font-bold text-2xl pt-3">Phone app dev</h1>
            </div>
        </div>

        <style>
            {`
                .box-project {
                    width: 50%;
                    height: 12rem;
                    background-color: #f5f5f5;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px #00000029;
                    margin-bottom: 20px;
                }

                .project-title h1 {
                    border-bottom: 1px solid #e5e5e5;
                }
            `}
        </style>
    </>
  )
}

export default ProjectsBox