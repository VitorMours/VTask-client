import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";


const Header = () => {
   
  return (
 
    <header className="flex bg-neutral-100 justify-between items-center px-5 py-6 text-center">

      <Typography variant="h2" color="primary" sx={{ fontWeight: 'bold' }}>VTasks</Typography>

            
      
    </header>
  );
}

export default Header;