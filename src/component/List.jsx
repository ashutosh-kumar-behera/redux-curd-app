import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser, userDelete } from "../redux/actions";

export const List = () => {

    const dispatch=useDispatch();
    const {users,loading} = useSelector(state=>state.appStore);

    useEffect(()=>{
        dispatch(getAllUser())
    },[dispatch])

    const onDelete =(id)=>{
      dispatch(userDelete(id))
    }

    if(loading){
        return(
            <div className="text-lg">Loading...</div>
        )
    }

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
            {
                users.map(({id,name,email,salary,gender},idx)=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={id}>
                            <td className="px-6 py-4">{idx}</td>
                            <td className="px-6 py-4">{name}</td>
                            <td className="px-6 py-4">{email}</td>
                            <td className="px-6 py-4">{salary}</td>
                            <td className="px-6 py-4">{gender}</td>
                            <td className="px-6 py-4 text-right flex justify-around pl-1 gap-2">
                            <button className="bg-green-600 rounded-md p-2 text-white ">Edit</button>
                            <button className="bg-red-600 rounded-md p-2 text-white " onClick={()=>onDelete(id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
}
