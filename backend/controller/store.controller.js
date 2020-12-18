const SideMenu = require('../model/side-menu.model');

function getMenuTrending() {
  const menu = `Trending|Best Sellers|New Releases|Movers and Shakers`;
  const list = menu.split('|');
  return { heading: list[0], list: list.slice(1).map((a) => ({ heading: a })) };
}
function getMenuHelp() {
  const menu = `Help & Settings|Your Account|Customer Service|Sign Out`;
  const list = menu.split('|');
  return { heading: list[0], list: list.slice(1).map((a) => ({ heading: a })) };
}
function getMenu() {
  const menu = `Mobiles, Computers||mobiles, tablets & more|All Mobile Phones|All Mobile Accessories|Cases & Covers|Screen Protectors|Power Banks|Refurbished & Open Box|Tablets|Wearable Devices|Smart Home|Office Supplies & Stationery| Software ||computers & accessories| All Computers & Accessories |Laptops|Drives & Storage|Printers & Ink|Networking Devices| Computer Accessories |Game Zone|Monitors|Desktops|Components| All Electronics *TV, Appliances, Electronics||tv, audio & cameras|Televisions|Home Entertainment Systems|Headphones|Speakers|Home Audio & Theater|Cameras|DSLR Cameras|Security Cameras|Camera Accessories|Musical Instruments & Professional Audio|Gaming Consoles| All Electronics ||appliances|Air Conditioners|Refrigerators|Washing Machines|Kitchen & Home Appliances|Heating & Cooling Appliances|All Appliances*Men's Fashion||men's clothing|Clothing|T-shirts & Polos|Shirts|Jeans|Innerwear||accessories|Watches|Bags & Luggage|Sunglasses|Jewellery|Wallets||men's shoes|Shoes|Sports Shoes|Formal Shoes|Casual Shoes||stores|Sportswear|The Designer Boutique|Men's Fashion|Men's Handlooms|Fashion Sales & Deals*Women's Fashion||women's clothing|Clothing|Western Wear|Ethnic Wear|Lingerie & Nightwear|Top Brands||accessories|Watches|Handbags & Clutches|Gold & Diamond Jewellery|Fashion & Silver Jewellery|Sunglasses||women's shoes|Shoes|Fashion Sandals|Ballerinas||stores|The Designer Boutique|Handloom & Handicraft Store|Sportswear|Women's Fashion|Fashion Sales & Deals*Home, Kitchen, Pets||home & kitchen |Explore Showroom|Kitchen & Dining|Kitchen Storage & Containers|Furniture|Fine Art|Home Furnishing|Bedroom Linen|Home Décor
  |Garden & Outdoors|Home Storage|Indoor Lighting|Home Improvement|Sewing & Craft Supplies|All Home & Kitchen|Shop by Room|Home & Kitchen Deals||pet supplies|All Pet Supplies|Dog supplies||home, kitchen, pets|Refurbished & Open Box*Beauty, Health, Grocery||beauty & health|Beauty & Grooming|Luxury Beauty|Make-up|Health & Personal Care|Household Supplies|Personal Care Appliances| Diet & Nutrition|Subscribe & Save|Pantry|Value Bazaar||grocery & gourmet foods|All Grocery & Gourmet Foods|Coffee, Tea & Beverages|Snack Foods*Sports, Fitness, Bags, Luggage||sports & fitness|Cricket|Badminton|Cycling|Football|Running|Camping & Hiking|Fitness Accessories|Yoga|Strength Training|Cardio Equipment|Sports Collectibles|Refurbished & Open Box|All Exercise & Fitness|All Sports, Fitness & Outdoors||bags & luggage|Backpacks|Rucksacks|Suitcases & Trolley Bags|Travel Duffles|Travel Accessories|Wallets*Toys, Baby Products, Kids' Fashion||toys & baby products|Toys & Games|Baby Products|Diapers|Toys Gifting Store|STEM Toys Store|International Toy Store|Baby Bath, Skin & Grooming|Strollers & Prams|Nursing & Feeding|Subscribe & Save|Pantry|Amazon Family||kids' fashion|Kids' Clothing|Kids' Shoes|School Bags|Kids' Watches|Kids' Fashion|Baby Fashion*Car, Motorbike, Industrial||car & motorbike|Motorbike Accessories & Parts|Car Accessories|Car Electronics|Car Parts|Car & Bike Care|All Car & Motorbike Products||industrial supplies|Industrial & Scientific Supplies|Test, Measure & Inspect|Lab & Scientific|Janitorial & Sanitation Supplies*Books||books|All Books|Fiction Books|Editor's Corner|School Textbooks|Children's Books|Exam Central|Textbooks|Indian Language Books`;
  const head = `Shop By Department`;
  const list = menu.split('*');
  const subList = list.map((e) => e.split('||'));
  return subList.map((e) => {
    return {
      heading: e[0],
      list: e.slice(1).map((a) => {
        a = a.split('|');
        return {
          heading: a[0],
          list: a.slice(1),
        };
      }),
    };
  });
}

exports.postSideMenu = async (req, res, next) => {
  try {
    let menu = req.body.menu;
    menu = menu.map((m) => new SideMenu(m));
    await menu.forEach(async (m) => {
      await m.save();
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.resetSideMenu = async (req, res, next) => {
  try {
    try {
      await SideMenu.collection.drop();
    } catch (error) {}
    const trending = new SideMenu(getMenuTrending());
    const helpAndSetting = new SideMenu(getMenuHelp());
    const department = new SideMenu({
      heading: 'Shop By Department',
      list: getMenu(),
    });
    await trending.save();
    await department.save();
    await helpAndSetting.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.patchSideMenu = async (req, res, next) => {
  try {
    //TO DO...
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.getSideMenu = async (req, res, next) => {
  try {
    const sideMenu = await SideMenu.find();
    res.send(sideMenu);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

exports.dropSideMenu = async (req, res, next) => {
  try {
    await SideMenu.collection.drop();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
