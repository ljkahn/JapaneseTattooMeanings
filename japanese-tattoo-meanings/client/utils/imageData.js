const imageData = [
  {
    id: 1,
    category: "Deities",
    imageUri: require("../assets/deities/Benzaiten.jpeg"),
    title: "Benzaiten",
    artist: "Aoigaoka Keisei",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Dragon (Ryū), Lucky Charms, Seven Lucky Gods (Shichi Fuku Jin)", 
    keywords: ["benzaiten", "deities", "god", "aoigaoka keisei"]
  },
  {
    id: 2,
    category: "Deities",
    imageUri: require("../assets/deities/Bishamonten.jpeg"),
    title: "Bishamonten",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Oni, Seven Lucky Gods (Shichi Fuku Jin)",
    keywords: ["bishamonten", "deities", "god"]
  },
  {
    id: 3,
    category: "Deities",
    imageUri: require("../assets/deities/daiikotu.jpg"),
    title: "Daiitoku Myo-Ō",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Standalone",
    keywords: ["daiitoku myo-ō", "deities", "god"]
  },
  {
    id: 4,
    category: "Deities",
    imageUri: require("../assets/deities/daiikokuten.png"),
    title: "Daikokuten",
    artist: "Kitagawa Utamaro II, Ni Dai Me Kitagawa Utamaro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Ebisu, Flowers, Seven Lucky Gods (Shichi Fuku Jin)",
    keywords: ["daikokuten", "deities", "god", "kitagawa utamaro ii", "ni dai me kitagawa utamaro"]
  },
  {
    id: 5,
    category: "Deities",
    imageUri: require("../assets/deities/dainichi.jpeg"),
    title: "Dainichi Nyorai",
    artist: "13th Century Unknown",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lotus (Renge)",
    keywords: ["dainichi nyorai", "deities", "god", "13th century"]
  },
  {
    id: 6,
    category: "Deities",
    imageUri: require("../assets/deities/dakiniten.jpeg"),
    title: "Dakiniten",
    artist: "",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Fox (Kitsune)",
    keywords: ["dakiniten", "deities", "god"]
  },
  {
    id: 7,
    category: "Deities",
    imageUri: require("../assets/deities/ebisu.jpeg"),
    title: "Ebisu",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Flowers, Lucky Charms, Sea Bream (Taj), Seven Lucky Gods (Shichi Fuku Jin)",
    keywords: ["ebisu", "deities", "god"]
  },
  {
    id: 8,
    category: "Deities",
    imageUri: require("../assets/deities/enma.jpg"),
    title: "Enma",
    artist: "",
    tattooBackgrounds: "Clouds, Fire, Stone",
    pairings: "Apparition (Yokai), Demons (Oni)",
    keywords: ["enma", "deities", "god"]
  },
  {
    id: 9,
    category: "Deities",
    imageUri: require("../assets/deities/fudomyoo.jpeg"),
    title: "Fudō Myo-Ō",
    artist: "Ogata Gekko",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Lotus (Renge), Kongara Dōji, Seitaka Dōji, Phoenix-Shaped Flame",
    keywords: ["fudō myo-ō", "deities", "god", "ogata gekko"]
  },
  {
    id: 10,
    category: "Deities",
    imageUri: require("../assets/deities/fuijinRijin.jpeg"),
    title: "Fūjin and Raijin",
    artist: "",
    tattooBackgrounds: "Clouds, Lightening, Water",
    pairings: "Dragon (Ryū)",
    keywords: ["fūjin", "raijin", "deities", "gods"]
  },
  {
    id: 11,
    category: "Deities",
    imageUri: require("../assets/deities/hotei.webp"),
    title: "Hotei",
    artist: "",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Seven Lucky Gods (Schichi Fuku Jin)",
    keywords: ["hotei", "deities", "god"]
  },
  {
    id: 12,
    category: "Deities",
    imageUri: require("../assets/deities/kannon.png"),
    title: "Kannon",
    artist: "",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Carp (Koi), Dragon (Ryū), Flowers, Lotus (Renge)",
    keywords: ["kannon", "deities", "goddess"]
  },
  {
    id: 13,
    category: "Deities",
    imageUri: require("../assets/deities/niO.jpg"),
    title: "Ni-Ō",
    artist: "Katsushika Hokusai  (1760–1849)",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Figures, Demons (Oni), Flowers",
    keywords: ["ni-ō", "deities", "god", "katsushika hokusai"]
  },
  {
    id: 14,
    category: "Deities",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Seven Lucky Gods",
    artist: "Katsushika Hokusai",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Standalone",
    keywords: ["seven lucky gods", "deities", "gods", "katsushika hokusai"]
  },
  {
    id: 15,
    category: "Deities",
    imageUri:require("../assets/deities/susano.jpg"),
    title: "Susanō",
    artist: "Utagawa Kuniteru",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Inada Hime, Shintō Deities, Yamata no Orochi",
    keywords: ["susanō", "deities", "god", "utagawa kuniteru"]
  },
  {
    id: 16,
    category: "Deities",
    imageUri:require("../assets/deities/tennyo.jpeg"),
    title: "Tennyo",
    artist: "Katsukawa Shunsho",
    tattooBackgrounds: "Clouds, Water, Stone",
    pairings: "Buddhist Deities, Flowers",
    keywords: ["tennyo", "deities", "goddess", "katsukawa shunsho"]
  },
  {
    id: 17,
    category: "Deities",
    imageUri:require("../assets/deities/oanamuchi.jpeg"),
    title: "Oanamuchi no Mikoto",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Wild Beasts",
    keywords: ["oanamuchi no mikoto", "deities", "god", "utagawa kuniyoshi"]
  },
  {
    id: 18,
    category: "Fauna",
    imageUri:require("../assets/fauna/carp.webp"),
    title: "Carp",
    artist: "Utagawa Toyokuni",
    tattooBackgrounds: "Water",
    pairings: "Dragon (Ryū), Flowers, Goldfish (Kingyo)",
    keywords: ["carp", "fauna", "utagawa toyokuni", "fish", "koi"]
  },
  {
    id: 20,
    category: "Fauna",
    imageUri:require("../assets/fauna/crane.jpeg"),
    title: "Crane",
    artist: "Utagawa Hiroshige",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Lucky Charms",
    keywords: ["crane", "fauna", "utagawa hiroshige", "bird"]
  },
  {
    id: 21,
    category: "Fauna",
    imageUri: require("../assets/fauna/fox.webp"),
    title: "Fox",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dakiniten, Deities, Flowers, Inari (Inari Ōkami), Lucky Charms",
    keywords: ["fox", "fauna", "utagawa kuniyoshi", "kitsune"]
  },
  {
    id: 23,
    category: "Fauna",
    imageUri:require("../assets/fauna/goldfish.jpeg"),
    title: "Goldfish",
    artist: "Ohara Koson",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Flowers, Freshwater Elements, Lucky Charms",
    keywords: ["goldfish", "fauna", "ohara koson", "fish", "kingyo"]
  },
  {
    id: 24,
    category: "Fauna",
    imageUri:require("../assets/fauna/hawk.jpg"),
    title: "Hawk",
    artist: "Eisen Keisai",
    tattooBackgrounds: "Clouds",
    pairings: "Camellias (Tsubaki), Flowers, Pine Trees (Matsu), Snake (Hebi), Warriors",
    keywords: ["hawk", "fauna", "eisen keisai", "bird"]
  },
  {
    id: 25,
    category: "Fauna",
    imageUri:require("../assets/fauna/snake.jpeg"),
    title: "Snake",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: " Flowers, Hakamadare, Hannya, Kintarō, Orochimaru, Saginoike Heikurō",
    note: "Snakes can be paired with many elements beyond the brief listing above.",
    keywords: ["snake", "fauna", "utagawa kuniyoshi", "hebi"]
  },
  {
    id: 26,
    category: "Fauna",
    imageUri:require("../assets/fauna/tiger.jpeg"),
    title: "Tiger",
    artist: "Ohara Koson",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Bamboo (Take), Demons (Oni), Dragon (Ryū), Flowers, Gyōja Bushō, Shoki",
    keywords: ["tiger", "fauna", "ohara koson", "tora"]
  },
  {
    id: 27,
    category: "Flora",
    imageUri:require("../assets/flora/bamboo.webp"),
    title: "Bamboo",
    artist: "Hiroshi Yoshida",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Birds, Chinese Elements, Shōchikubai, Tiger (Tora), Warriors",
    keywords: ["bamboo", "flora", "hiroshi yoshida", "take"]
  },
  {
    id: 28,
    category: "Flora",
    imageUri:require("../assets/flora/cherryBlossoms.jpeg"),
    title: "Cherry Blossoms",
    artist: "Yoshimoto Gesso",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Spring Elements, Elements associated with mortality",
    note: "Cherry Blossoms can be paired with many elements beyond the brief listing above.",
    keywords: ["cherry blossoms", "flora", "yoshimoto gesso", "sakura"]
  },
  {
    id: 29,
    category: "Flora",
    imageUri:require("../assets/flora/mum.jpeg"),
    title: "Chrysanthemum",
    artist: "Shodo Kawarazaki",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Dragon (Ryū), Kirin, Phoenix (Hō-Ō)",
    note: "Chrysanthemum can be paired with many elements beyond the brief listing above.",
    keywords: ["chrysanthemum", "flora", "shodo kawarazaki", "mum"]
  },
  {
    id: 30,
    category: "Flora",
    imageUri:require("../assets/flora/lotus.jpeg"),
    title: "Lotus",
    artist: "Ohara Koson",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities and Elements",
    keywords: ["lotus", "flora", "ohara koson", "renge"]
  },
  {
    id: 31,
    category: "Flora",
    imageUri:require("../assets/flora/maple.jpeg"),
    title: "Maple Leaves",
    artist: " Kawarazaki Shodo",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Autumn Elements",
    note: "Maple Leaves can be paired with many elements beyond the brief listing above.",
    keywords: ["maple leaves", "flora", "kawarazaki shodo", "momiji"]
  },
  {
    id: 32,
    category: "Flora",
    imageUri:require("../assets/flora/peach.webp"),
    title: "Peach",
    artist: "Morimoto Toko",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Momotarō, Spring and Summer Elements",
    keywords: ["peach", "flora", "morimoto toko", "momo"]
  },
  {
    id: 33,
    category: "Flora",
    imageUri:require("../assets/flora/peony1.jpeg"),
    title: "Peony",
    artist: "Tanigami Konan",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Animals, Deities, Heroes, Mythological Creatures, Spring and Summer Elements",
    keywords: ["peony", "flora", "tanigami konan", "botan"]
  },
  {
    id: 34,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/banzuiin.jpeg"),
    title: "Banzuiin Chōbei",
    artist: "Utagawa Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura), Human Enemies",
    keywords: ["banzuiin chōbei", "folklore/history", "utagawa kuniyoshi"]
  },
  {
    id: 35,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/benkei.jpeg"),
    title: "Benkei",
    artist: "Utagawa Kunisada",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Maple Leaves (Momiji), Cherry Blossoms (Sakura), Human Enemies, Minamoto no Yoshitsune",
    keywords: ["benkei", "folklore/history", "utagawa kunisada"]
  },
  {
    id: 36,
    category: "Folklore/History",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Dakki no Ohyaku",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Apparition (Yōkai), Demon (Oni), Severed Heads (Namakubi)",
    keywords: ["dakki no ohyaku", "folklore/history"]
  },
  {
    id: 37,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/daruma.jpeg"),
    title: "Daruma",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Deities, Flowers, Lucky Charms, Scattered Faces (Men Chirashi)",
    keywords: ["daruma", "folklore/history", "yoshitoshi"]
  },
  {
    id: 38,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/firemen.webp"),
    title: "Firefighters",
    artist: "Kunichika Toyohara",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura), Dragon (Ryū), Phoenix (Hō-Ō), Tatooed Firefighters, Tattooed Water Elements",
    keywords: ["firefighters", "folklore/history", "kunichika toyohara"]
  },
  {
    id: 39,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/fujiwara.jpeg"),
    title: "Fujiwara no Hidesato",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Flowers, Giant Centipede (Ōmukade)",
    keywords: ["fujiwara no hidesato", "folklore/history", "yoshitoshi"]
  },
  {
    id: 40,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hakamadareKidomaru.jpeg"),
    title: "Hakamadare and Kidōmaru",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Birds of Prey, Cherry Blossoms (Sakura), Demon (Oni), Maple Leaves (Momiji), Snake (Hebi)",
    keywords: ["hakamadare", "kidōmaru", "folklore/history", "yoshitoshi"]
  },
  {
    id: 41,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hanjoDanjo.jpeg"),
    title: "Hanjō Danjō no Jō Arakage and the Giant Salamander",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Flowers, Giant Salamander (Ō Sanshō-Ō), Wild Beasts",
    keywords: ["hanjō danjō no jō arakage", "giant salamander", "folklore/history", "kuniyoshi"]
  },
  {
    id: 42,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/hannya1.jpeg"),
    title: "Hannya",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds",
    pairings: "Flowers, Scattered Faces (Men Chirashi), Snake (Hebi)",
    keywords: ["hannya", "folklore/history", "yoshitoshi"]
  },
  {
    id: 43,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hayakawa.jpeg"),
    title: "Hayakawa Ayunosuke",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["hayakawa ayunosuke", "folklore/history", "kuniyoshi"]
  },
  {
    id: 44,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/higuchi.jpeg"),
    title: "Higuchi Kanemitsue",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Wild Beasts",
    keywords: ["higuchi kanemitsue", "folklore/history", "kuniyoshi"]
  },
  {
    id: 45,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/igaTakiyasha.jpeg"),
    title: "Iga Jutarō and Takiyasha-Hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji), Spider (Kumo), Toads (Gama)",
    keywords: ["iga jutarō", "takiyasha-hime", "folklore/history", "kuniyoshi"]
  },
  {
    id: 46,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/hayataNue.webp"),
    title: "I No Hayata and the Nue",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Lightening",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
    keywords: ["i no hayata", "nue", "folklore/history", "kuniyoshi"]
  },
  {
    id: 47,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/ishikawa.jpeg"),
    title: "Ishikawa Goemon",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soliders, Flowers",
    keywords: ["ishikawa goemon", "folklore/history", "kunichika"]
  },
  {
    id: 48,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/jigoku.jpeg"),
    title: "Jigoku Dayū",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparitions (Yōkai), Cherry Blossoms (Sakura), Demons (Oni), Enma, Maple Leaves (Momiji), Skeletons",
    keywords: ["jigoku dayū", "folklore/history", "kunichika"]
  },
  {
    id: 49,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/jiraiyaTsunade.webp"),
    title: "Jiraiya and Tsunade",
    artist: "Kunisada",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Giant Snake (Orochi), Orochimaru, Slug (Namekuji), Toad (Gama)",
    keywords: ["jiraiya", "tsunade", "folklore/history", "kunisada"]
  },
  {
    id: 50,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kamigashi.jpeg"),
    title: "Kamigashi-hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Spider (Kumo), Tsuchigumo, Wild Beasts",
    keywords: ["kamigashi-hime", "folklore/history", "kuniyoshi"]
  },
  {
    id: 51,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kanu.jpeg"),
    title: "Kanu Unchō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Chōchi, Human Enemies, Ryūbi",
    keywords: ["kanu unchō", "folklore/history", "kuniyoshi"]
  },
  {
    id: 52,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/kazusa.webp"),
    title: "Kazusa Hirotsune",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Fox (Kitsune), Nine-Tailed Fox (Kyūbi no Kitsune)",
    keywords: ["kazusa hirotsune", "folklore/history", "kuniyoshi"]
  },
  {
    id: 53,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kintaro.jpeg"),
    title: "Kintarō",
    artist: "Kitagawa Tsukimaro",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Bear (Kuma), Boar (Inoshishi), Carp (Koi), Cherry Blossoms (Sakura), Maple Leaves (Mimiji), Snake (Hebi)",
    keywords: ["kintarō", "folklore/history", "kitagawa tsukimaro"]
  },
  {
    id: 54,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/kiyohime.jpeg"),
    title: "Kiyohime",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Cherry Blossoms (Sakura), Dragon (Ryū), Snake (Hebi)",
    keywords: ["kiyohime", "folklore/history", "yoshitoshi"]
  },
  {
    id: 55,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tsunetomo.png"),
    title: "Minamoto no Tsunetomo",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers, Flowers, Wild Beasts",
    keywords: ["minamoto no tsunetomo", "folklore/history", "yoshitoshi"]
  },
  {
    id: 56,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/yorimitsu.jpg"),
    title: "Minamoto no Yorimitsu",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Flowers, Four Heavenly Kings (Shi Ten-Ō), Shuten Dōji, Tsuchigumo",
    keywords: ["minamoto no yorimitsu", "folklore/history", "kuniyoshi"]
  },
  {
    id: 57,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/yoshitsune.jpeg"),
    title: "Minamoto no Yoshitsune",
    artist: "Kunisada",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Wild Beasts",
    keywords: ["minamoto no yoshitsune", "folklore/history", "kunisada"]
  },
  {
    id: 58,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/musashi.jpeg"),
    title: "Miyamoto Musashi",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Enemy Soldiers, Flowers, Wild Beasts",
    keywords: ["miyamoto musashi", "folklore/history", "kuniyoshi"]
  },
  {
    id: 59,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/momotaro.jpg"),
    title: "Momotarō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Demon (Oni), Dog (Inu), Flowers, Monkey (Saru), Pheasant (Kiji), Peach (Momo)",
    keywords: ["momotarō", "folklore/history", "kuniyoshi"]
  },
  {
    id: 60,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/mongaku.png"),
    title: "Mongaku",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Fudō Myo-Ō, Kongara Dōji and Seitaka Dōji",
    keywords: ["mongaku", "folklore/history", "kuniyoshi"]
  },
  {
    id: 61,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/onibaba1.jpeg"),
    title: "Onibaba",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Victims",
    keywords: ["onibaba", "folklore/history", "yoshitoshi"]
  },
  {
    id: 62,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/oniwakamaru.jpeg"),
    title: "Oniwakamaru",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Carp (Koi), Flowers, Human Enemies",
    keywords: ["oniwakamaru", "folklore/history", "yoshitoshi"]
  },
  {
    id: 63,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/ryu.jpeg"),
    title: "Ryū-Ō Tarō",
    artist: "Utagawa Kuniteru",
    tattooBackgrounds: "Clouds",
    pairings: "Dragon (Ryū)",
    keywords: ["ryū-ō tarō", "folklore/history", "utagawa kuniteru"]
  },
  {
    id: 64,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/saginoike.jpeg"),
    title: "Saginoike Heikurō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Human Enemies, Severed Heads (Namakubi), Snake (Hebi), Wild Beasts",
    keywords: ["saginoike heikurō", "folklore/history", "kuniyoshi"]
  },
  {
    id: 65,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/sato.jpeg"),
    title: "Satō Masakiyo",
    artist: "Utagawa Kuniteru II",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparation (Yōkai), Enemy Soldiers, Flowers, Wild Beasts",
    keywords: ["satō masakiyo", "folklore/history", "utagawa kuniteru ii"]
  },
  {
    id: 66,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/shimose.jpeg"),
    title: "Shimose Kaga",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers, Giant Snake (Orochi)",
    keywords: ["shimose kaga", "folklore/history", "kuniyoshi"]
  },
  {
    id: 67,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/shoki.jpeg"),
    title: "Shoki",
    artist: "Kawanabe Kyosai",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Demons (Oni), Flowers, Tiger (Tora)",
    keywords: ["shoki", "folklore/history", "kawanabe kyosai"]
  },
  {
    id: 68,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/sonGoku.jpg"),
    title: "Son Goku",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Chohakkai, Demons (Oni), Dragon (Ryū), Flowers, Genjō Sanzō, Monkeys, Sa Gojo",
    keywords: ["son goku", "folklore/history", "yoshitoshi"]
  },
  {
    id: 69,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/taira.jpeg"),
    title: "Taira no Tomomori",
    artist: "Toyohara Kunichika",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Heikegani, Sea Creatures",
    keywords: ["taira no tomomori", "folklore/history", "toyohara kunichika"]
  },
  {
    id: 70,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tamatori.jpeg"),
    title: "Tamatori-hime",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Dragon (Ryū), Sea Creatures",
    keywords: ["tamatori-hime", "folklore/history", "kuniyoshi"]
  },
  {
    id: 71,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tenjiku.jpeg"),
    title: "Tenjik Tokubei",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Snake (Hebi), Spider (Toma), Toads (Gama)",
    keywords: ["tenjik tokubei", "folklore/history", "kuniyoshi"]
  },
  {
    id: 72,
    category: "Folklore/History",
    imageUri: require("../assets/folklore/toki.jpeg"),
    title: "Toki Daishirō Motosada",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Amida Buddha (Amida Hotoke), Apparition (Yōkai), Demon (Oni), Flowers, Ma-Ō, Ni-Ō",
    keywords: ["toki daishirō motosada", "folklore/history", "yoshitoshi"]
  },
  {
    id: 73,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/tomoe.jpeg"),
    title: "Tomoe Gozen",
    artist: "Toyohara Chikanobu",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Horse",
    keywords: ["tomoe gozen", "folklore/history", "toyohara chikanobu"]
  },
  {
    id: 74,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/washio.jpeg"),
    title: "Washio Saburō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Bear (Kuma), Boar (Inoshishi), Giant Snake (Orochi), Minamoto no Yoshitsune, Wild Beasts",
    keywords: ["washio saburō", "folklore/history", "kuniyoshi"]
  },
  {
    id: 75,
    category: "Folklore/History",
    imageUri:require("../assets/folklore/watanabe.jpeg"),
    title: "Watanabe no Tsuna",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Ibaraki-dōji, Snake (Hebi), Spider (Toma), Tsuchigumo",
    keywords: ["watanabe no tsuna", "folklore/history", "kuniyoshi"]
  },
  {
    id: 76,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/gyoja.jpeg"),
    title: "Gyōja Bushō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Tiger (Tora)",
    keywords: ["gyōja bushō", "suikoden", "kuniyoshi"]
  },
  {
    id: 77,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kanchi.jpeg"),
    title: "Kanchi Kotsuritsu Shuki",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["kanchi kotsuritsu shuki", "suikoden", "kuniyoshi"]
  },
  {
    id: 78,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kaosho.jpeg"),
    title: "Kaoshō Rochisin",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers, Nine-Deragons-Crested Shishin (Kumonryū Shishin/ Panther Head Rinchu/ Hyoshito Rinchu), Tiger-Slaying General Richū (Dakoshō Richū)",
    keywords: ["kaoshō rochisin", "suikoden", "kuniyoshi"]
  },
  {
    id: 79,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/konkoryu.png"),
    title: "Konkoryū Rishun",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["konkoryū rishun", "suikoden", "kuniyoshi"]
  },
  {
    id: 80,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/ko.jpg"),
    title: "Ko Sanjō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["ko sanjō", "suikoden", "kuniyoshi"]
  },
  {
    id: 81,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/kumonryu.jpeg"),
    title: "Kumonryū Shishin",
    artist: "Kinuyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Enemy Soldiers",
    keywords: ["kumonryū shishin", "suikoden", "kinuyoshi"]
  },
  {
    id: 82,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/rori.jpeg"),
    title: "Rori Hakuchō Chōjun",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["rori hakuchō chōjun", "suikoden", "kuniyoshi"]
  },
  {
    id: 83,
    category: "Suikoden",
    imageUri: require("../assets/suikoden/roshi.jpeg"),
    title: "Rōshi Ensei",
    artist: "Utagawa Yoshiharu",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["rōshi ensei", "suikoden", "utagawa yoshiharu"]
  },
  {
    id: 84,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/saienshi.jpg"),
    title: "Saienshi Chōsei",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, stone, Water",
    pairings: "Cherry Blossoms (Sakura), Maple Leaves (Momiji)",
    keywords: ["saienshi chōsei", "suikoden", "kuniyoshi"]
  },
  {
    id: 85,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/senkaji1.jpeg"),
    title: "Senkaji Chō-Ō",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Enemy Soldiers, Flowers",
    keywords: ["senkaji chō-ō", "suikoden", "kuniyoshi"]
  },
  {
    id: 86,
    category: "Suikoden",
    imageUri:require("../assets/suikoden/tanmei.webp"),
    title: "Tanmei Jirō Gen Shōgo",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Water",
    pairings: "Carp (Koi), Enemy Soldoiers",
    keywords: ["tanmei jirō gen shōgo", "suikoden", "kuniyoshi"]
  },
  {
    id: 87,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/baku1.jpeg"),
    title: "Baku",
    artist: "Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Lucky Charms",
    keywords: ["baku", "supernatural"]
  },
  {
    id: 88,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/dragon.png"),
    title: "Dragon",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Water",
    pairings: "Buddhist Deities, Carp (Koi), Dragon (Ryū), Four Symbols (Shi Shō), Phoenix (Hō-Ō), Tiger (Tora)",
    note: "Dragons can be paired with many elements beyond the brief listing above.",
    keywords: ["dragon", "supernatural", "kuniyoshi"]
  },
  {
    id: 89,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/dragonTiger.jpeg"),
    title: "Dragon and Tiger",
    artist: "Yoshitsuya",
    tattooBackgrounds: "Clouds, Lightening, Stone, Water",
    pairings: "Flowers, Standalone",
    keywords: ["dragon", "tiger", "supernatural", "yoshitsuya"]
  },
  {
    id: 90,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/hakutaku.jpeg"),
    title: "Hakutaku",
    artist: "Miyagi Gengyos",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Kirin",
    keywords: ["hakutaku", "supernatural", "miyagi gengyos"]
  },
  {
    id: 91,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/kappa.jpeg"),
    title: "Kappa",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Flowers, Heroes",
    keywords: ["kappa", "supernatural", "yoshitoshi"]
  },
  {
    id: 92,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/karajishi.jpeg"),
    title: "Karajishi",
    artist: "Kitagawa Tsukimaro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Buddhist Deities and Elements, Koma Inu, Peony (Botan)",
    keywords: ["karajishi", "supernatural", "kitagawa tsukimaro"]
  },
  {
    id: 93,
    category: "Supernatural",
    imageUri: require("../assets/supernatural/kirin.jpeg"),
    title: "Kirin",
    artist: "19th Century Unknown",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Phoenix (Hō-Ō)",
    keywords: ["kirin", "supernatural", "19th century"]
  },
  {
    id: 94,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/namakubi.jpeg"),
    title: "Namakubi",
    artist: "Horiyoshi III",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Apparition (Yōkai), Demon (Oni), Flowers, Saginoike Heikurō, Warriors",
    keywords: ["namakubi", "supernatural", "horiyoshi iii"]
  },
  {
    id: 95,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/nekomata.png"),
    title: "Nekomata",
    artist: "Kuniyoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Maple Leaves (Momiji), Severed Heads (Namakubi)",
    keywords: ["nekomata", "supernatural", "kuniyoshi"]
  },
  {
    id: 96,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/omukade.webp"),
    title: "Ōmukade",
    artist: "Sekiro",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Dragon (Ryū), Fujiwara no Hidesato",
    keywords: ["ōmukade", "supernatural", "sekiro"]
  },
  {
    id: 97,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/phoenix.jpeg"),
    title: "Phoenix",
    artist: "Katsushika Hokusai",
    tattooBackgrounds: "Clouds",
    pairings: "Buddhist Deities, Dragon (Ryū), Flowers, Kirin",
    keywords: ["phoenix", "supernatural", "katsushika hokusai"]
  },
  {
    id: 98,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/rokuro.jpeg"),
    title: "Rokuro Kubi",
    artist: "Utagawa Toyokuni",
    tattooBackgrounds: "Clouds",
    pairings: "Apparition (Yōkai), Cherry Blossoms (Sakura), Severed Heads (Namakubi)",
    keywords: ["rokuro kubi", "supernatural", "utagawa toyokuni"]
  },
  {
    id: 99,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/sojobo.jpg"),
    title: "Sōjōbō",
    artist: "Katsukawa Shuntei",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Flowers, Tengu, Ushiwakamaru",
    keywords: ["sōjōbō", "supernatural", "katsukawa shuntei"]
  },
  {
    id: 100,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/sumizome.jpeg"),
    title: "Sumizome",
    artist: "Kunichika",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Cherry Blossoms (Sakura)",
    keywords: ["sumizome", "supernatural", "kunichika"]
  },
  {
    id: 101,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/tengu.jpeg"),
    title: "Tengu",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone, Water",
    pairings: "Dragon (Ryū), Flowers, Kintarō, Minamoto no Yoshitsune, Sōjōbō, Scattered Faces (Men Chirashi)",
    keywords: ["tengu", "supernatural", "yoshitoshi"]
  },
  {
    id: 102,
    category: "Supernatural",
    imageUri:require("../assets/supernatural/tsuchigumo.jpeg"),
    title: "Tsuchigumo",
    artist: "Yoshitoshi",
    tattooBackgrounds: "Clouds, Stone",
    pairings: "Minamoto no Yorimitsu, Spiders (Kumo), Watanabe no Tsuna",
    keywords: ["tsuchigumo", "supernatural", "yoshitoshi"]
  },
  {
    id: 103,
    category: "Supernatural",
    imageUri:require("../assets/deities/luckyGods.jpeg"),
    title: "Yatagarasu",
    artist: "",
    tattooBackgrounds: "Clouds",
    pairings: "Amaterasu, Jimmu (Jinmu Ten-Ō), Warriors",
    keywords: ["yatagarasu", "supernatural"]
  }
];

export default imageData;