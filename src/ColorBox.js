import { useEffect } from "react";
import { useState } from "react";
import rgbToHex from "./Functions";

const ColorBox = ({rgb, weight, index, hexColor}) => {

    const [alert,setAlert] = useState(false)
    const bgc = rgb.join(",")
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    useEffect( ()=> {
        const timeOut = setTimeout( () => {
            setAlert(false)
        },1500)
        return () => clearTimeout(timeOut)
    },[alert])

    return (
        <div className="colorBox" style={{backgroundColor: `rgb(${bgc})`}} onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexColor)
        }}>
            <p className={`${index > 10 ? "color-percent light" : "color-percent"}`}>{`${weight} %`}</p>
            <p className={`${index > 10 ? "color-hex light" : "color-hex"}`}>{hexValue}</p>
            {alert && <p className={`${index > 10 ? "copied light" : "copied"}`}>Copiado!</p>}
        </div>
    );
}
 
export default ColorBox;