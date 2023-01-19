exports.getHomePage = async (req, res) => {
    try {
        res.status(200).render('layouts/user', {
            fileName: 'home'
        });
    } catch (error) {
        res.status(400).send('Something went wrong');
    }
}