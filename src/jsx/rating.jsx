import React,{useState} from 'react';
import 'antd/es/rate/style/index.css';
import 'antd/es/divider/style/index.css';
import { Rate,Divider } from 'antd';

const Rating = () => {

    const [ratingNum, setRatingNum] = useState(5)
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

    const handleChange = (value) => {
        setRatingNum(value)
    }

    return (
        <span style={{
            position: "absolute",
            top:"10%",
            left:"50%",
            transform:"translateX(-50%)",
            padding: "0 1rem"
            }} >
            <div style={{fontSize:"2rem",textAlign:"center"}}>{desc[ratingNum-1]}</div>
            <Divider style={{margin:"0.4rem 0"}}/>
            <Rate onChange={handleChange} value={ratingNum}/>
        </span> 
    )
}

export default Rating;