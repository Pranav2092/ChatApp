import { useContext } from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Notification from "./chat/Notification";
const NavBar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    return (
        <Navbar bg="dark" className="mb-4" style={{height:"3.75rem",borderRadius:"0.5rem 0.5rem 0.5rem 0.5rem"}}>
            <Container>
                <h2>
                    <Link to="/" className="link-light text-decoration-none">ChatApp</Link>
                </h2>
                {user&&<span className="text-warning">Logged in as {user?.name}</span>}
                <Nav>
                    <Stack direction="horizontal" gap={3}>
                        {user && (<>
                            <Notification/>
                            <Link onClick={()=> logoutUser()} to="/login" className="link-light text-decoration-none" style={{cursor:"pointer",padding:"0.5rem 0.5rem 0.5rem 0.5rem",borderRadius:"0.5rem 0.5rem 0.5rem 0.5rem",border:"1px solid rgb(100, 100, 100)",backgroundColor:"rgb(100,100,100)",color:"white"}}>Logout</Link>
                        </>)}
                        {!user && (<>
                            <Link to="/login" className="link-light text-decoration-none">Login</Link>
                            <Link to="/register" className="link-light text-decoration-none">Register</Link>
                        </>)} 
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    ) ;
};
 
export default NavBar;

//