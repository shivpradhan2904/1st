import React from 'react';

function Projects() {
  return (
    <div className="h-screen w-full bg-[#0f3943]">
      <div>
        {/* Center the Projects title */}
        <div className="flex text-[#08988c] font-bold text-7xl justify-center pt-32">
          Projects
        </div>
        
        {/* Add a border under the title */}
        <div className="flex justify-center mt-4">
          <div className="border-b-8 rounded-lg mt-2  border-[#30a39d] w-1/4"></div>
        </div>
      </div>
      <div className='flex justify-between'>
            <div className='h-32 w-40 text-white bg-[#95c2cd] '>pj1</div>
            <div className='h-32 w-40 text-white bg-[#95c2cd] '>pj2</div>
            <div className='h-32 w-40 text-white bg-[#95c2cd] '>pj3</div>
      </div>
    </div>
  );
}

export default Projects;
