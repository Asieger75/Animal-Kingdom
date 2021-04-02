const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const animalSeed = [
  {
    name: "Lion",
    type: "mammal",
    synopsis:
      " A large, powerfully built cat that is second in size only to the tiger. The proverbial “king of beasts,” the lion has been one of the best-known wild animals since earliest times. Lions are most active at night and live in a variety of habitats but prefer grassland, savanna, dense scrub, and open woodland.",
    continent: "Africa",
  },
  {
    name: "Shoebill",
    type: "bird",
    synopsis:
      "A large African wading bird, the species is named for its clog-shaped bill, which is an adaptation for catching and holding the large, slippery lungfish, its favourite food. This big bird also eats turtles, fish, and young crocodiles. Shoebills stand about 115 cm (3.8 feet) tall. They are entirely gray, with broad wings and long legs. The head is large in proportion to the body, and the eyes are also exceptionally large. The shoebill claps the mandibles of its bill together as a display, producing a loud, hollow sound. Like herons and pelicans, shoebills fly with the head held back against the body.",
    continent: "Africa",
  },
  {
    name: "Chameleon",
    type: "reptile",
    synopsis:
      "(family Chamaeleonidae), any of a group of primarily arboreal (tree-dwelling) Old World lizards best known for their ability to change body colour. Other characteristics of chameleons include zygodactylous feet (with toes fused into opposed bundles of two and three), acrodont dentition (with the teeth attached to the edge of the jaw), eyes that move independently, atrophied venom glands that produce harmless trace amounts of venom, and a long, slender projectile tongue. ",
    continent: "Africa",
  },
  {
    name: "Great White Shark",
    type: "fish",
    synopsis:
      "any member of the largest living species of the mackerel sharks (Lamnidae) and one of the most powerful and dangerous predatory sharks in the world. Starring as the villain of movies such as Jaws (1975), the white shark is much maligned and publicly feared. However, surprisingly little is understood of its life and behaviour.",
    continent: "Africa",
  },
  {
    name: "American Bison",
    type: "mammal",
    synopsis:
      "The American bison also commonly known as the American buffalo or simply buffalo, is an American species of bison that once roamed North America in vast herds. Its historical range, by 9000 BC, is described as the great bison belt, a tract of rich grassland that ran from Alaska to the Gulf of Mexico, east to the Atlantic Seaboard (nearly to the Atlantic tidewater in some areas) as far north as New York and south to Georgia and, according to some sources, down to Florida, with sightings in North Carolina near Buffalo Ford on the Catawba River as late as 1750.",
    continent: "North America",
  },
  {
    name: "American paddlefish",
    type: "fish",
    synopsis:
      "An archaic freshwater fish with a paddlelike snout, a wide mouth, smooth skin, and a cartilaginous skeleton. A relative of the sturgeon, the paddlefish makes up the family Polyodontidae in the order Acipenseriformes. A paddlefish feeds with its mouth gaping open and its gill rakers straining plankton from the water through its gills.The American paddlefish (Polyodon spathula), also called the Mississippi paddlefish or spoonbill, is greenish or gray and averages about 18 kg (40 pounds); however, some specimens can grow up to 2.2 metres (7.2 feet) long and 90.7 kg (200 pounds) in weight. It lives in open waters of the Mississippi River basin, Lake Huron, and parts of southern Canada.",
    continent: "North America",
  },
  {
    name: "Peregrine falcon",
    type: "bird",
    synopsis:
      "Also called duck hawk, the most widely distributed species of bird of prey, with breeding populations on every continent except Antarctica and many oceanic islands. Sixteen subspecies are recognized. The peregrine falcon is best known for its diving speed during flight—which can reach more than 300 km (186 miles) per hour—making it not only the world’s fastest bird but also the world’s fastest animal. Its Coloration is a bluish gray, with black bars on the white to yellowish white underparts. Adult peregrines range from about 36 to 49 cm (14.2 to 19.3 inches) in length. Strong and fast, they hunt by flying high and then diving at their prey. Attaining tremendous speeds of more than 320 km (200 miles) per hour, they strike with clenched talons and kill by impact. Their prey includes ducks and a wide variety of songbirds and shorebirds.",
    continent: "North America",
  },
  {
    name: "American alligator",
    type: "reptile",
    synopsis:
      "Alligators, like other crocodilians, are large animals with powerful tails that are used both in defense and in swimming. Their eyes, ears, and nostrils are placed on top of their long head and project slightly above the water when the reptiles float at the surface, as they often do. Alligators can be differentiated from true crocodiles by the form of their jaw and teeth. Alligators possess a broad U-shaped snout and have an “overbite”; that is, all the teeth of the lower jaw fit within ",
    continent: "North America",
  },
  {
    name: "Dingo",
    type: "mammal",
    synopsis:
      "Dingo, also called warrigal, member of the family Canidae native to Australia. Most authorities regard dingoes as a subspecies of the wolf (Canis lupus dingo); however, some authorities consider dingoes to be their own species (C. dingo). The name dingo is also used to describe wild dogs of Malaysia, Thailand, the Philippines, and New Guinea. The dingo was apparently introduced to Southeast Asia, the Philippines, Indonesia, and Australia by sea travelers..",
    continent: "Australia",
  },
  {
    name: "Frilled lizard",
    type: "reptile",
    synopsis:
      "(Chlamydosaurus kingii), type of reptile found in Australia and New Guinea that can run standing up on its hind legs with its forelegs and tail in the air. The scaly membrane around its neck is used as a large part of the lizard’s defensive posture. Normally, the neck frill, often as wide as the lizard is long, lies like a cape over the shoulders. When the lizard is irritated or threatened, it can raise the frill perpendicular to its body, enabling it to surprise its enemies by suddenly displaying a head several times its normal size.Its common names come from the large frill around its neck, which usually stays folded against the lizard's body. C. kingii is largely arboreal, spending the majority of its time in the trees. Its diet consists mainly of insects and small vertebrates. Frill-necked lizards, or 'frillies' as some call them, will occasionally eat plants as well, although this behaviour is uncommon. It's a relatively large lizard, averaging 85 cm (2.79 ft) in total length (including tail) and is kept as an exotic pet.",
    continent: "Australia",
  },
  {
    name: "Cockatoo",
    type: "bird",
    synopsis:
      "Cockatoo, (family Cacatuidae), any of the 21 species of crested parrots (order Psittaciformes) found in Australia as well as in New Guinea and the Solomon Islands. Most are white with touches of red or yellow; some are black. All have a massive scimitar-like beak for cracking nuts, digging up roots, or prying grubs from wood; feeding is aided by a strong tongue. Cockatoos are treetop, hole-nesting birds; at times they form large, noisy flocks. Because they are showy, inventive, and affectionate, many are caged as pets. Some live more than 50 years. Cockatoos are recognisable by the prominent crests and curved bills. Their plumage is generally less colourful than that of other parrots, being mainly white, grey or black and often with coloured features in the crest, cheeks or tail. On average they are larger than other parrots; however, the cockatiel, the smallest cockatoo species, is a small bird. The phylogenetic position of the cockatiel remains unresolved, other than that it is one of the earliest offshoots of the cockatoo lineage. ",
    continent: "Australia",
  },
  {
    name: "Rainbow fish",
    type: "fish",
    synopsis:
      "The rainbowfish are a family, Melanotaeniidae, of small, colourful, freshwater fish found in northern and eastern Australia, New Guinea, islands in Cenderawasih Bay and Raja Ampat Islands in Indonesia, and in Madagascar.Most species of rainbowfish are less than 12 cm (4.7 in) in length, with some species measuring less than 6 cm (2.4 in), while one species, Melanotaenia vanheurni, reaches lengths of up to 20 cm (7.9 in). They live in a wide range of freshwater habitats, including rivers, lakes, and swamps. Although they spawn all year round, they lay a particularly large number of eggs at the start of the local rainy season. The eggs are attached to aquatic vegetation, and hatch seven to 18 days later. Rainbowfish are omnivorous, feeding on small crustaceans, insect larvae, and algae.",
    continent: "Australia",
  },
  {
    name: "Red deer",
    type: "mammal",
    synopsis:
      "The red deer (Cervus elaphus) is one of the largest deer species. A male red deer is called a stag or hart, and a female is called a hind. The red deer inhabits most of Europe, the Caucasus Mountains region, Asia Minor, Iran, parts of western Asia, and central Asia. It also inhabits the Atlas Mountains region between Morocco and Tunisia in northwestern Africa, being the only species of deer to inhabit Africa. Red deer have been introduced to other areas, including Australia, New Zealand, the United States, Canada, Peru, Uruguay, Chile, and Argentina.[2][3] In many parts of the world, the meat (venison) from red deer is used as a food source. Red deer are ruminants, characterized by a four-chambered stomach. Genetic evidence indicates that the red deer, as traditionally defined, is a species group, rather than a single species, though exactly how many species the group includes remains disputed.",
    continent: "Europe",
  },
  {
    name: "European bullhead",
    type: "fish",
    synopsis:
      "is a freshwater fish that is widely distributed in Europe, mainly in rivers. It is a member of the family Cottidae, a type of sculpin. It is also known as the miller's thumb, freshwater sculpin, and common bullhead. The European bullhead is a small demersal fish that lives both in cold, clear, fast-flowing small streams and in middle-sized rivers. It also occurs on gravelly shores of cold lakes. Further, it thrives in diluted brackish water of the Northern Baltic Sea. The bullhead has a large broad head and tapering body, large fins and a rounded tail. The eyes are located near the top of the head. To the distinction from the other freshwater sculpin species found in Northern Europe.",
    continent: "Europe",
  },
  {
    name: "European turtle dove",
    type: "bird",
    synopsis:
      "The European turtle dove (Streptopelia turtur) is a member of the bird family Columbidae, the doves and pigeons. It breeds over a wide area of the south western Palearctic including north Africa but migrates to northern sub-Saharan Africa to winter.The European turtle dove may be recognised by its browner colour, and the black-and-white-striped patch on the side of its neck. The tail is notable as the bird flies from the observer; it is wedge shaped, with a dark centre and white borders and tips.",
    continent: "Europe",
  },
  {
    name: "Horned viper",
    type: "reptile",
    synopsis:
      " It is reputed to be the most dangerous of the European vipers due to its large size, long fangs (up to 13 mm) and high venom toxicity. The specific name, ammodytes, is derived from the Greek words ammos, meaning sand, and dutes, meaning burrower or diver, despite its preference for rocky habitats.. V. ammodytes grows to a maximum total length (body + tail) of 95 cm (37.5 in), although individuals usually measure less than 85 cm (33.5 in).The most distinctive characteristic is a single horn on the snout, just above the rostral scale. It consists of 9–17 scales arranged in 2 (rarely 2 or 4) transverse rows. It grows to a length of about 5 mm (0.20 in) and is actually soft and flexible. ",
    continent: "Europe",
  },
  {
    name: "Leafy sea dragon",
    type: "fish",
    synopsis:
      " The leafy seadragon (Phycodurus eques) or Glauert's seadragon, is a marine fish in the family Syngnathidae, which includes seadragons, pipefish, and seahorses. It is the only member of the genus Phycodurus. Leafy seadragon skeleton It is found along the southern and western coasts of Australia. The name is derived from the appearance, with long leaf-like protrusions coming from all over the body. These protrusions are not used for propulsion; they serve only as camouflage. The leafy seadragon propels itself by means of a pectoral fin on the ridge of its neck and a dorsal fin on its back closer to the tail end. These small fins are almost completely transparent and difficult to see as they undulate minutely to move the creature sedately through the water, completing the illusion of floating seaweed.",
    continent: "Oceania",
  },
  {
    name: "Orca whale",
    type: "mammal",
    synopsis:
      " The killer whale or orca (Orcinus orca) is a toothed whale belonging to the oceanic dolphin family, of which it is the largest member. It is recognizable by its black body with a white underside and patches near each eye. Killer whales have a diverse diet, although individual populations often specialize in particular types of prey. Some feed exclusively on fish, while others hunt marine mammals such as seals and other species of dolphin. They have been known to attack baleen whale calves, and even adult whales. Killer whales are apex predators, as no animal preys on them. A cosmopolitan species, killer whales can be found in all of the world's oceans in a variety of marine environments, from Arctic and Antarctic regions to tropical seas, absent only from the Baltic and Black seas, and some areas of the Arctic Ocean. They are highly social; some populations are composed of matrilineal family groups (pods) which are the most stable of any animal species. Their sophisticated hunting techniques and vocal behaviours, which are often specific to a particular group and passed across generations, have been described as manifestations of animal culture..",
    continent: "Oceana",
  },
  {
    name: "Wandering albatross",
    type: "bird",
    synopsis:
      " The wandering albatross, snowy albatross, or white-winged albatross is a large seabird from the family Diomedeidae, which has a circumpolar range in the Southern Ocean. It was the last species of albatross to be described, and was long considered the same species as the Tristan albatross and the Antipodean albatross. A few authors still consider them all subspecies of the same species.The wandering albatross has the longest wingspan of any living bird, typically ranging from 2.51 to 3.5 m (8 ft 3 in to 11 ft 6 in), with a mean span of 3.1 m (10 ft 2 in) in the Bird Island, South Georgia colony and an average of exactly 3 m (9 ft 10 in) in 123 birds measured off the coast of Malabar, New South Wales. As a result of its wingspan, it is capable of remaining in the air without flapping its wings for several hours at a time (travelling 22 m for every metre of drop). The length of the body is about 107 to 135 cm (3 ft 6 in to 4 ft 5 in) with females being slightly smaller than males. ",
    continent: "Oceana",
  },
  {
    name: "Salt water crocodile",
    type: "reptile",
    synopsis:
      " The saltwater crocodile is the largest living reptile and crocodilian known to science.[3][4][5] Males grow to a length of up to 6 m (20 ft), rarely exceeding 6.3 m (21 ft) or a weight of 1,000–1,300 kg (2,200–2,900 lb). Females are much smaller and rarely surpass 3 m (10 ft).It is also known as the estuarine crocodile, Indo-Pacific crocodile, marine crocodile, sea crocodile or informally as saltie. The saltwater crocodile is a large and opportunistic hypercarnivorous apex predator. It ambushes most of its prey and then drowns or swallows it whole. It is capable of prevailing over almost any animal that enters its territory, including other apex predators such as sharks, varieties of freshwater and saltwater fish including pelagic species, invertebrates such as crustaceans, various reptiles, birds and mammals, including humans.",
    continent: "Oceana",
  },
];

db.animalSeed
  .remove({})
  .then(() => db.animalSeed.collection.insertMany(animalSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
