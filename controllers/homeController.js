module.exports = {
	index: (req, res) => {
		res.render("home/index")
	},
	about: (req, res) => {
		res.render("home/about")
	},
	contacts: (req, res) => {
		res.render("home/contacts")
	},
}
