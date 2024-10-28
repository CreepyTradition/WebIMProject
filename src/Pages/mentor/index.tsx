import { useEffect } from "react";

export default function MentorPage(){
    useEffect(() => {
        document.title = "Mentor - Mapúa Malayan Colleges Mindanao";
      }, []);
    
    return(
        <div>
            <h1>Mentor Components here</h1>
        </div>
    );
}