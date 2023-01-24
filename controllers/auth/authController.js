exports.getLoginPage = async (req, res) => {
    res.status(200).render('layouts/admin', {
        fileName: 'login'
    });
}