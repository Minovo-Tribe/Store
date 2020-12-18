import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userData: User;
  products;
  slides = [
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/8e83384c-c453-41d5-bd24-e0db3f9565ac1607278783675-F21_Desk_Banner.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/18a36f2f-3894-44d6-822b-cd27f894f27f1607278783716-Gap_Desk_Banner.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/0f52f498-4e5d-472e-a6f8-4635c2b3c3a41607278783638-Bedsheets_Desk.jpg',
    },
    {
      image:
        'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/23ebaf39-d312-4cdd-adb3-2ff246b8b0111607278783602-Kids-Winter-Wear_Desk.jpg',
    },
  ];

  sections = [
    {
      title: 'DEALS OF THE DAY',
      images: [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/7/597e88bb-df01-46ed-86af-af0e6d20408b1607323586086-Super-Hour--1-.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/ba75f17b-b190-4d79-8c11-6e6162b19eaf1607266952384-Up-To-60-.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/aed84e4e-3e9e-4d88-bf7f-986234d67e081607266952427-Min.50.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/53034fe7-d781-4060-8f5e-f8443acaea4d1607266952510-At-149.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/12/6/0746908d-f0a6-4d3b-9b0d-461b500106821607266952471-At-10995.jpg',
      ],
      col: 5,
    },
    {
      title: 'TRENDING IN WESTERN WEAR',
      images: [
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg',
      ],
      col: 5,
    },
    {
      title: 'TRENDING IN INDIAN WEAR',
      images: [
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg',
        'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg',
      ],
      col: 5,
    },
    {
      title: 'TRENDING IN SPORTS WEAR',
      images: [
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg',
        'https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg',
      ],
      col: 5,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private productService: ProductService
  ) {
    this.userData = this.userService.user;
  }
  ngOnInit(): void {}
}
