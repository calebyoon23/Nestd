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
        imageUrl: "https://www.thestandardbloomington.com/wp-content/uploads/2024/01/standard-bloomington-index-hero.jpg"
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
