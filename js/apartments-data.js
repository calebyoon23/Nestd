// Real IU apartment data from spreadsheet
const apartmentsData = [
    {
        id: 1,
        name: "The Standard at Bloomington",
        location: "250 E 14th Street, Bloomington, IN 47408",
        price: 1250,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://thestandardbloomington.com",
        imageUrl: "https://www.thestandardbloomington.com/wp-content/uploads/2024/01/standard-bloomington-index-hero.jpg",
        hasDetailPage: true,
        floorPlans: [
            // Studios
            {
                id: 1,
                name: "Savin",
                beds: "Studio",
                baths: 1,
                price: 1785,
                sqft: 441,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Savin-1.jpg"
            },
            {
                id: 2,
                name: "Sherwood",
                beds: "Studio",
                baths: 1,
                price: 1825,
                sqft: 419,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Sherwood.jpg"
            },
            {
                id: 3,
                name: "Soho 1",
                beds: "Studio",
                baths: 1,
                price: 1699,
                sqft: 371,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Soho-1.jpg"
            },
            {
                id: 4,
                name: "Soho 2",
                beds: "Studio",
                baths: 1,
                price: 1840,
                sqft: 1,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Soho-2.jpg"
            },
            {
                id: 5,
                name: "Soho 3",
                beds: "Studio",
                baths: 1,
                price: 1755,
                sqft: 1,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Soho-3.jpg"
            },
            {
                id: 6,
                name: "Springlake",
                beds: "Studio",
                baths: 1,
                price: 1765,
                sqft: 374,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Springlake.jpg"
            },
            {
                id: 7,
                name: "Stanford",
                beds: "Studio",
                baths: 1,
                price: 1720,
                sqft: 415,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Stanford.jpg"
            },
            {
                id: 8,
                name: "Sullivan",
                beds: "Studio",
                baths: 1,
                price: 1815,
                sqft: 438,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Sullivan.jpg"
            },
            {
                id: 9,
                name: "Sutton 1",
                beds: "Studio",
                baths: 1,
                price: 1285,
                sqft: 325,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Sutton-1.jpg"
            },
            {
                id: 10,
                name: "Sutton 2",
                beds: "Studio",
                baths: 1,
                price: 1285,
                sqft: 301,
                floorPlanUrl: "https://thestandardbloomington.com",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Sutton-2.jpg"
            },
            // 1 Bedrooms
            {
                id: 11,
                name: "Arden",
                beds: 1,
                baths: 1,
                price: 2050,
                sqft: 564,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/arden-878916/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Arden-1.jpg"
            },
            {
                id: 12,
                name: "Ardmore 1",
                beds: 1,
                baths: 1,
                price: 1590,
                sqft: 415,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/ardmore-1-878904/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Ardmore-1.jpg"
            },
            {
                id: 13,
                name: "Ardmore 2",
                beds: 1,
                baths: 1,
                price: 1590,
                sqft: 423,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/ardmore-2-878901/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Ardmore-2.jpg"
            },
            {
                id: 14,
                name: "Ardmore 3",
                beds: 1,
                baths: 1,
                price: 1679,
                sqft: 438,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/ardmore-3-878914/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Ardmore-3.jpg"
            },
            {
                id: 15,
                name: "Astoria",
                beds: 1,
                baths: 1,
                price: 1999,
                sqft: 545,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/astoria-878899/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Astoria.jpg"
            },
            // 2 Bedrooms
            {
                id: 16,
                name: "Berkeley",
                beds: 2,
                baths: 2,
                price: 1355,
                sqft: 727,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/berkeley-878902/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Berkeley.jpg"
            },
            {
                id: 17,
                name: "Bexley 1",
                beds: 2,
                baths: 2,
                price: 1530,
                sqft: 826,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/bexley-1-878888/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bexley-1.jpg"
            },
            {
                id: 18,
                name: "Bexley 2",
                beds: 2,
                baths: 2,
                price: 1515,
                sqft: 859,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/bexley-2-878890/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bexley-2.jpg"
            },
            {
                id: 19,
                name: "Bradford 1",
                beds: 2,
                baths: 2,
                price: 1620,
                sqft: 770,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/bradford-1-878893/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bradford-1.jpg"
            },
            {
                id: 20,
                name: "Bradford 2",
                beds: 2,
                baths: 2,
                price: 1615,
                sqft: 777,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/bradford-2-878898/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bradford-2.jpg"
            },
            {
                id: 21,
                name: "Bradford 3",
                beds: 2,
                baths: 2,
                price: 1620,
                sqft: 783,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/bradford-3-878903/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Bradford-3.jpg"
            },
            {
                id: 22,
                name: "Brookhaven",
                beds: 2,
                baths: 2,
                price: 1620,
                sqft: 834,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/brookhaven-878906/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Brookhaven.jpg"
            },
            {
                id: 23,
                name: "Buckhead",
                beds: 2,
                baths: 2,
                price: 1690,
                sqft: 932,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/buckhead-878905/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Buckhead.jpg"
            },
            // 3 Bedrooms
            {
                id: 24,
                name: "Camden",
                beds: 3,
                baths: 3,
                price: 1600,
                sqft: 1119,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/camden-878897/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Camden-1.jpg"
            },
            {
                id: 25,
                name: "Chelsea",
                beds: 3,
                baths: 3,
                price: 1615,
                sqft: 1127,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/chelsea-878900/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Chelsea-2.jpg"
            },
            // 4 Bedrooms
            {
                id: 26,
                name: "Dawson 1",
                beds: 4,
                baths: 4,
                price: 1245,
                sqft: 1430,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/dawson-1-878894/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Dawson-1.jpg"
            },
            {
                id: 27,
                name: "Derby 1",
                beds: 4,
                baths: 4,
                price: 1199,
                sqft: 1394,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/derby-1-878895/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Derby-1.jpg"
            },
            {
                id: 28,
                name: "Downing",
                beds: 4,
                baths: 4,
                price: 1275,
                sqft: 1440,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/downing-878915/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Downing.jpg"
            },
            // 5 Bedrooms
            {
                id: 29,
                name: "Easton 1",
                beds: 5,
                baths: 5,
                price: 1099,
                sqft: 1665,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/easton-1-878884/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Easton-1.jpg"
            },
            {
                id: 30,
                name: "Easton 2",
                beds: 5,
                baths: 5,
                price: 1025,
                sqft: 1578,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/easton-2-878886/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
                imageUrl: "https://landmarkportfolio.jumpem.host/wp-content/uploads/2024/01/Easton-2.jpg"
            },
            {
                id: 31,
                name: "Edgewood",
                beds: 5,
                baths: 5,
                price: 1159,
                sqft: 1691,
                floorPlanUrl: "https://thestandardbloomington.prospectportal.com/bloomington/the-standard-at-bloomington/floorplans/edgewood-878912/fp_name/occupancy_type/student/lease_term%5Bid%5D/3317/space_configuration_id/18//lease_start_window%5Bid%5D/11197/",
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
        location: "2038 N Walnut St, Bloomington, IN 47404",
        price: 1100,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://huboncampus.com/bloomington",
        imageUrl: "https://rcp-prod-uploads.s3.amazonaws.com/property_images/slider_images/2024-07/ba89adee13dc49188b011c0c43e229ca91aa6983xz.jpg",
        hasDetailPage: true,
        floorPlans: [
            // Studio
            {
                id: 1,
                name: "Murphy",
                beds: "Studio",
                baths: 1,
                price: 1699,
                sqft: 286,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/murphy-824190/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/012011/68d4446b42a4e2.87680200936.png"
            },
            // 2 Bedrooms
            {
                id: 2,
                name: "2x1 Lite",
                beds: 2,
                baths: 1,
                price: 1395,
                sqft: 457,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/2x1-lite-823501/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/012342/68d4453e29dcd2.53428944796.png"
            },
            {
                id: 3,
                name: "2x1",
                beds: 2,
                baths: 1,
                price: 1495,
                sqft: 615,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/2x1-824187/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/012438/68d4457618c828.72367470445.png"
            },
            {
                id: 4,
                name: "2x1 Terrace",
                beds: 2,
                baths: 1,
                price: 1550,
                sqft: 618,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/2x1-terrace-824184/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/11/113614/6709620e511e98.69671143449.jpg"
            },
            {
                id: 5,
                name: "2x2",
                beds: 2,
                baths: 2,
                price: 1595,
                sqft: 603,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/2x2-823505/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/012710/68d4460de9f6a6.01090023120.png"
            },
            // 3 Bedrooms
            {
                id: 6,
                name: "3x2 Pod",
                beds: 3,
                baths: 2,
                price: 985,
                sqft: 728,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/3x2-pod-824188/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/143//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/01/123000/66fc3fa84d2600.78979751504.jpg"
            },
            {
                id: 7,
                name: "3x2 Lite",
                beds: 3,
                baths: 2,
                price: 1189,
                sqft: 801,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/3x2-lite-824181/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/012859/68d4467b9f1474.38144944236.png"
            },
            {
                id: 8,
                name: "3x2",
                beds: 3,
                baths: 2,
                price: 1489,
                sqft: 773,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/3x2-824178/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/013117/68d4470583a5b2.43532965345.png"
            },
            // 4 Bedrooms
            {
                id: 9,
                name: "4x2 Pod",
                beds: 4,
                baths: 2,
                price: 979,
                sqft: 881,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/4x2-pod-824189/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/143//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/01/123539/66fc40fb218935.21592994245.jpg"
            },
            {
                id: 10,
                name: "4x2 Lite",
                beds: 4,
                baths: 2,
                price: 999,
                sqft: 896,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/4x2-lite-824183/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/013618/68d448324f8034.70409986720.png"
            },
            {
                id: 11,
                name: "4x2 Lite +",
                beds: 4,
                baths: 2,
                price: 1019,
                sqft: 1010,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/4x2-lite--823515/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/013845/68d448c55a54e2.66892386627.png"
            },
            {
                id: 12,
                name: "4x2",
                beds: 4,
                baths: 2,
                price: 1199,
                sqft: 937,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/4x2-824179/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/014017/68d44921357547.92747387450.png"
            },
            // 5 Bedrooms
            {
                id: 13,
                name: "5x3",
                beds: 5,
                baths: 3,
                price: 1135,
                sqft: 1209,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x3-824182/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/01/125607/66fc45c7796ee5.78161189107.jpg"
            },
            {
                id: 14,
                name: "5x3 VIP",
                beds: 5,
                baths: 3,
                price: 1210,
                sqft: 1239,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x3-vip-824193/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/11/113510/670961ce6f9126.26522942982.jpg"
            },
            {
                id: 15,
                name: "5x3 Mansion",
                beds: 5,
                baths: 3,
                price: 1285,
                sqft: 1270,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x3-mansion-824186/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/11/113347/6709617b45aa22.29670106713.jpg"
            },
            {
                id: 16,
                name: "5x4",
                beds: 5,
                baths: 4,
                price: 1175,
                sqft: 1343,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x4-824191/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2024/10/11/113055/670960cf519843.50733695579.jpg"
            },
            {
                id: 17,
                name: "5x4 VIP",
                beds: 5,
                baths: 4,
                price: 1250,
                sqft: 1343,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x4-vip-824192/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/014520/68d44a4ff41d41.89978982392.png"
            },
            {
                id: 18,
                name: "5x4 Mansion",
                beds: 5,
                baths: 4,
                price: 1325,
                sqft: 1352,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x4-mansion-824185/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/014709/68d44abd403b77.63682407974.png"
            },
            {
                id: 19,
                name: "5x5",
                beds: 5,
                baths: 5,
                price: 1375,
                sqft: 1423,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x5-824180/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/014905/68d44b3141e2a6.48138757117.png"
            },
            {
                id: 20,
                name: "5x5 VIP",
                beds: 5,
                baths: 5,
                price: 1450,
                sqft: 1423,
                floorPlanUrl: "https://hubbloomington.prospectportal.com/bloomington/hub-bloomington/floorplans/5x5-vip-824194/fp_name/occupancy_type/student/lease_term%5Bid%5D/16783/space_configuration_id/2//lease_start_window%5Bid%5D/21578/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/22/2025/09/24/015005/68d44b6dc75d08.78234897414.png"
            }
        ]
    },
    {
        id: 3,
        name: "The Rive Bloomington",
        location: "1820 N Walnut St, Bloomington, IN 47404",
        price: 1235,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://www.rivebloomington.com",
        imageUrl: "https://www.therivebloomington.com/wp-content/uploads/2024/09/rive-bloomington-index-hero_hero_image_5.jpg",
        hasDetailPage: true,
        floorPlans: [
            // Studio
            {
                id: 1,
                name: "Murphy",
                beds: "Studio",
                baths: 1,
                price: 1599,
                sqft: 343,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/murphy-827980/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/084223/688a2f4ee7d875.65964159727.png"
            },
            {
                id: 2,
                name: "Murphy Premium",
                beds: "Studio",
                baths: 1,
                price: 1649,
                sqft: 343,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/murphy-premium-827986/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/084249/688a2f693979e3.00117947715.png"
            },
            // 1 Bedroom
            {
                id: 3,
                name: "1x1",
                beds: 1,
                baths: 1,
                price: 1975,
                sqft: 578,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/1x1-827979/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/084423/688a2fc7a711a7.47016352910.png"
            },
            // 2 Bedrooms
            {
                id: 4,
                name: "2x2",
                beds: 2,
                baths: 2,
                price: 1495,
                sqft: 718,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/2x2-827976/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/084522/688a30029ef279.72273768679.png"
            },
            {
                id: 5,
                name: "2x2 Premium",
                beds: 2,
                baths: 2,
                price: 1545,
                sqft: 718,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/2x2-premium-827984/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/084842/688a30ca6dd895.88477638928.png"
            },
            // 3 Bedrooms
            {
                id: 6,
                name: "3x3",
                beds: 3,
                baths: 3,
                price: 1509,
                sqft: 1000,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/3x3-827981/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/085013/688a3125d436c6.89093437157.png"
            },
            {
                id: 7,
                name: "3x3 Premium",
                beds: 3,
                baths: 3,
                price: 1559,
                sqft: 1000,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/3x3-premium-827983/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/085102/688a3156609ff6.28735736518.png"
            },
            // 4 Bedrooms
            {
                id: 8,
                name: "4x4",
                beds: 4,
                baths: 4,
                price: 1235,
                sqft: 1218,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/4x4-827977/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/090048/688a339fd0e602.34339970353.png"
            },
            {
                id: 9,
                name: "4x4 +",
                beds: 4,
                baths: 4,
                price: 1285,
                sqft: 1329,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/4x4--827978/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/090133/688a33cd5f0093.70770389530.png"
            },
            {
                id: 10,
                name: "4x4 Premium",
                beds: 4,
                baths: 4,
                price: 1285,
                sqft: 1218,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/4x4-premium-827985/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/090255/688a341eeabb02.65666201757.png"
            },
            {
                id: 11,
                name: "4x4 + Premium",
                beds: 4,
                baths: 4,
                price: 1335,
                sqft: 1329,
                floorPlanUrl: "https://therivebloomington.prospectportal.com/bloomington/the-rive-bloomington/floorplans/4x4-premium-827982/fp_name/occupancy_type/student/lease_term%5Bid%5D/16868/space_configuration_id/2//lease_start_window%5Bid%5D/21662/",
                imageUrl: "https://medialibrarycfo.entrata.com/4350/MLv3/4/23/2025/07/30/090414/688a346e44bda2.82367874676.png"
            }
        ]
    },
    {
        id: 4,
        name: "Campus Edge on Pierce",
        location: "915 E 3rd St, Bloomington, IN",
        price: 1200,
        beds: 3,
        baths: 2,
        floorPlanUrl: "https://www.americancampus.com/student-apartments/in/bloomington/campus-edge-on-pierce",
        imageUrl: "https://assets.amberstudent.com/inventories/1458182/07e3a7ab.jpg?w=600&fit=crop&q=80&auto=format&trim=auto"
    },
    {
        id: 5,
        name: "The Quarters Bloomington",
        location: "1521 W Isaac Dr, Bloomington, IN 47403",
        price: 850,
        beds: 4,
        baths: 4,
        floorPlanUrl: "https://www.livequarters.com",
        imageUrl: "https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_1000,w_1500/v1698276043/g5/g5-c-6068srjgt-tailwind-group/g5-cl-1o1qg2mtxx-tailwind-group-bloomington-in/uploads/oyqg4a5yfoxpwucahkks_acqwsv.jpg",
        hasDetailPage: true,
        floorPlans: [
            // Studio
            {
                id: 1,
                name: "Studio",
                beds: "Studio",
                baths: 1,
                price: 1280,
                sqft: 350,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/studio-1938/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083216/664d592f8f5d96.81904527591.png"
            },
            // 1 Bedroom
            {
                id: 2,
                name: "A1 - 1x1",
                beds: 1,
                baths: 1,
                price: 1410,
                sqft: 608,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/a1-1x1-1937/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083004/664d58acca91c5.51430164270.png"
            },
            {
                id: 3,
                name: "B1 - 1x1",
                beds: 1,
                baths: 1,
                price: 1375,
                sqft: 551,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/b1-1x1-1942/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083054/664d58de743a87.88263136176.png"
            },
            {
                id: 4,
                name: "C1 - 1x1",
                beds: 1,
                baths: 1,
                price: 1460,
                sqft: 726,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/c1-1x1-1939/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083135/664d5907abd226.05209232174.png"
            },
            // 2 Bedrooms
            {
                id: 5,
                name: "A2 - 2x2",
                beds: 2,
                baths: 2,
                price: 999,
                sqft: 871,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/a2-2x2-1935/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083300/664d595cd037e1.04667807251.png"
            },
            {
                id: 6,
                name: "B2 - 2x2",
                beds: 2,
                baths: 2,
                price: 1019,
                sqft: 756,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/b2-2x2-1940/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083344/664d5988d6b6d3.53616915572.png"
            },
            {
                id: 7,
                name: "C2 - 2x2",
                beds: 2,
                baths: 2,
                price: 1015,
                sqft: 864,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/c2-2x2-1941/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083425/664d59b1a6e850.79544164697.png"
            },
            {
                id: 8,
                name: "D2 - 2x2",
                beds: 2,
                baths: 2,
                price: 1050,
                sqft: 885,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/d2-2x2-1943/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083512/664d59e0c6acd9.43295912918.png"
            },
            {
                id: 9,
                name: "E2 - 2x2",
                beds: 2,
                baths: 2,
                price: 1050,
                sqft: 977,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/e2-2x2-1936/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083557/664d5a0d498818.55431088576.png"
            },
            // 3 Bedrooms
            {
                id: 10,
                name: "A3 - 3x3",
                beds: 3,
                baths: 3,
                price: 885,
                sqft: 984,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/a3-3x3-1934/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083635/664d5a339a93c0.91791528311.png"
            },
            // 4 Bedrooms
            {
                id: 11,
                name: "A4 - 4x4",
                beds: 4,
                baths: 4,
                price: 835,
                sqft: 1239,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/a4-4x4-1933/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083729/664d5a699df885.06488464469.png"
            },
            {
                id: 12,
                name: "B4 - 4x4.5",
                beds: 4,
                baths: 4.5,
                price: 875,
                sqft: 1999,
                floorPlanUrl: "https://quartersbloomington.prospectportal.com/bloomington/the-quarters-bloomington/floorplans/b4-4x45-1944/fp_name/occupancy_type/student/lease_term%5Bid%5D/5738/space_configuration_id/2//lease_start_window%5Bid%5D/19053/",
                imageUrl: "https://medialibrarycfo.entrata.com/100016/MLv3/4/23/2024/05/21/083807/664d5a8f4fa576.57053719324.png"
            }
        ]
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
        name: "The Stageyard Bloomington",
        location: "321 S. Walnut Street, Bloomington, IN 47401",
        price: 1177,
        beds: 3,
        baths: 3,
        floorPlanUrl: "https://stageyardlife.com",
        imageUrl: "https://images1.apartments.com/i2/RUUOqUiN4P2EjIqK5-PZ91a1OOA2cvd9hD4ljCJ0oPE/117/3-square-bloomington-in-building-photo.jpg?p=1",
        hasDetailPage: true,
        floorPlans: [
            // Studios
            {
                id: 1,
                name: "The Bellows",
                beds: "Studio",
                baths: 1,
                price: 1295,
                sqft: 481,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-bellows/",
                imageUrl: "https://stageyardlife.com/assets/images/the-bellows_single11.svg"
            },
            {
                id: 2,
                name: "The Bellows II",
                beds: "Studio",
                baths: 1,
                price: 1300,
                sqft: 441,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-bellows-ii/",
                imageUrl: "https://stageyardlife.com/assets/images/the-bellows-i-i_single11.svg"
            },
            {
                id: 3,
                name: "The Conductor",
                beds: "Studio",
                baths: 1,
                price: 1540,
                sqft: 557,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-conductor/",
                imageUrl: "https://stageyardlife.com/assets/images/the-conductor_single11.svg"
            },
            {
                id: 4,
                name: "The Trolley",
                beds: "Studio",
                baths: 1,
                price: 1616,
                sqft: 539,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-trolley/",
                imageUrl: "https://stageyardlife.com/assets/images/the-trolley_single12.svg"
            },
            {
                id: 5,
                name: "The Regulator",
                beds: "Studio",
                baths: 1,
                price: 1785,
                sqft: 643,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-regulator/",
                imageUrl: "https://stageyardlife.com/assets/images/the-regulator_single11.svg"
            },
            // 1 Bedrooms
            {
                id: 6,
                name: "The Journey",
                beds: 1,
                baths: 1,
                price: 1720,
                sqft: 577,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-journey/",
                imageUrl: "https://stageyardlife.com/assets/images/the-journey_single11.svg"
            },
            // 2 Bedrooms
            {
                id: 7,
                name: "The Docent",
                beds: 2,
                baths: 2,
                price: 1274,
                sqft: 1013,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-docent/",
                imageUrl: "https://stageyardlife.com/assets/images/the-docent_single11.svg"
            },
            {
                id: 8,
                name: "The Traveler",
                beds: 2,
                baths: 2,
                price: 1213,
                sqft: 963,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-traveler/",
                imageUrl: "https://stageyardlife.com/assets/images/the-traveler_single11.svg"
            },
            {
                id: 9,
                name: "The Pathway",
                beds: 2,
                baths: 2,
                price: 1399,
                sqft: 1107,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-pathway/",
                imageUrl: "https://stageyardlife.com/assets/images/the-pathway_single11.svg"
            },
            // 3 Bedrooms
            {
                id: 10,
                name: "The Key",
                beds: 3,
                baths: 3,
                price: 1177,
                sqft: 1391,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-key/",
                imageUrl: "https://stageyardlife.com/assets/images/the-key_single11.svg"
            },
            {
                id: 11,
                name: "The Passenger",
                beds: 3,
                baths: 3,
                price: 1223,
                sqft: 1409,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-passenger/",
                imageUrl: "https://stageyardlife.com/assets/images/the-passenger_single11.svg"
            },
            {
                id: 12,
                name: "The Explorer",
                beds: 3,
                baths: 3,
                price: 1245,
                sqft: 1487,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-explorer/",
                imageUrl: "https://stageyardlife.com/assets/images/the-explorer_single11.svg"
            },
            {
                id: 13,
                name: "The Celer",
                beds: 3,
                baths: 3,
                price: 1141,
                sqft: 1331,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-celer/",
                imageUrl: "https://stageyardlife.com/assets/images/the-celer_single11.svg"
            },
            // 4 Bedrooms
            {
                id: 14,
                name: "The Navigator",
                beds: 4,
                baths: 4,
                price: 1090,
                sqft: 1642,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-navigator/",
                imageUrl: "https://stageyardlife.com/assets/images/the-navigator_single11.svg"
            },
            {
                id: 15,
                name: "The Arrival",
                beds: 4,
                baths: 4,
                price: 1055,
                sqft: 1521,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-arrival/",
                imageUrl: "https://stageyardlife.com/assets/images/the-arrival_single11.svg"
            },
            {
                id: 16,
                name: "The Compass",
                beds: 4,
                baths: 4,
                price: 1155,
                sqft: 1822,
                floorPlanUrl: "https://stageyardlife.com/floorplans/the-compass/",
                imageUrl: "https://stageyardlife.com/assets/images/the-compass_single12.svg"
            }
        ]
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
        name: "The Avenue on College",
        location: "455 N College Ave, Bloomington, IN 47404",
        price: 1045,
        beds: 2,
        baths: 2,
        floorPlanUrl: "https://www.avenueoncollege.com",
        imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/02/The-Avenue-of-College-Floorplan-The-Two-Renovated.png",
        hasDetailPage: true,
        floorPlans: [
            // 2 Bedrooms
            {
                id: 1,
                name: "The Two Renovated",
                beds: 2,
                baths: 2,
                price: 1125,
                sqft: 727,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-two-renovated-1130688/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/02/The-Avenue-of-College-Floorplan-The-Two-Renovated.png"
            },
            {
                id: 2,
                name: "The Two Unrenovated",
                beds: 2,
                baths: 2,
                price: 1020,
                sqft: 727,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-two-unrenovated-1130689/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/03/47378_100083936_5be07ad39bbb83.71241574940.png"
            },
            {
                id: 3,
                name: "The Morton Townhome",
                beds: 2,
                baths: 2.5,
                price: 1275,
                sqft: 1544,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-morton-townhome-1130691/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/02/The-Avenue-of-College-Floorplan-The-Morton-TH.png"
            },
            // 3 Bedrooms
            {
                id: 4,
                name: "The Three Renovated",
                beds: 3,
                baths: 2,
                price: 1025,
                sqft: 1109,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-three-renovated-1130692/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/02/The-Avenue-of-College-Floorplan-The-Three-Renovated.png"
            },
            {
                id: 5,
                name: "The Three Unrenovated",
                beds: 3,
                baths: 2,
                price: 995,
                sqft: 1109,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-three-unrenovated-1130693/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/03/47379_100083936_5be07b28be8c39.16612689863.png"
            },
            // 4 Bedrooms
            {
                id: 6,
                name: "The Four Renovated",
                beds: 4,
                baths: 2,
                price: 1045,
                sqft: 1492,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-four-renovated-1130690/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/02/The-Avenue-of-College-Floorplan-The-Four-Renovated.png"
            },
            {
                id: 7,
                name: "The Four Unrenovated",
                beds: 4,
                baths: 2,
                price: 975,
                sqft: 1492,
                floorPlanUrl: "https://avenueoncollege2.prospectportal.com/bloomington/avenue-on-college/floorplans/the-four-unrenovated-1130694/",
                imageUrl: "https://www.avenueoncollege.com/wp-content/uploads/2025/03/47380_100083936_5be07b6475fbe5.30471446366.png"
            }
        ]
    },
    {
        id: 11,
        name: "Scholar's Quad",
        location: "2716 E 10th St, Bloomington, IN",
        price: 800,
        beds: 4,
        baths: 2,
        floorPlanUrl: "https://www.scholarsquad.com",
        imageUrl: "https://www.scholarsquad.com/static/media/Hero-mobile.d18f2497afb32d782621.jpg"
    },
    {
        id: 12,
        name: "Woodbridge Apartments",
        location: "3401 John Hinkle Pl, Bloomington, IN",
        price: 750,
        beds: 2,
        baths: 1,
        floorPlanUrl: "https://www.woodbridgebloomington.com",
        imageUrl: "https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_lfill,w_420,ar_1.05,g_auto/s3/2/4107/main%20image-new.jpg"
    },
    {
        id: 13,
        name: "College Mall Apartments",
        location: "2623 E 2nd St, Bloomington, IN",
        price: 700,
        beds: 1,
        baths: 1,
        floorPlanUrl: "https://www.collegemallapartments.com",
        imageUrl: "https://images1.apartments.com/i2/gicWXu4KuyY_KG3qqEYzGc79EdPL9ui66CscGUE_usM/111/college-mall-apartments-bloomington-in-building-photo.jpg"
    }
];
