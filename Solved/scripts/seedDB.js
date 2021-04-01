const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const animalSeed = [
  {
    name: "Lion",
    type: "mammal",
    synopsis:
      " A large, powerfully built cat that is second in size only to the tiger. The proverbial “king of beasts,” the lion has been one of the best-known wild animals since earliest times. Lions are most active at night and live in a variety of habitats but prefer grassland, savanna, dense scrub, and open woodland.",
    continent:"Africa" new Date(Date.now())
  },
  {
    name: "Shoebill",
    type: "bird",
    synopsis:
      "A large African wading bird, the species is named for its clog-shaped bill, which is an adaptation for catching and holding the large, slippery lungfish, its favourite food. This big bird also eats turtles, fish, and young crocodiles. Shoebills stand about 115 cm (3.8 feet) tall. They are entirely gray, with broad wings and long legs. The head is large in proportion to the body, and the eyes are also exceptionally large. The shoebill claps the mandibles of its bill together as a display, producing a loud, hollow sound. Like herons and pelicans, shoebills fly with the head held back against the body.",
    continent:"Africa" new Date(Date.now())
  },
  {
    name: "Chameleon",
    type: "reptile",
    synopsis:
      "(family Chamaeleonidae), any of a group of primarily arboreal (tree-dwelling) Old World lizards best known for their ability to change body colour. Other characteristics of chameleons include zygodactylous feet (with toes fused into opposed bundles of two and three), acrodont dentition (with the teeth attached to the edge of the jaw), eyes that move independently, atrophied venom glands that produce harmless trace amounts of venom, and a long, slender projectile tongue. ",
    continent:"Africa" new Date(Date.now())
  },
  {
    name: "Great White Shark",
    type: "fish",
    synopsis:
      "any member of the largest living species of the mackerel sharks (Lamnidae) and one of the most powerful and dangerous predatory sharks in the world. Starring as the villain of movies such as Jaws (1975), the white shark is much maligned and publicly feared. However, surprisingly little is understood of its life and behaviour.",
    continent: "Africa" new Date(Date.now())
  },
  {
    name: "American Bison",
    type: "mammal",
    synopsis:
      "The American bison also commonly known as the American buffalo or simply buffalo, is an American species of bison that once roamed North America in vast herds. Its historical range, by 9000 BC, is described as the great bison belt, a tract of rich grassland that ran from Alaska to the Gulf of Mexico, east to the Atlantic Seaboard (nearly to the Atlantic tidewater in some areas) as far north as New York and south to Georgia and, according to some sources, down to Florida, with sightings in North Carolina near Buffalo Ford on the Catawba River as late as 1750.",
    continent: "North America": new Date(Date.now())
  },
  {
    name: "American paddlefish",
    type: "fish",
    synopsis:
      "An archaic freshwater fish with a paddlelike snout, a wide mouth, smooth skin, and a cartilaginous skeleton. A relative of the sturgeon, the paddlefish makes up the family Polyodontidae in the order Acipenseriformes. A paddlefish feeds with its mouth gaping open and its gill rakers straining plankton from the water through its gills.The American paddlefish (Polyodon spathula), also called the Mississippi paddlefish or spoonbill, is greenish or gray and averages about 18 kg (40 pounds); however, some specimens can grow up to 2.2 metres (7.2 feet) long and 90.7 kg (200 pounds) in weight. It lives in open waters of the Mississippi River basin, Lake Huron, and parts of southern Canada.",
    continent:"North America" new Date(Date.now())
  },
  {
    name: "Peregrine falcon",
    type: "bird",
    synopsis:
      "Also called duck hawk, the most widely distributed species of bird of prey, with breeding populations on every continent except Antarctica and many oceanic islands. Sixteen subspecies are recognized. The peregrine falcon is best known for its diving speed during flight—which can reach more than 300 km (186 miles) per hour—making it not only the world’s fastest bird but also the world’s fastest animal. Its Coloration is a bluish gray, with black bars on the white to yellowish white underparts. Adult peregrines range from about 36 to 49 cm (14.2 to 19.3 inches) in length. Strong and fast, they hunt by flying high and then diving at their prey. Attaining tremendous speeds of more than 320 km (200 miles) per hour, they strike with clenched talons and kill by impact. Their prey includes ducks and a wide variety of songbirds and shorebirds.",
    continent:"North America" new Date(Date.now())
  },
  {
    name: "American alligator",
    type: "reptile",
    synopsis:
      "Alligators, like other crocodilians, are large animals with powerful tails that are used both in defense and in swimming. Their eyes, ears, and nostrils are placed on top of their long head and project slightly above the water when the reptiles float at the surface, as they often do. Alligators can be differentiated from true crocodiles by the form of their jaw and teeth. Alligators possess a broad U-shaped snout and have an “overbite”; that is, all the teeth of the lower jaw fit within ",
    continent:"North America" new Date(Date.now())
  },
  {
    name: "Dingo",
    type: "mammal",
    synopsis:
      "Dingo, also called warrigal, member of the family Canidae native to Australia. Most authorities regard dingoes as a subspecies of the wolf (Canis lupus dingo); however, some authorities consider dingoes to be their own species (C. dingo). The name dingo is also used to describe wild dogs of Malaysia, Thailand, the Philippines, and New Guinea. The dingo was apparently introduced to Southeast Asia, the Philippines, Indonesia, and Australia by sea travelers..",
    continent:"Australia" new Date(Date.now())
  },
  {
    name: "Frilled lizard",
    type: "reptile",
    synopsis:
      "(Chlamydosaurus kingii), type of reptile found in Australia and New Guinea that can run standing up on its hind legs with its forelegs and tail in the air. The scaly membrane around its neck is used as a large part of the lizard’s defensive posture. Normally, the neck frill, often as wide as the lizard is long, lies like a cape over the shoulders. When the lizard is irritated or threatened, it can raise the frill perpendicular to its body, enabling it to surprise its enemies by suddenly displaying a head several times its normal size.Its common names come from the large frill around its neck, which usually stays folded against the lizard's body. C. kingii is largely arboreal, spending the majority of its time in the trees. Its diet consists mainly of insects and small vertebrates. Frill-necked lizards, or 'frillies' as some call them, will occasionally eat plants as well, although this behaviour is uncommon. It's a relatively large lizard, averaging 85 cm (2.79 ft) in total length (including tail) and is kept as an exotic pet.",
    continent:"Australia" new Date(Date.now())
  },
  {
    name: "Cockatoo",
    type: "bird",
    synopsis:
      "Cockatoo, (family Cacatuidae), any of the 21 species of crested parrots (order Psittaciformes) found in Australia as well as in New Guinea and the Solomon Islands. Most are white with touches of red or yellow; some are black. All have a massive scimitar-like beak for cracking nuts, digging up roots, or prying grubs from wood; feeding is aided by a strong tongue. Cockatoos are treetop, hole-nesting birds; at times they form large, noisy flocks. Because they are showy, inventive, and affectionate, many are caged as pets. Some live more than 50 years. Cockatoos are recognisable by the prominent crests and curved bills. Their plumage is generally less colourful than that of other parrots, being mainly white, grey or black and often with coloured features in the crest, cheeks or tail. On average they are larger than other parrots; however, the cockatiel, the smallest cockatoo species, is a small bird. The phylogenetic position of the cockatiel remains unresolved, other than that it is one of the earliest offshoots of the cockatoo lineage. ",
    continent:"Australia" new Date(Date.now())
  },
  {
    name: "Rainbow fish",
    type: "fish",
    synopsis:
      "The rainbowfish are a family, Melanotaeniidae, of small, colourful, freshwater fish found in northern and eastern Australia, New Guinea, islands in Cenderawasih Bay and Raja Ampat Islands in Indonesia, and in Madagascar.Most species of rainbowfish are less than 12 cm (4.7 in) in length, with some species measuring less than 6 cm (2.4 in), while one species, Melanotaenia vanheurni, reaches lengths of up to 20 cm (7.9 in). They live in a wide range of freshwater habitats, including rivers, lakes, and swamps. Although they spawn all year round, they lay a particularly large number of eggs at the start of the local rainy season. The eggs are attached to aquatic vegetation, and hatch seven to 18 days later. Rainbowfish are omnivorous, feeding on small crustaceans, insect larvae, and algae.",
    continent: new Date(Date.now())
  },
  {
    name: "1984",
    type: "George Orwell",
    synopsis:
      "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
    date: new Date(Date.now())
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    synopsis:
      "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's. \"We will each write a story,\" Byron announced to his next-door neighbors, Mary Wollstonecraft Godwin and her lover Percy Bysshe Shelley. The friends were summering on the shores of Lake Geneva in Switzerland in 1816, Shelley still unknown as a poet and Byron writing the third canto of Childe Harold. When continued rains kept them confined indoors, all agreed to Byron's proposal. The illustrious poets failed to complete their ghost stories, but Mary Shelley rose supremely to the challenge. With Frankenstein, she succeeded admirably in the task she set for herself: to create a story that, in her own words, \"would speak to the mysterious fears of our nature and awaken thrilling horror -- one to make the reader dread to look round, to curdle the blood, and quicken the beatings of the heart.\"",
    date: new Date(Date.now())
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    synopsis:
      "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    date: new Date(Date.now())
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    author: "Trevor Noah",
    synopsis:
      "Trevor Noah, one of the comedy world's fastest-rising stars and host of The Daily Show, tells his wild coming-of-age story during the twilight of apartheid in South Africa and the tumultuous days of freedom that followed. In this Audible Studios production, Noah provides something deeper than traditional memoirists: powerfully funny observations about how farcical political and social systems play out in our lives. \"Nelson Mandela once said, 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.' He was so right. When you make the effort to speak someone elses language, even if it's just basic phrases here and there, you are saying to them, 'I understand that you have a culture and identity that exists beyond me. I see you as a human being.'\" (Trevor Noah)\nAttuned to the power of language at a young age - as a means of acceptance and influence in a country divided, then subdivided, into groups at odds with one another - Noah's raw, personal journey becomes something extraordinary in audio: a true testament to the power of storytelling. With brutal honesty and piercing wit, he forgoes an ordinary reading and, instead, delivers something more intimate, sharing his story with the openness and candor of a close friend. His chameleon-like ability to mimic accents and dialects, to shift effortlessly between languages including English, Xhosa, and Zulu, and to embody characters throughout his childhood - his mother, his gran, his schoolmates, first crushes and infatuations - brings each memory to life in vivid detail. Hearing him directly, you're reminded of the gift inherent in telling one's story and having it heard; of connecting with another, and seeing them as a human being.\nThe stories Noah tells are by turns hilarious, bizarre, tender, dark, and poignant - subsisting on caterpillars during months of extreme poverty, making comically pitiful attempts at teenage romance in a color-obsessed world, thrown into jail as the hapless fall guy for a crime he didn't commit, thrown by his mother from a speeding car driven by murderous gangsters, and more.",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
