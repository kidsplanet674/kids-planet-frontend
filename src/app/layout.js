import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { serverFetch } from '../utils/serverApi';

export const metadata = {
  title: "Kids Planet Bhubaneswar | Best Play School & Day Care",
  description: "Kids Planet Bhubaneswar provides the best early childhood education, play school, and day care facilities.",
};

export default async function RootLayout({ children }) {
  // Fetch header/footer data once on the server
  const menuData = await serverFetch('/menu.php');
  const footerData = await serverFetch('/footer.php');
  const socialData = await serverFetch('/social_media.php');

  const menuItems = menuData?.items || [];
  const fSettings = footerData?.settings || {};
  const sMedia = socialData?.links || [];

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Fredoka+One&family=Prata&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets-css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets-css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets-css/swiper.min.css" />
        <link rel="stylesheet" href="/assets-css/odometer.min.css" />
        <link rel="stylesheet" href="/assets-css/animate.min.css" />
        <link rel="stylesheet" href="/assets-css/flaticon.css" />
        <link rel="stylesheet" href="/assets-css/style.css" />
        <link rel="stylesheet" href="/assets-css/responsive.css" />
        
        <script src="/assets-js/jquery-3.6.0.min.js" strategy="beforeInteractive"></script>
        <script src="/assets-js/bootstrap.bundle.min.js" strategy="lazyOnload"></script>
        <script src="/assets-js/swiper.min.js" strategy="lazyOnload"></script>
        <script src="/assets-js/odometer.min.js" strategy="lazyOnload"></script>
        <script src="/assets-js/wow.js" strategy="lazyOnload"></script>
      </head>
      <body>
        <div className="page-wrapper">
          <Header menuItems={menuItems} footerSettings={fSettings} />
          {children}
          <Footer fSettings={fSettings} sMedia={sMedia} />
        </div>
        
        <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </body>
    </html>
  );
}
