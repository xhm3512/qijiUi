import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Sider from './Sider';
import Layout from './Layout'; // type LayoutComponents = {
//   Header
// }

var LayoutBox = Layout;
LayoutBox.Header = Header;
LayoutBox.Content = Content;
LayoutBox.Footer = Footer;
LayoutBox.Sider = Sider;
LayoutBox.Header = Header;
export default LayoutBox;