class HomeController {
  index(req,res) {
    res.json({
      "allOk": true
    })
  }
}

export default new HomeController();
