import React, { useRef } from 'react'

const UseRef = () => {
    const inputef = useRef("hello  javascript")
    const divref = useRef("")
    const handleSubmit = () => {
    inputef.current.focus()
        // inputef.current.style.backgroundColor = "yellow"
        // inputef.current.style.height = "100px"

        // inputef.current.value="10"
    }


    const handle_div = () => {
        if (divref.current.style.display = "block") {
            divref.current.style.width = "200px";
            divref.current.style.height = "400px";
            divref.current.style.backgroundColor = "red";
            divref.current.style.innerText = "lorem 500 2 200 200 200";
        } else {
                divref.current.style.width = "400px";
                divref.current.style.height = "800px";
            divref.current.style.backgroundColor = "red";
            divref.current.style.border="1px solid black"
                divref.current.style.innerText = "lorem 500 2 200 200 200";
        }

    }
  return (
      <div>
          <input
              ref={inputef}
              type="text"
              placeholder="Enter Name"
              style={{ border: "1px solid gray" }}
          />
          {/* <div ref={inputef} style={{ border: "1px solid gray" }}></div> */}
          <button onClick={handleSubmit}>Submit</button>

          <div className="container" ref={divref}>
                    <button onClick={handle_div}>click</button>
          </div>
      </div>
  );
}

export default UseRef
