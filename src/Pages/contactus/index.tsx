import { useEffect } from "react";

export default function ContactUs() {
    useEffect(() => {
        document.title = "Contact Us - Mapúa Malayan Colleges Mindanao";
      }, []);

    return (
      <section>
        <h1>Contact Us</h1>
      </section>
    );
  }