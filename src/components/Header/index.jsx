import './index.css'

export const Header = (props) => {
    return (
        <>
            <h1>REALITKA - {props.title}</h1>
            <ul>
                <li><a href="/dum01">DŮM 1</a></li>
                <li><a href="/dum02">DŮM 2</a></li>
                <li><a href="/dum03">DŮM 3</a></li>
                <li><a href="/dum04">DŮM 4</a></li>
            </ul>
        </>
    )
}