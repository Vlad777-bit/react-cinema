export const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer className="page-footer blue accent-2">
            <div className="footer-copyright">
                <div className="container">
                    © {currentDate} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="!#">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
};
