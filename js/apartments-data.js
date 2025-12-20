// Real IU apartment data from spreadsheet
const apartmentsData = [
    {
        id: 1,
        name: "The Standard at Bloomington",
        location: "250 E 14th St, Bloomington, IN",
        price: 1250,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://thestandardbloomington.com",
        imageUrl: "https://www.thestandardbloomington.com/wp-content/uploads/2024/01/standard-bloomington-index-hero.jpg",
        hasDetailPage: true,
        floorPlans: [
            {
                id: 1,
                name: "Dawson",
                beds: 4,
                baths: 4,
                price: 1245,
                sqft: 1430,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Dawson.jpg"
            },
            {
                id: 2,
                name: "Savin",
                beds: "Studio",
                baths: "Studio",
                price: 1785,
                sqft: 441,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Savin-1.jpg"
            },
            {
                id: 3,
                name: "Arden",
                beds: 1,
                baths: 1,
                price: 2050,
                sqft: 564,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Arden-1.jpg"
            },
            {
                id: 4,
                name: "Ardmore",
                beds: 1,
                baths: 1,
                price: 1187,
                sqft: "415-438",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Ardmore-1.jpg"
            },
            {
                id: 5,
                name: "Berkeley",
                beds: 2,
                baths: 2,
                price: 742,
                sqft: 727,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Berkeley-2.jpg"
            },
            {
                id: 6,
                name: "Bexley",
                beds: 2,
                baths: 2,
                price: 1530,
                sqft: 826,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bexley-2.jpg"
            },
            {
                id: 7,
                name: "Camden",
                beds: 3,
                baths: 3,
                price: 1600,
                sqft: 1119,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Camden-1.jpg"
            },
            {
                id: 8,
                name: "Chelsea",
                beds: 3,
                baths: 3,
                price: 1615,
                sqft: 1127,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Chelsea-2.jpg"
            },
            {
                id: 9,
                name: "Easton",
                beds: 5,
                baths: 5,
                price: 1099,
                sqft: 1665,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Easton.jpg"
            },
            {
                id: 10,
                name: "Edgewood",
                beds: 5,
                baths: 5,
                price: 1159,
                sqft: 1691,
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Edgewood.jpg"
            }
        ],
        reviews: [
            {
                id: 1,
                author: "Sarah M.",
                rating: 5,
                date: "2024-11-15",
                text: "Absolutely love living at The Standard! The amenities are top-notch - the gym is always clean and well-equipped, and the study lounges are perfect for group projects. Maintenance responds within 24 hours to any issues. The location is perfect for getting to campus quickly."
            },
            {
                id: 2,
                author: "Jake T.",
                rating: 4,
                date: "2024-10-22",
                text: "Great place overall. The apartments are modern and spacious. My roommates and I have the 4-bedroom unit and we never feel cramped. The only downside is parking can be tough during peak hours, but that's pretty standard for student housing near campus."
            },
            {
                id: 3,
                author: "Emma L.",
                rating: 5,
                date: "2024-09-30",
                text: "The Standard exceeded my expectations! The staff is incredibly friendly and helpful. I had an issue with my AC in August and they had someone fix it the same day. The pool area is amazing during the warmer months, and there are always fun resident events."
            },
            {
                id: 4,
                author: "Michael R.",
                rating: 4,
                date: "2024-08-18",
                text: "Solid choice for student housing. The individual leases are clutch - no worrying about roommates bailing on rent. Internet is fast and reliable which is essential for my comp sci classes. The furniture package saved me so much hassle moving in."
            },
            {
                id: 5,
                author: "Olivia K.",
                rating: 5,
                date: "2024-07-05",
                text: "Best decision I made for sophomore year! The private bathrooms in the 4-bed units are a game changer. No more sharing one bathroom with three other people. The kitchen is fully equipped and the in-unit washer/dryer is so convenient."
            },
            {
                id: 6,
                author: "David P.",
                rating: 3,
                date: "2024-06-12",
                text: "It's a decent place to live. The apartment itself is nice and modern, but it can get pretty noisy on weekends. If you're a light sleeper, bring earplugs. The price is on the higher end, but you do get what you pay for in terms of amenities and location."
            },
            {
                id: 7,
                author: "Ashley W.",
                rating: 5,
                date: "2024-05-28",
                text: "Couldn't be happier here! The community events are actually fun and a great way to meet people. The shuttle to campus is super reliable, and the package lockers make getting deliveries so easy. The study rooms on each floor are quiet and perfect for finals week."
            },
            {
                id: 8,
                author: "Ryan B.",
                rating: 4,
                date: "2024-04-14",
                text: "Really enjoying my time here. The floor plans are well-designed with plenty of storage space. The common areas are always clean, and security makes me feel safe walking around at night. Would definitely recommend to other IU students."
            }
        ]
    },
    {
        id: 2,
        name: "Hub Bloomington",
        location: "2038 N Walnut St, Bloomington, IN",
        price: 1100,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://huboncampus.com/bloomington",
        imageUrl: "https://rcp-prod-uploads.s3.amazonaws.com/property_images/slider_images/2024-07/ba89adee13dc49188b011c0c43e229ca91aa6983xz.jpg"
    },
    {
        id: 3,
        name: "Campus Edge on Pierce",
        location: "915 E 3rd St, Bloomington, IN",
        price: 1200,
        beds: 3,
        baths: 2,
        floorPlanUrl: "https://www.americancampus.com/student-apartments/in/bloomington/campus-edge-on-pierce",
        imageUrl: "https://assets.amberstudent.com/inventories/1458182/07e3a7ab.jpg?w=600&fit=crop&q=80&auto=format&trim=auto"
    },
    {
        id: 4,
        name: "The Rive Bloomington",
        location: "1820 N Walnut St, Bloomington, IN",
        price: 950,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://www.rivebloomington.com",
        imageUrl: "https://www.therivebloomington.com/wp-content/uploads/2024/09/rive-bloomington-index-hero_hero_image_5.jpg"
    },
    {
        id: 5,
        name: "The Quarters Bloomington",
        location: "1521 Isaac Dr, Bloomington, IN",
        price: 850,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://www.livequarters.com",
        imageUrl: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_1500/v1698276043/g5/g5-c-6068srjgt-tailwind-group/g5-cl-1o1qg2mtxx-tailwind-group-bloomington-in/uploads/oyqg4a5yfoxpwucahkks_acqwsv.jpg"
    },
    {
        id: 6,
        name: "Fountain Park Apartments",
        location: "3209 E 10th St, Bloomington, IN",
        price: 900,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://www.fountainpark-apts.com",
        imageUrl: "https://lirp.cdn-website.com/6a7f1db6/dms3rep/multi/opt/FP+Outside-640w.jpeg"
    },
    {
        id: 7,
        name: "Tenth and College",
        location: "601 N College Ave, Bloomington, IN",
        price: 1350,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://www.tenthandcollege.com",
        imageUrl: "https://www.tenthandcollege.com/wp-content/uploads/2018/03/tenth-college-exterior.jpg"
    },
    {
        id: 8,
        name: "Stageyard",
        location: "321 S Walnut St, Bloomington, IN",
        price: 1400,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://www.stageyard.com",
        imageUrl: "https://images1.apartments.com/i2/RUUOqUiN4P2EjIqK5-PZ91a1OOA2cvd9hD4ljCJ0oPE/117/3-square-bloomington-in-building-photo.jpg?p=1"
    },
    {
        id: 9,
        name: "City Flats on Walnut",
        location: "700 N Walnut St, Bloomington, IN",
        price: 1300,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://www.cityflatsonwalnut.com",
        imageUrl: "https://www.homeiscityflatswalnut.com/data/images/Banners%20(2).png"
    },
    {
        id: 10,
        name: "Scholar's Quad",
        location: "2716 E 10th St, Bloomington, IN",
        price: 800,
        beds: 4,
        baths: 2,
        floorPlanUrl: "https://www.scholarsquad.com",
        imageUrl: "https://www.scholarsquad.com/static/media/Hero-mobile.d18f2497afb32d782621.jpg"
    },
    {
        id: 11,
        name: "Woodbridge Apartments",
        location: "3401 John Hinkle Pl, Bloomington, IN",
        price: 750,
        beds: 2,
        baths: 1,
        floorPlanUrl: "https://www.woodbridgebloomington.com",
        imageUrl: "https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_lfill,w_420,ar_1.05,g_auto/s3/2/4107/main%20image-new.jpg"
    },
    {
        id: 12,
        name: "College Mall Apartments",
        location: "2623 E 2nd St, Bloomington, IN",
        price: 700,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://www.collegemallapartments.com",
        imageUrl: "https://images1.apartments.com/i2/gicWXu4KuyY_KG3qqEYzGc79EdPL9ui66CscGUE_usM/111/college-mall-apartments-bloomington-in-building-photo.jpg"
    }
];
