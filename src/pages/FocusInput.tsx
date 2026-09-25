import { useRef } from "react";



function FocusInput(){

    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <>
            <h1>useRef Practice</h1>
            <input type="text" name="" id="" />
            <button>Focus</button>
        
        </>
    )


}










export default FocusInput;