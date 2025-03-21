import Link from "@mui/material/Link";

export default function Footer(){

  return (
    <footer className="bg-neutral-100 w-full mt-auto">
      <p className=" text-center p-3" >Site desenvolvido por:    
        <Link href="https://www.linkedin.com/in/jo%C3%A3o-vitor-rezende-moura/" rel="noreferrer" underline="hover" target="_blank">
            <a> </a>Joao Vitor Rezende Moura
        </Link>
      </p>
    </footer>

  );
}