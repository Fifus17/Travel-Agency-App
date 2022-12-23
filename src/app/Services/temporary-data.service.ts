import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporaryDataService {

  Data: any[] = [
    {
        "id": "0",
        "title": "Bochnia",
        "country": "Poland",
        "dayOut": "2019-08-01",
        "dayIn": "2019-08-01",
        "price": 200,
        "places": 30,
        "currency": "$",
        "description": "Bochnia is a town in southern Poland with a population of 33,000. It is the capital of Bochnia County, Subcarpathian Voivodeship, and is located in the historical region of Lesser Poland. The town is situated in the valley of the Vistula River, 40 km south of Kraków, and 20 km north of Tarnów. Bochnia is the seat of the Roman Catholic Diocese of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia. The town is also the seat of the Bochnia County Museum, which is housed in the former palace of the Counts of Bochnia.",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Widok_układu_urbanistycznego_Bochni_z_wieży_kościoła_farnego.jpg",
        "reviews": [],
        "avgRating": 4.5
    },
    {
        "id": "1",
        "title": "Hawaii Paradise",
        "country": "Hawaii",
        "dayOut": "2021-08-01",
        "dayIn": "2021-08-15",
        "price": 2400,
        "places": 60,
        "currency": "$",
        "description": "Hawaii is a state of the United States of America. It is the only state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oahu. The date of the state's admission to the Union is August 21, 1959.",
        "image": "https://content.api.news/v3/images/bin/ded3be00f6965dcfa60d91c42563592d?width=1044",
        "reviews": [],
        "avgRating": 5.0
    },
    {
        "title": "Mount Everest",
        "country": "Nepal",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 5400,
        "places": 30,
        "currency": "$",
        "description": "Mount Everest, also known in Nepal as Sagarmāthā and in China as Chomolungma/珠穆朗玛峰, is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China-Nepal border runs across its summit point. Mount Everest is 8,848 metres (29,029 ft) tall, which is 8848 metres (29,029 ft) above mean sea level. Mount Everest is part of the Everest massif. The massif is part of the Himalaya range.",
        "image": "https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg",
        "reviews": [],
        "avgRating": 3.5
    },
    {
        "title": "Honolulu",
        "country": "Hawaii",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 3400,
        "places": 50,
        "currency": "$",
        "description": "Honolulu is the capital and largest city of the U.S. state of Hawaii. It is an unincorporated part of and the county seat of the City and County of Honolulu on the island of O'ahu. The city is the main gateway to Hawaii and a major portal into the United States. The city is also a major hub for international business, military defense, as well as famously being host to a diverse variety of east-west and Pacific culture, cuisine, and traditions. Honolulu is the most remote city of its size in the world and is both the westernmost and the southernmost major U.S. city. For statistical purposes, the U.S. Census Bureau recognizes the area commonly referred to as City of Honolulu as a census county division (CCD).",
        "image": "https://static.nationalgeographic.co.uk/files/styles/image_3200/public/wcitylife_honolulu_118000_hr.jpg?w=1900&h=2850",
        "reviews": [],
        "avgRating": 5.0
    },
    {
        "title": "Safari",
        "country": "Kenya",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 1800,
        "places": 30,
        "currency": "$",
        "description": "A safari is an overland journey, usually a trip by tourists to Africa. The word is the Swahili word for journey. In the past, the trip was often a big-game hunt, but today, safari often refers to trips to observe and photograph wildlife, as well as other cultural and historical attractions. The term safari can apply to trips by tourists, but it is often applied to trips by professionals, such as photographers, naturalists, and hunters.",
        "image": "https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/master/pass/Safari-GettyImages-143917249.jpg",
        "reviews": [],
        "avgRating": 2.7
    },
    {
        "title": "Cape Town",
        "country": "South Africa",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 1900,
        "places": 75,
        "currency": "$",
        "description": "Cape Town is a coastal city in South Africa. It is the second-most populous urban area in South Africa after Johannesburg. It is also the capital and primate city of the Western Cape province. As the seat of the Parliament of South Africa, it is also the legislative capital of the country. It forms part of the City of Cape Town metropolitan municipality. The city is famous for its harbour, for its natural setting in the Cape Floristic Region, and for such well-known landmarks as Table Mountain and Cape Point.",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1",
        "reviews": [],
        "avgRating": 3.2
    },
    {
        "title": "New York",
        "country": "USA",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 3200,
        "places": 120,
        "currency": "$",
        "description": "New York is the most populous city in the United States. With an estimated 2019 population of 8,336,817 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass and one of the world's most populous megacities, with an estimated 2019 population of 20,321,000. A global power city, New York exerts a significant impact upon commerce, finance, media, art, fashion, research, technology, education, and entertainment, its fast pace defining the term New York minute. Home to the headquarters of the United Nations, New York is an important center for international diplomacy.",
        "image": "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/2:3/w_1334,h_2001,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
        "reviews": [],
        "avgRating": 4.8
    },
    {
        "title": "Colorful Carnival",
        "country": "Rio de Janeiro",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 2300,
        "places": 150,
        "currency": "$",
        "description": "Rio Carnival is an annual festival held in Rio de Janeiro, Brazil. The Carnival period officially runs from Friday afternoon through to Tuesday afternoon, but most people participate only on the weekends and Monday. The festival is world famous for its elaborate street parades, featuring samba schools, and extravagant costumes called fantasias. The parades are held on the Sambadrome, a 2.7-kilometre-long parade ground built for the Carnival. The Sambadrome is located in the western zone of the city, in the neighborhood of Maracanã, and is named after the Maracanã Stadium, which is located nearby. The Sambadrome was built in 1984, replacing the previous parade grounds, which were located in the neighborhood of Tijuca.",
        "image": "https://europa-swiat.um.warszawa.pl/documents/14548645/15990123/rio.jpg/ddeb87f1-d443-b6a9-7ae4-8ab16a43b142?version=1.0&t=1614690007093",
        "reviews": [],
        "avgRating": 3.6
    },
    {
        "title": "Sydney",
        "country": "Australia",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 2800,
        "places": 30,
        "currency": "$",
        "description": "Sydney is the state capital of New South Wales and the most populous city in Australia and Oceania. Located on Australia's east coast, the metropolis surrounds Port Jackson and extends about 70 km (43.5 mi) on its periphery towards the Blue Mountains to the west, Hawkesbury to the north, the Royal National Park to the south and Macarthur to the south-west. Sydney is made up of 658 suburbs, 40 local government areas and 15 contiguous regions. Residents of the city are known as 'Sydneysiders'. As of June 2019, Sydney's estimated metropolitan population was 5,230,330 and is home to approximately 65% of the state's population. In June 2019, Sydney was ranked the fourth most liveable city in the world by the Economist Intelligence Unit and one of the world's most expensive cities.",
        "image": "https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg",
        "reviews": [],
        "avgRating": 3.5
    },
    {
        "title": "Menton",
        "country": "France",
        "dayOut": "2022-08-01",
        "dayIn": "2022-09-01",
        "price": 1900,
        "places": 40,
        "currency": "$",
        "description": "Menton is a commune in the Alpes-Maritimes department in the Provence-Alpes-Côte d'Azur region in southeastern France. It is located on the Franco-Italian border, on the Mediterranean coast, about 30 km (19 mi) east of Nice. Menton is the second-smallest prefecture in France, after Monaco. Menton is the birthplace of the famous French artist Auguste Renoir.",
        "image": "https://www.lelongweekend.com/wp-content/uploads/2022/03/DSC00955.jpg",
        "reviews": [],
        "avgRating": 3.8
    }
]

  constructor() { }

  getData(): any {
    return this.Data;
  }
}
