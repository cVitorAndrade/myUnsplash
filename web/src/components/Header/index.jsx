import { Container } from "./styles";

import { RiFolderUserFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "../Button";

export function Header () {
    return(
        <Container>
            <div>
                <div className="brand">
                    <RiFolderUserFill size={25} />
                    <h1>My Unsplash <span>devChalhenges.io</span></h1>
                </div>
                <div className="search">
                    <label htmlFor="input-search"> <IoSearchOutline size={20} /> </label>
                    <input type="text" id="input-search" placeholder="Search by name"/>
                </div>
            </div>
            <Button title="Add a photo" />
        </Container>
    )
}