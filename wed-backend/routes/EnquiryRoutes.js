

const router =
  require("express").Router();

const Enquiry =
  require("../models/Enquiry");



router.post(
  "/enquiry",
  async (req, res) => {

    try {

      console.log(
        "ENQUIRY:",
        req.body
      );

      const enquiry =
        new Enquiry(req.body);

      const savedEnquiry =
        await enquiry.save();

      console.log(
        "SAVED:",
        savedEnquiry
      );

      res.status(201).json({

        success: true,

        enquiry: savedEnquiry
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({

        error:
          "Failed To Save Enquiry"
      });
    }
  }
);

module.exports = router;