import { useEffect } from "react";

export default function FacultyPage(){
    useEffect(() => {
        document.title = "Faculty - Mapúa Malayan Colleges Mindanao";
      }, []);
    
    return(
        <div>
            <h1>Faculty Components here</h1>
        </div>
    );
}