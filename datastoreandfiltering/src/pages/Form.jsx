import { useState } from "react";
import axios from "axios";

const filterdetails = {
    name: "",
    url: "",
    date: "",
};

const url = "https://long-rose-trout-robe.cyclic.app/reactdasbord";

const SimpleCard = () => {
    const [details, setDetails] = useState(filterdetails);
    const [response, setResponse] = useState([]);



    const handlesubmit = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handlebtnsubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(url, details);
            setDetails(filterdetails);
            console.log(details);

        } catch (error) {
            console.log(error);
        }
    };

    const getData = async () => {
        try {
            const res = await axios.get(url);
            setResponse(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useState(() => {
        getData();
    }, []);



    return (
        <>
            <form action="">
                <div className="container">
                    <label>SELECT NAME</label>
                    <select
                        name="name"
                        value={details.name}
                        onChange={handlesubmit}>
                        <option key="default" value="">
                            --SELECT--
                        </option>
                        <option key="sunil" value="sunil">
                            SUNIL
                        </option>
                        <option key="ramu" value="ramu">
                            RAMU
                        </option>
                        <option key="manjeet" value="manjeet">
                            MANJEET
                        </option>
                    </select>
                    <label>URL</label>

                    <input
                        type="url"
                        name="url"
                        value={details.url}
                        onChange={handlesubmit}
                    />
                    <label>Select Date</label>
                    <input
                        type="date"
                        name="date"
                        value={details.date}
                        onChange={handlesubmit}
                    />
                    <button onClick={handlebtnsubmit}>SUBMIT</button>
                </div>
            </form>

            <div className="tabledata">
                <div className="searchValue">
                    <input type="text" placeholder="SEARCH BY NAME" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>SR.NO</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>
                                    <a href={item.url} target="_blank">
                                        {item.url}
                                    </a>
                                </td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SimpleCard;
