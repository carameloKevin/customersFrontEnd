import { useEffect, useState } from "react";
import Carta from '../Components/Carta';

function Customers(){
    const [customers, setCustomers] = useState([{}]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("/customer/all").then(
            response => response.json()
          ).then(
            data => {
              setCustomers(data)
              setLoading(false)
            }
          )
    },[])

    return(
        <div>
          <h1>Customers</h1>
            {loading ? <p>Loading...</p> : 
            (
                customers.map((customer, i) =>
                <Carta key={i} title={customer.customerNumber} description={customer.customerName}></Carta>
                )
            )
            }
        </div>
    )
}

export default Customers;