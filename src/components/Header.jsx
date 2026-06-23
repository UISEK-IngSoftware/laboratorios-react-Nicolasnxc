import { AppBar, Button, Container, Toolbar } from "@mui/material";
import pokedexLogo from "../assets/Logo.webp";

export default function Header() {
  return (
    <Container>
        <div className="pokedex-navbar">
            <AppBar position="static">
                <Toolbar>
                    <div className="image-container">
                        <img src={pokedexLogo} alt="Pokédex Logo" />
                    </div>
                </Toolbar>
                <Toolbar>
                    <Button color="inherit" href="/">Inicio</Button>
                    <Button color="inherit" href="/add">Agregar Pokemon</Button>
                </Toolbar>
            </AppBar>
        </div>
    </Container>
  )
}