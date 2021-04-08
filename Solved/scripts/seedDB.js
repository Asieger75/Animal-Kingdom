const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animaldb");

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
      "The red deer (Cervus elaphus) is one of the largest deer species. A male red deer is called a stag or hart, and a female is called a hind. The red deer inhabits most of Europe, the Caucasus Mountains region, Asia Minor, Iran, parts of western Asia, and central Asia. It also inhabits the Atlas Mountains region between Morocco and Tunisia in northwestern Africa, being the only species of deer to inhabit Africa. Red deer have been introduced to other areas, including Australia, New Zealand, the United States, Canada, Peru, Uruguay, Chile, and Argentina. In many parts of the world, the meat (venison) from red deer is used as a food source. Red deer are ruminants, characterized by a four-chambered stomach. Genetic evidence indicates that the red deer, as traditionally defined, is a species group, rather than a single species, though exactly how many species the group includes remains disputed.",
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
      "  It is the largest and most powerful raptor found throughout its range, and among the largest extant species of eagles in the world. It usually inhabits tropical lowland rainforests in the upper (emergent) canopy layer. Destruction of its natural habitat has caused it to vanish from many parts of its former range, and it is nearly extirpated from much of Central America. In Brazil, the harpy eagle is also known as royal-hawk",
    continent: "Oceana",
  },
  {
    name: "Salt water crocodile",
    type: "reptile",
    synopsis:
      " The saltwater crocodile is the largest living reptile and crocodilian known to science. Males grow to a length of up to 6 m (20 ft), rarely exceeding 6.3 m (21 ft) or a weight of 1,000–1,300 kg (2,200–2,900 lb). Females are much smaller and rarely surpass 3 m (10 ft).It is also known as the estuarine crocodile, Indo-Pacific crocodile, marine crocodile, sea crocodile or informally as saltie. The saltwater crocodile is a large and opportunistic hypercarnivorous apex predator. It ambushes most of its prey and then drowns or swallows it whole. It is capable of prevailing over almost any animal that enters its territory, including other apex predators such as sharks, varieties of freshwater and saltwater fish including pelagic species, invertebrates such as crustaceans, various reptiles, birds and mammals, including humans.",
    continent: "Oceana",
  },
  {
    name: "Harpy eagle",
    type: "bird",
    synopsis:
      " The harpy eagle (Harpia harpyja) is a neotropical species of eagle. It is also called the American harpy eagle to distinguish it from the Papuan eagle, which is sometimes known as the New Guinea harpy eagle or Papuan harpy eagle. It is the largest and most powerful raptor found throughout its range, and among the largest extant species of eagles in the world. It usually inhabits tropical lowland rainforests in the upper (emergent) canopy layer. Destruction of its natural habitat has caused it to vanish from many parts of its former range, and it is nearly extirpated from much of Central America.The upperside of the harpy eagle is covered with slate-black feathers, and the underside is mostly white, except for the feathered tarsi, which are striped black. A broad black band across the upper breast separates the gray head from the white belly. The head is pale grey, and is crowned with a double crest.",
    continent: "South America",
  },
  {
    name: "Armadillo",
    type: "mammal",
    synopsis:
      "Armadillos (meaning little armored ones in Spanish) are New World placental mammals in the order Cingulata. The Chlamyphoridae and Dasypodidae are the only surviving families in the order, which is part of the superorder Xenarthra, along with the anteaters and sloths. Nine extinct genera and 21 extant species of armadillo have been described, some of which are distinguished by the number of bands on their armor. All species are native to the Americas, where they inhabit a variety of different environments. Armadillos are characterized by a leathery armor shell and long sharp claws for digging. They have short legs, but can move quite quickly. The average length of an armadillo is about 75 cm (30 in), including tail. The giant armadillo grows up to 150 cm (59 in) and weighs up to 54 kg (119 lb), while the pink fairy armadillo has a length of only 13–15 cm (5–6 in). When threatened by a predator, Tolypeutes species frequently roll up into a ball (these being the only species of Armadillo capable of such).",
    continent: "South America",
  },
  {
    name: "Piranha",
    type: "fish",
    synopsis:
      " is a freshwater fish that inhabits South American rivers, floodplains, lakes and reservoirs. Although often described as extremely predatory and mainly feeding on fish, their dietary habits vary extensively, and they will also take plant material, leading to their classification as omnivorous.Piranhas have one of the strongest bites found in bony fishes. Relative to body mass, the black piranha (Serrasalmus rhombeus) produces one of the most forceful bites measured in vertebrates. This extremely powerful and dangerous bite is generated by large jaw muscles (adductor mandibulae) that are attached closely to the tip of the jaw, conferring the piranha with a mechanical advantage that favors force production over bite speed. Strong jaws combined with finely serrated teeth make them adept at tearing flesh.",
    continent: "South America",
  },
  {
    name: "Galapagos tortoise",
    type: "reptile",
    synopsis:
      " The Galápagos tortoise complex or Galápagos giant tortoise complex (Chelonoidis niger and related species) is a species complex of 15 (12 extant and 2-3 extinct) very large tortoise species in the genus Chelonoidis (which also contains three other species from mainland South America). They are the largest living species of tortoise, with some modern Galápagos tortoises weighing up to 417 kg (919 lb). With lifespans in the wild of over 100 years, they are one of the longest-lived vertebrates. A captive individual, Harriet, lived for at least 175 years. Spanish explorers, who discovered the islands in the 16th century, named them after the Spanish galápago, meaning tortoise.The Galápagos tortoises are native to seven of the Galápagos Islands. Shell size and shape vary between populations. On islands with humid highlands, the tortoises are larger, with domed shells and short necks; on islands with dry lowlands, the tortoises are smaller, with saddleback shells and long necks.",
    continent: "South America",
  },
  {
    name: "Leoparad seal",
    type: "mammal",
    synopsis:
      " The leopard seal (Hydrurga leptonyx), also referred to as the sea leopard,is the second largest species of seal in the Antarctic (after the southern elephant seal). Its only natural predator is the killer whale. It feeds on a wide range of prey including cephalopods, other pinnipeds, krill, birds and fish. It is the only species in the genus Hydrurga.The name hydrurga means water worker and leptonyx is the Greek for small clawed.The leopard seal has a distinctively long and muscular body shape when compared to other seals, but it is perhaps best known for its reptilian-like head and massive jaws which are enormous for its body size and which allow it to be one of the top predators in its environment.",
    continent: "Antartica",
  },
  {
    name: "Emperor penguin",
    type: "bird",
    synopsis:
      "The emperor penguin (Aptenodytes forsteri) is the tallest and heaviest of all living penguin species and is endemic to Antarctica. The male and female are similar in plumage and size, reaching 100 cm (39 in) in length and weighing from 22 to 45 kg (49 to 99 lb). Feathers of the head and back are black and sharply delineated from the white belly, pale-yellow breast and bright-yellow ear patches.Like all penguins it is flightless, with a streamlined body, and wings stiffened and flattened into flippers for a marine habitat. Its diet consists primarily of fish, but also includes crustaceans, such as krill, and cephalopods, such as squid. While hunting, the species can remain submerged around 20 minutes, diving to a depth of 535 m (1,755 ft). It has several adaptations to facilitate this, including an unusually structured haemoglobin to allow it to function at low oxygen levels, solid bones to reduce barotrauma, and the ability to reduce its metabolism and shut down non-essential organ functions",
    continent: "Antartica",
  },
  {
    name: "Anartic toothfish",
    type: "fish",
    synopsis:
      "Fully grown, these fish (and their warmer-water relative, the Patagonian toothfish, D. eleginoides) can grow to more than 1.7 m (5 ft 7 in) in length and 135 kg in weight, twice as large as the next-largest Antarctic fish. Being large, and consistent with the unstructured food webs of the ocean (i.e., big fish eat little fish regardless of identity, even eating their own offspring), the Antarctic toothfish has been characterized as a voracious predator. Furthermore, by being by far the largest midwater fish in the Southern Ocean, it is thought to fill the ecological role that sharks play in other oceans.Aiding in that role, the Antarctic toothfish is one of only five notothenioid species that, as adults, are neutrally buoyant. This buoyancy is attained at 100–120 cm in length and enables them to spend time above the bottom without expending extra energy.",
    continent: "Antartica",
  },
];

db.animal
  .remove({})
  .then(() => db.animal.collection.insertMany(animalSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
