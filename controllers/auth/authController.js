exports.getLoginPage = async (req, res) => {
    res.status(200).render('layouts/admin', {
        fileName: 'login'
    });
}

exports.logout = (req, res) => {
    res.session.destroy(() => {
        req.redirect('/');
    });
}