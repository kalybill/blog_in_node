exports.getDashboard = (req, res, next) => {
    res.render('dashboard/index', {
        pageTitle : 'Admin Dashboard',
    })
}