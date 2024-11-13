import ServicesItem from "./ServicesItem"

function Services() {
    return(
        <section className="services">
            <h3>Services</h3>
            <ul> 
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={true} price={230} headerName="Бухгалтерский учет" text="качественно"/>
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={true} price={230} headerName="Бухгалтерский учет" text="качественно"/>
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={false} price={230} headerName="Бухгалтерский учет" text="качественно"/>
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={true} price={230} headerName="Бухгалтерский учет" text="качественно"/>
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={true} price={230} headerName="Бухгалтерский учет" text="качественно"/>
               <ServicesItem arr={[1,2,3,4]} obj={{a:'hello'}} a active={true} price={230} headerName={`Бухгалтерский учет`} text="качественно"/>
            </ul>
        </section>
    )
}

export default Services