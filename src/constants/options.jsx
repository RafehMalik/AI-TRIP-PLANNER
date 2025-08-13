export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "👤",
    people: "1 person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurers",
    icon: "👨‍👩‍👧",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Trio",
    desc: "Three friends exploring together",
    icon: "👨‍👩‍👦",
    people: "3 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💲",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate a travel plan for the location {location} for {noOfDays} days for a {traveler} with a {budget} budget . Provide a list of hotel options including the hotel name, hotel address, price, hotel image URL, geo coordinates, rating, and description. Additionally, suggest an itinerary for the trip that includes the place name, place details, place image URL, geo coordinates, ticket pricing, rating, and estimated travel time to each location. Create a plan for each of the {noOfDays} days, specifying the best time to visit each location. Return all information in JSON format.";
