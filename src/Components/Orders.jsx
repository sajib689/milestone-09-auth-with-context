
import { useInView } from "react-intersection-observer";


const Orders = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
        delay: 2000,
      });
 
    return (
       <>
        <div  style={{width: '80vw', height: '100vh', backgroundColor: 'yellow'}}>
        <h1>Change Background When User Came</h1>     
        </div>
        <div ref={ref} style={{width: '80vw', height: '100vh', backgroundColor: inView ? 'red': 'yellow'}}>
        <h1>Change Background When User Came</h1>     
        </div>
       </>
    );
};

export default Orders;