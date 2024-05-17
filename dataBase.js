const mongoose = require("mongoose");

const User = require("./src/model");

const AllPersonnes = require("./src/jsonpersonne");

require("dotenv").config();

const atlasURI = process.env.MONGO_URI;

mongoose
  .connect(atlasURI)
  .then(() => {
    console.log("Connecté à MongoDB Atlas");
  })
  .catch((err) => {
    console.error("Erreur de connexion à MongoDB Atlas :", err.message);
  });

//   Créer et enregistrer un enregistrement d'un modèle :

const person = new User({
  name: "John Doe",
  age: 30,
  favoriteFoods: ["Pizza", "Sushi"],
});

person
  .save()
  .then((savedUser) => {
    console.log("Utilisateur sauvegardé :", savedUser);
  })
  .catch((error) => {
    console.error("Erreur lors de la sauvegarde de l'utilisateur :", error);
  });

// Créez de nombreux enregistrements avec model.create()

User.create(AllPersonnes)
  .then((savedUser) => {
    console.log("Utilisateurs sauvegardé :", savedUser);
  })
  .catch((error) => {
    console.error("Erreur lors de la sauvegarde de l'utilisateur :", error);
  });

//   Utilisez model.find() pour rechercher votre base de données

User.find()
  .then((savedUser) => {
    console.log("base de données :", savedUser);
  })
  .catch((error) => {
    console.error("Erreur :", error);
  });

//   Utilisez model.findOne() pour renvoyer un seul document correspondant à partir de votre base de données

User.findOne({ favoriteFoods: "Pizza" })
  .then((user) => {
    console.log("user trouver", user);
  })
  .catch((error) => {
    console.log("Error user", error);
  });

// Utilisez model.findById() pour rechercher votre base de données par _id

User.findById("66474b6b0a14250e05b3b3a1")
  .then((user) => {
    console.log("user trouver", user);
  })
  .catch((error) => {
    console.log("Error user", error);
  });

// Effectuez des mises à jour classiques en exécutant Rechercher, Modifier, puis Enregistrer

User.findByIdAndUpdate(
  "66474b6b0a14250e05b3b3a1",
  { $push: { favoriteFoods: "Ice Creame" } },
  { new: true }
)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()

User.findOneAndUpdate(
  { name: "John" },
  { $pull: { favoriteFoods: "Pizza" } },
  { new: true }
)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// Supprimer un document à l'aide de model.findByIdAndRemove

User.findOneAndUpdate("66474b6b0a14250e05b3b3a1")
  .then((removedUser) => {
    if (removedUser) {
      console.log("Removed user:", removedUser);
    } else {
      console.log("User not found");
    }
  })
  .catch((error) => {
    console.log("Error removing user:", error);
  });

// MongoDB et Mongoose - Supprimez de nombreux documents avec model.remove()

User.remove()
  .then((document) => {
    console.log("Removed document", document);
  })
  .catch((error) => {
    console.log("Error while deleting documment", error);
  });

// Aides aux requêtes de recherche en chaîne pour affiner les résultats de recherche
// Trouvez des gens qui aiment les Pizza. Triez-les par nom, limitez les résultats à deux documents et masquez leur âge. Chaînez .find(), .sort(), .limit(), .select(), puis .exec(). Transmettez le rappel done(err, data) à exec().

User.find({ favoriteFoods: "Pizza" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age")
  .exec()
  .then((data) => {
    console.log("Succesfully executed", data);
  })
  .catch((error) => {
    console.log("Error while executing Methods", error);
  });
