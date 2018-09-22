let creatures = [
  {
    id: 1,
    name: "Halloween Cat",
    image_url:
      "https://www.animalsheltering.org/sites/default/files/images/magazine/black-cat-pumpkins-bays-blog-m146689.jpg",
    scary: {
      level: 1
    }
  },
  {
    id: 2,
    name: "Ghost",
    image_url:
      "http://konknet.com/-/wp-content/uploads/2017/08/a-ghost-story-thymb.jpg",
    scary: {
      level: 7
    }
  }
];

let id = 3;

module.exports = {
  read: (req, res, next) => {
    console.log("I am in GET");
    res.status(200).send(creatures);
    console.log("After Read : ", creatures);
  },
  create: (req, res, next) => {
    console.log("I am in POST", req.body);
    const { name, image_url, scary } = req.body;
    const newCreature = {
      id: id,
      name,
      image_url,
      scary
    };
    id++;
    creatures.push(newCreature);
    res.status(200).send(creatures);
    console.log("After Create : ", creatures);
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const { name, image_url, scary } = req.body;
    console.log("I am in PUT", id, req.body);
    const updatedCreatures = creatures.map(creature => {
      if (creature.id == id) {
        return {
          id: id,
          name: name || creature.name,
          image_url: image_url || creature.image_url,
          scary: scary || creature.scary
        };
      } else {
        return creature;
      }
    });
    creatures = updatedCreatures;
    res.status(200).send(creatures);
    console.log("After Update : ", creatures);
  },
  delete: (req, res, next) => {
    const { id } = req.params;
    console.log("Inside DELETE to delete ", id);
    creatures = creatures.filter(creature => creature.id != id);
    res.status(200).send(creatures);
    console.log("After Delete : ", creatures);
  }
};
