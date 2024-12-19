import "./load.css"
export default function Loader({ children }) {

    return (
        <div className="load">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
