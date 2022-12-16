import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, lastValueFrom, map } from 'rxjs';
import { DigiItemEntity } from './model/DigiItemEntity';
@Injectable()
export class ScraperService {
  private readonly logger = new Logger(ScraperService.name);
  constructor(private httpService: HttpService) {}

  //Promise<AxiosResponse<any[]>>
  async getEndpoint(url): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>(url).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'an error occured calling digikala Apis';
        })
        // map((res) => {
        //   return res.data;
        // }),
      )
    );
    return data['data']['products'];
  }

  async mapNeedItems(url): Promise<DigiItemEntity[]> {
    const items = await this.getEndpoint(url);

    const date = new Date().toISOString().slice(0, 10);
    const dateTime = new Date()
      .toTimeString()
      .replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');

    let digiItems: DigiItemEntity[] = [];
    items.forEach((quote: any) => {
      const item3: DigiItemEntity = {
        digiId: 2,
        title_fa: quote.title_fa,
        title_en: quote.title_en,
        uri: quote.url.uri,
        brand: quote.data_layer.brand,
        item_category2: quote.data_layer.item_category2,
        item_category3: quote.data_layer.item_category3,
        item_category4: quote.data_layer.item_category4,
        item_category5: quote.data_layer.item_category5,
        rating_rate: quote.rating.rate,
        rating_count: quote.rating.count,
        mainImage: quote.images.main.url[0],
         size: quote.default_variant.size.title,
         seller_code: quote.default_variant.seller.code,
         seller_title: quote.default_variant.seller.title,
         seller_rating_commitment : quote.default_variant.seller.rating
           .total_rate,
         seller_rating_count : quote.default_variant.seller.rating.total_count,
        selling_price: quote.default_variant.price.selling_price,
        rrp_price: quote.default_variant.price.rrp_price,
        discount_percent : quote.default_variant.price.discount_percent,
        // badge_title: quote.default_variant.price.badge.title??"",
         shipment_methods : quote.default_variant.shipment_methods.description,
        created_at : date + ' ' + dateTime,
      };
      digiItems.push(item3);
    });

    //orm.orm().insert_item(digiItems);
    return digiItems;
  }
}
