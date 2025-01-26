import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGoogleSheetData } from "../../store/dataSlice";

function Profile() {
    const {
        googleSheetData,
        loading,
        error
    } = useSelector((state) => state.data)

  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/sheet-data");
        
            const data = await response.json();
            dispatch(setGoogleSheetData(data));
          } catch (error) {
            console.log("error from frontend", error);
            return null;
          } finally {
            console.log("data fetched");
          }
    }

    fetchData();
  }, [dispatch])
  
  const userId = "some1@example.com";

  return  <div>
    {loading && <p> Loading...</p>},
    {error && <p> Error: {error}</p>},
    {googleSheetData && <table>
        {googleSheetData[0].map((cell) => <th>{cell}</th>)}
        {googleSheetData.map((item)=> 
        <tr>
            {item[1]== userId && item.map((cell) => <td>{cell}</td>)}
        </tr>
        )}
    </table>
    }
    
  </div>;
}

export default Profile;
