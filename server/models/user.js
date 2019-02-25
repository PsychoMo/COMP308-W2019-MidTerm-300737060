// require modules for our User Model
let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required"
    },

    // take out becase passport will be encrypted by passport=local-mongoose
    // password: {

    // }

    email: {
      type: String,
      default: "",
      trim: true,
      required: "email is required"
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required"
    },
    create: {
      type: Date,
      default: Date.now
    },
    update: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "user"
  }
);

// configure options for UserSchema

let options = {
  missingPasswordErrorOption: "Wrong / Missing Password"
};

userSchema.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", userSchema);
