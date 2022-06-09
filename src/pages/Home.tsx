import ProjectsBox from "../components/ProjectsBox"

function Home() {
  return (
    <>
      <div className="img-box w-full object-cover flex">
      </div>
      <div className="content-projects h-full">
        <div className="content-title">
          <h1 className="font-bold text-3xl pl-3 pt-20">My Projects</h1>       
        </div>
        
        <ProjectsBox/>
      </div>
    </>
  )
}

export default Home