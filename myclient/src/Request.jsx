import React, { useEffect, useState } from 'react'

const Request = (props) => {
    const [data, setData] = useState("서버와 통신을 하자....");

    return (<h1>{data}</h1>)
}

export default Request;
