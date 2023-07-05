export const List = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-20">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-sky-300 text-white dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sl no.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Operation
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Tom</td>
            <td className="px-6 py-4">tom@gmail.com</td>
            <td className="px-6 py-4">15200</td>
            <td className="px-6 py-4">Male</td>
            <td className="px-6 py-4 text-right flex justify-around pl-1 gap-2">
              <button className="bg-green-600 rounded-md p-2 text-white ">Edit</button>
              <button className="bg-red-600 rounded-md p-2 text-white ">Delete</button>
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Tom</td>
            <td className="px-6 py-4">tom@gmail.com</td>
            <td className="px-6 py-4">15200</td>
            <td className="px-6 py-4">Male</td>
            <td className="px-6 py-4 text-right flex justify-around pl-1 gap-2">
              <button className="bg-green-600 rounded-md p-2 text-white ">Edit</button>
              <button className="bg-red-600 rounded-md p-2 text-white ">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
