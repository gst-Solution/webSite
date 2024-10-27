import { getAllProjects } from "@/lib/db-quary"

export default async function HomeProjectsPage(){

    const projects = await getAllProjects();
    return (       

<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Project id
                </th>
                <th scope="col" className="px-6 py-3">
                    User id
                </th>
                <th scope="col" className="px-6 py-3">
                    Documents
                </th>                
            </tr>
        </thead>
        <tbody>
            {projects.map(project => (
                <tr key={project.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {project.id}
                </th>
                <td className="px-6 py-4">
                    {project.user_id}
                </td>
                <td className="px-6 py-4">
                    {project.image_url}
                </td>               
            </tr> 
            ))}
                       
        </tbody>
    </table>
</div>

    )
}