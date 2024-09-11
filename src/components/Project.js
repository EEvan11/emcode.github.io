// src/components/Projects.js
export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">iTworks Global Solutions</h3>
              <p className="text-lg mb-4 truncate">
              Conducted a comprehensive update of all blog pages
on the iTworks Global Solutions Inc. website, including
redesigning layouts, optimizing content for better
readability, and ensuring consistency with the latest
web standards to enhance user engagement and site
functionality
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
  
            {/* Project 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Medical Depot</h3>
              <p className="text-lg mb-4 truncate">
              Enhanced the design of inner pages to
improve visual appeal and user experience, aligning
with the latest design trends and best practices.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
  
            {/* Project 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">TKTQ TRAVELS</h3>
              <p className="text-lg mb-4 truncate">
              Developed two inner pages—'Travel' and 'Packages'—for
TKTQ Travels, including designing layouts, integrating
content, and ensuring responsive functionality to
provide users with a seamless and informative browsing
experience.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Project</a>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  