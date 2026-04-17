export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

export interface MenuSection {
  id: string;
  label: string;
  items: MenuItem[];
}

export const MENU: MenuSection[] = [
  {
    id: "small-plates",
    label: "Small Plates",
    items: [
      { name: "Charred Octopus", description: "Smoked paprika romesco, crispy potato, salsa verde", price: "19" },
      { name: "Seared Scallops", description: "Brown butter, citrus, pickled fennel, micro herbs", price: "22", badge: "Chef's Pick" },
      { name: "Burrata & Stone Fruit", description: "Heirloom peach, basil oil, aged balsamic, sourdough", price: "16" },
      { name: "Steak Tartare", description: "Hand-cut beef, capers, shallot, smoked yolk, brioche", price: "18" },
      { name: "Whipped Ricotta", description: "Local honey, toasted walnut, rosemary, grilled bread", price: "14" },
    ],
  },
  {
    id: "shareables",
    label: "Shareables",
    items: [
      { name: "The Glass House Board", description: "Three cheeses, three cured meats, fig jam, honeycomb, accoutrements", price: "32" },
      { name: "Wood-Fired Flatbread", description: "Wild mushroom, taleggio, truffle honey, thyme", price: "17" },
      { name: "Crispy Brussels", description: "Bacon lardons, maple-bourbon glaze, pecorino", price: "13" },
      { name: "Tuna Crudo", description: "Yuzu, avocado, crispy shallot, sesame oil", price: "21" },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      { name: "44-Day Dry-Aged Ribeye", description: "Bone marrow butter, charred onion jus, pommes purée", price: "58", badge: "Signature" },
      { name: "Pan-Roasted Halibut", description: "Saffron beurre blanc, leeks, fingerling potatoes", price: "42" },
      { name: "Duck Breast", description: "Cherry gastrique, parsnip purée, charred broccolini", price: "38" },
      { name: "Wild Mushroom Risotto", description: "Aged parmesan, black truffle, crispy sage", price: "28" },
      { name: "Bone-In Pork Chop", description: "Apple-bourbon glaze, smoked gouda grits, collards", price: "34" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Dark Chocolate Tart", description: "Burnt honey, sea salt, crème fraîche", price: "12" },
      { name: "Crème Brûlée", description: "Vanilla bean, candied citrus", price: "11" },
      { name: "Bourbon Bread Pudding", description: "Brown butter ice cream, pecan praline", price: "12" },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    items: [
      { name: "Smoked Old Fashioned", description: "Bourbon, demerara, applewood smoke, orange oil", price: "16", badge: "House Favorite" },
      { name: "Riverfront Sour", description: "Rye, lemon, honey-thyme, egg white, angostura", price: "15" },
      { name: "The Glass Negroni", description: "Gin, Campari, Carpano Antica, expressed grapefruit", price: "15" },
      { name: "Ember Martini", description: "Mezcal, blanc vermouth, jalapeño, lime, salt rim", price: "16" },
      { name: "Velvet Manhattan", description: "Aged rye, sweet vermouth, chocolate bitters, brandied cherry", price: "17" },
      { name: "Garden Spritz", description: "Aperol, prosecco, cucumber, basil, soda", price: "13" },
    ],
  },
  {
    id: "wine",
    label: "Wine",
    items: [
      { name: "Sparkling — Blanc de Blancs", description: "Loire Valley, France · crisp, brioche, citrus", price: "14 / 56" },
      { name: "White — Chardonnay", description: "Sonoma Coast, CA · stone fruit, barrel, lemon curd", price: "15 / 60" },
      { name: "White — Sauvignon Blanc", description: "Marlborough, NZ · grapefruit, gooseberry, mineral", price: "13 / 52" },
      { name: "Red — Pinot Noir", description: "Willamette Valley, OR · cherry, forest floor, silk", price: "16 / 64" },
      { name: "Red — Cabernet Sauvignon", description: "Napa Valley, CA · cassis, cedar, dark chocolate", price: "18 / 72" },
      { name: "Red — Malbec", description: "Mendoza, Argentina · plum, violet, cocoa", price: "13 / 52" },
    ],
  },
  {
    id: "beer",
    label: "Beer",
    items: [
      { name: "Local Lager", description: "Apocalypse Ale Works · Forest, VA", price: "7" },
      { name: "IPA", description: "Three Notch'd · Charlottesville, VA", price: "8" },
      { name: "Belgian Wit", description: "Allagash White · Portland, ME", price: "8" },
      { name: "Stout", description: "Guinness Draught · Dublin, Ireland", price: "7" },
      { name: "Cider", description: "Bold Rock Virginia Apple", price: "7" },
    ],
  },
];
