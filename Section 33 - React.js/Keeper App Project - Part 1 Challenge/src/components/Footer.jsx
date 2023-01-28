function Footer()
{
    const year = new Date().getFullYear();

    return (
        <footer><p>Copyright ©{year}, Mateus. All rights reserved.</p></footer>
    );
}

export default Footer;