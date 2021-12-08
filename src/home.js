import { useHistory } from "react-router-dom"

function Home() {
    let history = useHistory()
    function handleOnClick() {
        localStorage.removeItem("done")
        history.replace("/login")
    }
    return(
        <div>
            <h1>Welcome Tan joined ReactJS community</h1>
            <button onClick={handleOnClick} 
            style={
                {
                    color:"#fff",
                    backgroundColor:"#20DF7F",
                    fontSize:"14px",
                    padding:"6px 8px",
                    borderRadius:"4px",
                    border:"none",
                }
            }
            >Sign Out</button>
        </div>
    )
    
}
export default Home;