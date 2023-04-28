// import Golf6 from "../images/cars-big/golf6.jpg";
import Golf6 from "../../images/cars-big/golf6.jpg";
import AudiA1 from "../../images/cars-big/audia1.jpg";
import Toyota from "../../images/cars-big/toyotacamry.jpg";
import Bmw320 from "../../images/cars-big/bmw320.jpg";
import Benz from "../../images/cars-big/benz.jpg";
import Passat from "../../images/cars-big/passatcc.jpg";
import c70 from "../../images/cars-big/c70.jpg";
import envoy from "../../images/cars-big/envoy.png";
import yukon from "../../images/cars-big/yukon.jpg";
import Dodge from "../../images/cars-big/dodge.png";
import Cadillac from "../../images/cars-big/CadillacCTS.png";
import Ford from "../../images/cars-big/ford.png";
import sl from "../../images/cars-big/sl.png";
import BMWX5 from "../../images/cars-big/BMWX5.jpg";
import mazda from "../../images/cars-big/mazda.png";
import Q7 from "../../images/cars-big/Q7.jpeg";

export const CAR_DATA = [
  {
    name: "VW Golf 6",
    price: "37",
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    air: "Yes",
    doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    id: '1'
  },
  {
    name: "Audi A1 S-Line",
    price: "45",
    img: AudiA1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Gasoline",
    id: '2'
  },
  {
    name: "Toyota Camry",
    price: "30",
    img: Toyota,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Hybrid",
    id: '3'
  },
  {
    name: "BMW 320 ",
    price: "35",
    img: Bmw320,
    model: "320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    id: '4'
  },
  {
    name: "Mercedes-Benz GLK",
    price: "50",
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Yes",
    transmission: "Manual",
    fuel: "Diesel",
    id: '5'
  },
  {
    name: "VW Passat CC",
    price: "25",
    img: Passat,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Yes",
    transmission: "Automatic",
    fuel: "Gasoline",
    id: '6'
  },
  {
    id: '11',
    mark: "Mazda 5",
    model: "Mazda5",
    car_color: "Red",
    year: '2010',
    vin: "WAUNE78P18A342660",
    price: "$39",
    availability: true,
      doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    img:mazda
  },
  {
    id: 12,
    name: "Audi Q7",
    mark: "Audi",
    model: "Q7",
    car_color: "Pink",
    year: 2012,
    vin: "WA1WYBFE2AD448505",
    price: "$41",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:Q7
  },
  {
    id: 13,
    name: "Mercedes SL",
    mark: "Mercedes-Benz",
    model: "SL-Class",
    car_color: "Aquamarine",
    year: 1989,
    vin: "4A4AP3AU8FE713946",
    price: "$33",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:sl
  },
  {
    id: 14,
    name: "Volvo C70",
    mark: "Volvo",
    model: "C70",
    car_color: "Red",
    year: 2012,
    vin: "WAUHGBFC9DN768366",
    price: "$23",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:c70
  },
  {
    id: 15,
    name: "GMC Envoy",
    mark: "GMC",
    model: "Envoy XL",
    car_color: "Green",
    year: 2006,
    vin: "WA1AV74L67D649365",
    price: "$42",
    availability: false,
      doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    img:envoy
  },
  {
    id: 16,
    name: "GMC Yukon",
    mark: "GMC",
    model: "Yukon ",
    car_color: "Teal",
    year: 1996,
    vin: "1FMJK2A5XAE576485",
    price: "$18",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:yukon
  },
  {
    id: 17,
    name: "Cadillac CTS",
    mark: "Cadillac",
    model: "CTS",
    car_color: "Pink",
    year: 2003,
    vin: "WAUVC68E02A369838",
    price: "$56",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:Cadillac
  },
  {
    id: 18,
    name: "BMW X5 M",
    mark: "BMW",
    model: "X5 M",
    car_color: "Mauv",
    year: 2012,
    vin: "WA1YD54B63N613712",
    price: "$27",
    availability: true,
      doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    img:BMWX5
  },
  {
    id: 19,
    name: "Dodge Viper",
    mark: "Dodge",
    model: "Viper",
    car_color: "Turquoise",
    year: 1999,
    vin: "WAUMF98P66A420495",
    price: "$23",
    availability: true,
      doors: "4/5",
    transmission: "Automatic",
    fuel: "Diesel",
    img:Dodge
  },
  {
    id: 20,
    name: "Ford Taurus",
    mark: "Ford",
    model: "Taurus",
    car_color: "Mauv",
    year: 2002,
    vin: "WAUUL58E15A338821",
    price: "$28",
    availability: true,
      doors: "4/5",
    transmission: "Manual",
    fuel: "Diesel",
    img:Ford
  },
];
