import './NavBar.css'

const NavBar = (props: object): JSX.Element=>{
    return (
        <div className="NavBar">
            {/* <img src="apiFlowbuilder.svg" alt="apiFlow logo"/> */}
            <h2 style={{ fontSize: '24px', color: 'tomato' }}>API FLOW</h2>
            <div className="SearchBox">
                <input type="text" placeholder="" />
                <button>Explore</button>
            </div>
        </div>
    )
}


export default NavBar