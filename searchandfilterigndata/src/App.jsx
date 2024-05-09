import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const formdetails = {
    name: "",
    url: "",
    date: "",
};
let url = "http://localhost:8000/Data";
function App() {
    const [details, setDetails] = useState(formdetails);
    const [response, setResponse] = useState([]);
  const [selected, setSelected] = useState("");
  const [updatevalue,setUpdatevalue] = useState(" ")

    // const [filtername, setFiltername] = useState(" ");
    // const [refresh, setRefresh] = useState(false);

    const inputvalue = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDetails((pre) => {
            return { ...pre, [name]: value };
        });
    };

    const submitbtn = async () => {
        try {
            await axios.post(url, details);
            setDetails(formdetails);
            getData();
            // setRefresh(true);
            console.log(details);
        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/Data");
            setResponse(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getData();
    }, []);


  const delData = async(id) => {
try {
  let del = await axios.delete(`http://localhost:8000/Data/${id}`);
  getData()
  console.log(del);
} catch (error) {
console.log(error);
}
  }

    // <---------------for filtet value based on name------------>

  const selectedValue = (e) => {
  setSelected(e.target.value)
}

  let filterdata = selected ? response.filter((ele) => ele.name === selected) : response;


    return (
        <>
            <div className="container">
                <label htmlFor="name">SELECT NAME</label>
                <select
                    name="name"
                    value={details.name}
                    onChange={inputvalue}
                    required>
                    <option value="">--Select--</option>
                    <option value="Sunil">SUNIL</option>
                    <option value="Ramu">RAMU</option>
                    <option value="Manjeet">MANJEET</option>
                </select>
                <label htmlFor="url">URL</label>
                <input
                    type="text"
                    name="url"
                    value={details.url}
                    onChange={inputvalue}
                    required
                />
                <label htmlFor="date">DATE</label>
                <input
                    type="date"
                    name="date"
                    value={details.date}
                    onChange={inputvalue}
                    required
                />
                <button onClick={submitbtn}>SUBMIT</button>
            </div>

            <div className="tabledata">
                <div className="searchValue">
                    <input
                        type="text"
                        placeholder="SEARCH BY NAME"
                        value={selected}
                        onChange={selectedValue}
                    />
                    <select
                        name=""
                        id=""
                        value={selected}
                        onChange={selectedValue}>
                        <option value="">Select</option>
                        <option value="Ramu">Ramu</option>
                        <option value="Sunil">Sunil</option>
                        <option value="Manjeet">Manjeet</option>
                    </select>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>SR.NO</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th>DATE</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterdata.length &&
                            filterdata.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <a href={item.url} target="_blank">
                                            {item.url.slice(0,40) + "......"}
                                        </a>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>
                                        <button
                                            onClick={() => delData(item.id)}>
                                            Delete
                                        </button>
                                        <button>Update</button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;
