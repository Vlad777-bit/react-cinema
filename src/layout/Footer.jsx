export const Footer = () => {
    const currentDate = new Date().getFullYear();

    return (
        <footer class="page-footer blue accent-2">
            <div class="footer-copyright">
                <div class="container">
                    © {currentDate} Copyright Text
                    <a class="grey-text text-lighten-4 right" href="!#">
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
};
