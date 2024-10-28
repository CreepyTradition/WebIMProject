import { useEffect } from "react";

export default function MenteePage(){
    useEffect(() => {
        document.title = "Mentee - Mapúa Malayan Colleges Mindanao";
      }, []);
    
    return(
        <div>
            <h1>Mentee Components here</h1>
        </div>
    );
}