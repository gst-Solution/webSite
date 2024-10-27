import { getAllUsers } from "@/lib/db-quary";

export default async function UsersPage(){
    const users = await getAllUsers();

    return (
        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    User id
                </th>
                <th scope="col" className="px-6 py-3">
                    User Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th> 
                <th scope="col" className="px-6 py-3">
                    Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>               
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                </th>
                <td className="px-6 py-4">
                    {user.f_name}  {user.l_name}
                </td>
                <td className="px-6 py-4">
                    {user.email}
                </td>  
                <td className="px-6 py-4">
                    {user.phone}
                </td>
                <td className="px-6 py-4">
                    {user.address}
                </td>               
            </tr> 
            ))}
                       
        </tbody>
    </table>
</div>
    )
}