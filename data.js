const PLACES = [
  {
    "place": "Platform",
    "location": "Argyle Street",
    "price": "Free–£15",
    "type": "Food hall & live music",
    "time": "2–3 hrs",
    "desc": "Food hall with regular live performances, especially on weekends.",
    "combine": "Central Station + Buchanan Street",
    "bike": 19
  },
  {
    "place": "Mitchell Library",
    "location": "Charing Cross",
    "price": "Free",
    "type": "Library",
    "time": "30–45 min",
    "desc": "One of Europe’s largest public libraries",
    "combine": "Garnethill",
    "bike": 18
  },
  {
    "place": "Gallery of Modern Art (GoMA)",
    "location": "City Centre",
    "price": "Free",
    "type": "Art",
    "time": "45–60 min",
    "desc": "Contemporary art in a historic building",
    "combine": "George Square + Buchanan St",
    "bike": 21
  },
  {
    "place": "George Square",
    "location": "City Centre",
    "price": "Free",
    "type": "Square",
    "time": "20–30 min",
    "desc": "Main city square",
    "combine": "GoMA",
    "bike": 22
  },
  {
    "place": "Buchanan Street",
    "location": "City Centre",
    "price": "Free",
    "type": "Shopping street",
    "time": "30–45 min",
    "desc": "Famous pedestrian street",
    "combine": "George Square",
    "bike": 21
  },
  {
    "place": "Merchant City",
    "location": "City Centre",
    "price": "Free",
    "type": "Neighbourhood",
    "time": "1–2 hrs",
    "desc": "Historic merchant area",
    "combine": "Barras + GoMA",
    "bike": 22
  },
  {
    "place": "Glasgow Mural Trail",
    "location": "City Centre",
    "price": "Free",
    "type": "Street art",
    "time": "1.5–2 hrs",
    "desc": "Giant urban murals route",
    "combine": "GoMA + Merchant City",
    "bike": 24
  },
  {
    "place": "The Lighthouse",
    "location": "City Centre",
    "price": "Free",
    "type": "Architecture",
    "time": "45–60 min",
    "desc": "Mackintosh building with views",
    "combine": "Buchanan Street",
    "bike": 20
  },
  {
    "place": "Mackintosh at the Willow",
    "location": "City Centre",
    "price": "Free exterior",
    "type": "Architecture",
    "time": "20 min",
    "desc": "Mackintosh design landmark",
    "combine": "Lighthouse",
    "bike": 20
  },
  {
    "place": "Glasgow Central Station Tour",
    "location": "City Centre",
    "price": "£15",
    "type": "History",
    "time": "1–1.5 hrs",
    "desc": "Historic station and tunnels tour",
    "combine": "George Square",
    "bike": 20
  },
  {
    "place": "Garnethill",
    "location": "City Centre",
    "price": "Free",
    "type": "Historic area",
    "time": "1 hr",
    "desc": "Georgian architecture",
    "combine": "Mitchell Library",
    "bike": 20
  },
  {
    "place": "King Tut's Wah Wah Hut",
    "location": "City Centre",
    "price": "£8–25",
    "type": "Live music venue",
    "time": "2–3 hrs",
    "desc": "Famous for launching bands like Oasis; intimate atmosphere.",
    "combine": "Buchanan Street + GoMA",
    "bike": 19
  },
  {
    "place": "Nice N Sleazy",
    "location": "City Centre",
    "price": "Free–£10",
    "type": "Indie/Rock",
    "time": "2–3 hrs",
    "desc": "Alternative bar with live music almost every night.",
    "combine": "CCA + Sauchiehall Street",
    "bike": 19
  },
  {
    "place": "The Scotia Bar",
    "location": "City Centre",
    "price": "Free",
    "type": "Traditional Scottish folk",
    "time": "1–3 hrs",
    "desc": "One of Glasgow’s oldest pubs, known for authentic live folk music sessions.",
    "combine": "River Clyde + Merchant City",
    "bike": 21
  },
  {
    "place": "Sloans",
    "location": "City Centre",
    "price": "Free–£15",
    "type": "Ceilidh & live music",
    "time": "2–4 hrs",
    "desc": "Glasgow’s oldest pub, famous for traditional Scottish ceilidh nights.",
    "combine": "George Square + Merchant City",
    "bike": 20
  },
  {
    "place": "Glasgow Royal Concert Hall",
    "location": "City Centre",
    "price": "£10–60",
    "type": "Classical music",
    "time": "2–3 hrs",
    "desc": "Home of the Royal Scottish National Orchestra and major international performances.",
    "combine": "Buchanan Street + George Square",
    "bike": 22
  },
  {
    "place": "Waverley Paddle Steamer",
    "location": "Clyde",
    "price": "From £10",
    "type": "Boat",
    "time": "2–4 hrs",
    "desc": "Historic paddle steamer",
    "combine": "Harbour",
    "bike": 10
  },
  {
    "place": "SEC Armadillo",
    "location": "Clyde Waterfront",
    "price": "Varies",
    "type": "Concert venue",
    "time": "2–4 hrs",
    "desc": "Hosts concerts, comedy shows and touring productions.",
    "combine": "OVO Hydro + Riverside Museum",
    "bike": 12
  },
  {
    "place": "Glasgow Cathedral",
    "location": "East End",
    "price": "Free",
    "type": "Cathedral",
    "time": "30–45 min",
    "desc": "Medieval cathedral from the 12th century",
    "combine": "Necropolis + St Mungo",
    "bike": 27
  },
  {
    "place": "Glasgow Necropolis",
    "location": "East End",
    "price": "Free",
    "type": "Historic cemetery",
    "time": "1–1.5 hrs",
    "desc": "Victorian cemetery with city views",
    "combine": "Cathedral",
    "bike": 28
  },
  {
    "place": "St Mungo Museum",
    "location": "East End",
    "price": "Free",
    "type": "Museum",
    "time": "45–60 min",
    "desc": "Religions and cultures museum",
    "combine": "Cathedral",
    "bike": 27
  },
  {
    "place": "Provand’s Lordship",
    "location": "East End",
    "price": "Free",
    "type": "Historic house",
    "time": "30–45 min",
    "desc": "Oldest surviving medieval house in Glasgow",
    "combine": "Cathedral",
    "bike": 27
  },
  {
    "place": "Glasgow Green",
    "location": "East End",
    "price": "Free",
    "type": "Park",
    "time": "45–60 min",
    "desc": "Oldest public park in Glasgow",
    "combine": "People’s Palace",
    "bike": 25
  },
  {
    "place": "Dennistoun",
    "location": "East End",
    "price": "Free",
    "type": "Neighbourhood",
    "time": "1 hr",
    "desc": "Cafés and traditional architecture",
    "combine": "Cathedral",
    "bike": 35
  },
  {
    "place": "The Barras Market",
    "location": "East End",
    "price": "Free",
    "type": "Market",
    "time": "1–2 hrs",
    "desc": "Historic market and local vibe",
    "combine": "Glasgow Green",
    "bike": 25
  },
  {
    "place": "Barrowland Ballroom",
    "location": "East End",
    "price": "From £20",
    "type": "Live music venue",
    "time": "2–4 hrs",
    "desc": "Legendary concert venue; many artists consider it one of the best in the world.",
    "combine": "Barras Market + Glasgow Green",
    "bike": 25
  },
  {
    "place": "Glasgow Cathedral Organ Recitals",
    "location": "East End",
    "price": "Free or donation",
    "type": "Classical",
    "time": "30–60 min",
    "desc": "Occasional organ recitals in the stunning medieval cathedral.",
    "combine": "Cathedral + Necropolis",
    "bike": 27
  },
  {
    "place": "Saint Luke’s",
    "location": "East End",
    "price": "£15–30",
    "type": "Live music venue",
    "time": "2–3 hrs",
    "desc": "Former church converted into a unique concert venue.",
    "combine": "Barras Market + Glasgow Green",
    "bike": 26
  },
  {
    "place": "Seven Lochs Wetland Park",
    "location": "East Glasgow",
    "price": "Free",
    "type": "Nature",
    "time": "2–3 hrs",
    "desc": "Lakes, wetlands and trails",
    "combine": "Hogganfield Loch",
    "bike": 48
  },
  {
    "place": "Hogganfield Loch",
    "location": "East Glasgow",
    "price": "Free",
    "type": "Nature",
    "time": "1 hr",
    "desc": "Bird watching lake",
    "combine": "Seven Lochs",
    "bike": 51
  },
  {
    "place": "Hidden Lane",
    "location": "Finnieston",
    "price": "Free",
    "type": "Artistic street",
    "time": "20–30 min",
    "desc": "Independent shops and studios",
    "combine": "Finnieston",
    "bike": 15
  },
  {
    "place": "Finnieston Crane",
    "location": "Finnieston",
    "price": "Free",
    "type": "Photography",
    "time": "20–30 min",
    "desc": "Industrial Glasgow landmark",
    "combine": "Riverside",
    "bike": 12
  },
  {
    "place": "The Ben Nevis",
    "location": "Finnieston",
    "price": "Free",
    "type": "Traditional Scottish folk",
    "time": "2–3 hrs",
    "desc": "Excellent pub for authentic Scottish folk music in a cozy setting.",
    "combine": "Kelvingrove + Finnieston",
    "bike": 15
  },
  {
    "place": "The Tenement House",
    "location": "Garnethill",
    "price": "£10",
    "type": "Historic house",
    "time": "1 hr",
    "desc": "Victorian home preserved in time",
    "combine": "Garnethill",
    "bike": 20
  },
  {
    "place": "People’s Palace & Winter Gardens",
    "location": "Glasgow Green",
    "price": "Free",
    "type": "Museum",
    "time": "1–1.5 hrs",
    "desc": "Social history + Victorian greenhouse",
    "combine": "Glasgow Green",
    "bike": 25
  },
  {
    "place": "Riverside Museum",
    "location": "Glasgow Harbour",
    "price": "Free",
    "type": "Museum",
    "time": "1.5–2 hrs",
    "desc": "Transport museum with cars, ships and recreated streets",
    "combine": "Tall Ship + Science Centre",
    "bike": 12
  },
  {
    "place": "Tall Ship Glenlee",
    "location": "Glasgow Harbour",
    "price": "Free/donation",
    "type": "Historic ship",
    "time": "45–60 min",
    "desc": "Historic sailing ship on the Clyde",
    "combine": "Riverside Museum",
    "bike": 12
  },
  {
    "place": "Squinty Bridge",
    "location": "Glasgow Harbour",
    "price": "Free",
    "type": "Photography",
    "time": "15–30 min",
    "desc": "Clyde views",
    "combine": "Riverside",
    "bike": 12
  },
  {
    "place": "Clydeside Distillery",
    "location": "Glasgow Harbour",
    "price": "£17",
    "type": "Whisky",
    "time": "1–1.5 hrs",
    "desc": "Scottish whisky experience",
    "combine": "Riverside",
    "bike": 12
  },
  {
    "place": "Govan Stones",
    "location": "Govan",
    "price": "Free",
    "type": "Medieval history",
    "time": "30–45 min",
    "desc": "Medieval carved stones",
    "combine": "Riverside",
    "bike": 12
  },
  {
    "place": "Britannia Panopticon",
    "location": "Merchant City",
    "price": "Donation",
    "type": "History",
    "time": "30–45 min",
    "desc": "Oldest surviving music hall",
    "combine": "Merchant City",
    "bike": 22
  },
  {
    "place": "Sharmanka Kinetic Theatre",
    "location": "Merchant City",
    "price": "£10",
    "type": "Art",
    "time": "45–60 min",
    "desc": "Moving mechanical sculptures",
    "combine": "Merchant City",
    "bike": 22
  },
  {
    "place": "City Halls",
    "location": "Merchant City",
    "price": "£10–40",
    "type": "Classical / Jazz",
    "time": "2 hrs",
    "desc": "Historic concert hall with outstanding acoustics.",
    "combine": "Merchant City",
    "bike": 23
  },
  {
    "place": "Dawsholm Park",
    "location": "North Glasgow",
    "price": "Free",
    "type": "Nature",
    "time": "1–2 hrs",
    "desc": "Park beside River Kelvin",
    "combine": "Botanic Gardens",
    "bike": 31
  },
  {
    "place": "Glasgow Science Centre",
    "location": "Pacific Quay",
    "price": "£12–15",
    "type": "Science",
    "time": "2–3 hrs",
    "desc": "Interactive science museum",
    "combine": "Riverside",
    "bike": 10
  },
  {
    "place": "Glasgow Tower",
    "location": "Pacific Quay",
    "price": "£6–8",
    "type": "Viewpoint",
    "time": "30–45 min",
    "desc": "City views from tower",
    "combine": "Science Centre",
    "bike": 10
  },
  {
    "place": "Burrell Collection",
    "location": "Pollok Park",
    "price": "Free",
    "type": "Museum",
    "time": "2–3 hrs",
    "desc": "European, Asian and medieval art collection",
    "combine": "Pollok Country Park",
    "bike": 8
  },
  {
    "place": "Pollok House",
    "location": "Pollok Park",
    "price": "Free gardens / paid house",
    "type": "Historic house",
    "time": "1 hr",
    "desc": "Historic mansion in the park",
    "combine": "Burrell",
    "bike": 10
  },
  {
    "place": "Tramway",
    "location": "Pollokshields",
    "price": "Free",
    "type": "Art",
    "time": "1–2 hrs",
    "desc": "Alternative cultural centre",
    "combine": "Queen’s Park",
    "bike": 15
  },
  {
    "place": "Tramway Hidden Garden",
    "location": "Pollokshields",
    "price": "Free",
    "type": "Garden",
    "time": "20–40 min",
    "desc": "Hidden urban garden",
    "combine": "Tramway",
    "bike": 15
  },
  {
    "place": "Centre for Contemporary Arts",
    "location": "Sauchiehall St",
    "price": "Free",
    "type": "Culture",
    "time": "1 hr",
    "desc": "Contemporary art and events",
    "combine": "Garnethill",
    "bike": 20
  },
  {
    "place": "Pollok Country Park",
    "location": "South Glasgow",
    "price": "Free",
    "type": "Nature",
    "time": "2–4 hrs",
    "desc": "Forests, trails and Highland cows",
    "combine": "Burrell Collection",
    "bike": 8
  },
  {
    "place": "Bellahouston Park",
    "location": "South Glasgow",
    "price": "Free",
    "type": "Park",
    "time": "1–2 hrs",
    "desc": "Large park with views",
    "combine": "House for Art Lover",
    "bike": 2
  },
  {
    "place": "Linn Park",
    "location": "South Glasgow",
    "price": "Free",
    "type": "Nature",
    "time": "1.5–3 hrs",
    "desc": "Waterfalls and trails",
    "combine": "Queen’s Park",
    "bike": 29
  },
  {
    "place": "Cathkin Braes",
    "location": "South Glasgow",
    "price": "Free",
    "type": "Viewpoint",
    "time": "1–2 hrs",
    "desc": "Best panoramic views of Glasgow",
    "combine": "Queen’s Park",
    "bike": 41
  },
  {
    "place": "Queen’s Park",
    "location": "South Side",
    "price": "Free",
    "type": "Park",
    "time": "1–1.5 hrs",
    "desc": "Great city views",
    "combine": "Shawlands",
    "bike": 15
  },
  {
    "place": "Scotland Street School Museum",
    "location": "South Side",
    "price": "Free",
    "type": "Museum",
    "time": "45–60 min",
    "desc": "Victorian school designed by Mackintosh",
    "combine": "Pollok",
    "bike": 13
  },
  {
    "place": "Shawlands",
    "location": "South Side",
    "price": "Free",
    "type": "Neighbourhood",
    "time": "1–2 hrs",
    "desc": "Cafés and local atmosphere",
    "combine": "Queen’s Park",
    "bike": 14
  },
  {
    "place": "Strathbungo",
    "location": "South Side",
    "price": "Free",
    "type": "Historic area",
    "time": "30–60 min",
    "desc": "Beautiful Victorian streets",
    "combine": "Shawlands",
    "bike": 14
  },
  {
    "place": "Glad Cafe",
    "location": "South Side",
    "price": "Free–£15",
    "type": "Independent music",
    "time": "2–3 hrs",
    "desc": "Small venue showcasing local and emerging artists.",
    "combine": "Queen’s Park",
    "bike": 13
  },
  {
    "place": "Hunterian Museum",
    "location": "University",
    "price": "Free",
    "type": "Museum",
    "time": "1–1.5 hrs",
    "desc": "Science, medicine, fossils and curiosities",
    "combine": "University + Art Gallery",
    "bike": 18
  },
  {
    "place": "Hunterian Art Gallery",
    "location": "University",
    "price": "Free",
    "type": "Art",
    "time": "45–60 min",
    "desc": "Rembrandt, Whistler and European art",
    "combine": "University + Cloisters",
    "bike": 18
  },
  {
    "place": "Fossil Grove",
    "location": "Victoria Park",
    "price": "Free",
    "type": "Geology",
    "time": "30–45 min",
    "desc": "Ancient fossil trees",
    "combine": "Victoria Park",
    "bike": 21
  },
  {
    "place": "Kelvingrove Art Gallery and Museum",
    "location": "West End",
    "price": "Free",
    "type": "Museum",
    "time": "2–3 hrs",
    "desc": "Glasgow’s main museum: art, natural history and beautiful architecture",
    "combine": "Kelvingrove Park + University",
    "bike": 16
  },
  {
    "place": "University of Glasgow",
    "location": "West End",
    "price": "Free",
    "type": "Architecture",
    "time": "1–1.5 hrs",
    "desc": "Gothic campus, Hogwarts feeling",
    "combine": "Cloisters + Hunterian",
    "bike": 17
  },
  {
    "place": "The Cloisters",
    "location": "West End",
    "price": "Free",
    "type": "Architecture",
    "time": "20–30 min",
    "desc": "Iconic gothic passage",
    "combine": "University",
    "bike": 17
  },
  {
    "place": "Glasgow Botanic Gardens",
    "location": "West End",
    "price": "Free",
    "type": "Garden",
    "time": "1–1.5 hrs",
    "desc": "Victorian gardens and glasshouses",
    "combine": "Kibble Palace",
    "bike": 22
  },
  {
    "place": "Kibble Palace",
    "location": "West End",
    "price": "Free",
    "type": "Glasshouse",
    "time": "30–45 min",
    "desc": "Victorian crystal greenhouse",
    "combine": "Botanic Gardens",
    "bike": 21
  },
  {
    "place": "Kelvingrove Park",
    "location": "West End",
    "price": "Free",
    "type": "Park",
    "time": "45–60 min",
    "desc": "Classic park by River Kelvin",
    "combine": "Kelvingrove Museum",
    "bike": 17
  },
  {
    "place": "Ashton Lane",
    "location": "West End",
    "price": "Free",
    "type": "Street",
    "time": "20–40 min",
    "desc": "Cobblestone street with cafés and bars",
    "combine": "University",
    "bike": 18
  },
  {
    "place": "Victoria Park",
    "location": "West End",
    "price": "Free",
    "type": "Park",
    "time": "1 hr",
    "desc": "Quiet park with lake",
    "combine": "Fossil Grove",
    "bike": 20
  },
  {
    "place": "Òran Mór",
    "location": "West End",
    "price": "Free–£15",
    "type": "Live music & events",
    "time": "2–3 hrs",
    "desc": "Former church turned cultural venue with concerts, ceilidhs and performances.",
    "combine": "Botanic Gardens + Ashton Lane",
    "bike": 21
  },
  {
    "place": "The Machair Bar",
    "location": "West End",
    "price": "Free",
    "type": "Traditional folk",
    "time": "2–3 hrs",
    "desc": "Relaxed pub featuring regular traditional Scottish music sessions.",
    "combine": "University + Ashton Lane",
    "bike": 21
  },
  {
    "place": "University of Glasgow Concerts",
    "location": "West End",
    "price": "Free–£15",
    "type": "Classical",
    "time": "1–2 hrs",
    "desc": "Student and guest performances throughout the academic year.",
    "combine": "Cloisters + Hunterian Museum",
    "bike": 17
  }
];
