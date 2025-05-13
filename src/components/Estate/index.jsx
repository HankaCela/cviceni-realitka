/*
    {
        "title": "Útulný domeček",
        "text": "Tento útulný domeček vás okouzlí svou jedinečnou kombinací pohodlí a komunity. Nachází se mezi ostatními domky v klidné a přátelské čtvrti, kde si můžete užívat výhody sousedského prostředí. Domek s kouzelným venkovním vzhledem vás vítá svou pohostinností. Interiér je zařízen tak, aby byl útulný a funkční, s důrazem na domácí pohodlí. Můžete si užívat své ranní kávy na malém balkónku a později se spojit s přáteli a sousedy na společném grilování v zahradě. Tento domeček je ideálním místem pro ty, kteří touží po harmonii mezi soukromím a společenským životem.",
        "price": 5000000,
        "city": "Radostice nad Ohří",
        "contact": {
            "name": "Jitka Chalupníková",
            "email": "jitka.chalupnikova@realitka.cz",
            "phone": "+420 627 313 414"
        },
        "photo": "https://apps.kodim.cz/daweb/trening-api/assets/house04.jpg"
    }
*/
import './index.css'

export const Estate = (props) => {

    console.log(props)
    return (
        <>
            <div>
                <div className='estateImg'>
                    <img src={props.estateDetail.photo} />
                </div>
                <div className='estateInfo'>
                    <strong className='city'>
                        {props.estateDetail.city}
                    </strong>
                    <strong className='title'>
                        {props.estateDetail.title}
                    </strong>
                    <p className='text'>
                        {props.estateDetail.text}
                    </p>
                    <strong className='priceTitle'>Cena celkem:</strong>
                    <strong className='price'> {props.estateDetail.price} Kč </strong>

                    <div className='estateTrader'>
                        <strong>Kontakt na makléře:</strong>
                        <p>
                            <strong>{props.estateDetail.contact.name}</strong>
                            <i>{props.estateDetail.contact.email}</i>
                            <i>{props.estateDetail.contact.phone}</i>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}