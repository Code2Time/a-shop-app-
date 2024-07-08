import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

function Location() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div data-aos="flip-left" className="w-full h-[100vh] dark:bg-bg">
          <iframe
            className="w-full h-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25925.830115242195!2d51.27851356207781!3d35.683680080553465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05732c2e91%3A0xfcbec017befd15f4!2sAzadi%20Tower!5e0!3m2!1sen!2s!4v1717761995992!5m2!1sen!2s"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Location;
