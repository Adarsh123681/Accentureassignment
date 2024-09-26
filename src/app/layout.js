import "./globals.css";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";


export const metadata = {
  title:"Assignment from Accenture"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <Sidebar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
