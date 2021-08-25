const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    review:{
        type:String,
        default:""
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("testimonial", testimonialSchema);
