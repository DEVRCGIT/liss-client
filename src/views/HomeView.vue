<template>
  <Selection
    :url="url"
    :items="items"
    :isMobile="isMobile"
    :assigned="assigned"
  ></Selection>
</template>

<script>
import Selection from "../components/Selections.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Selection,
  },
  data() {
    return {
      url: "",
      auth: "",
      isMobile: false,
      objIDs: [],
      type: null,
      assigned: {
        name: "",
        position: "",
        avatar: "",
        phone: "",
        email: "",
      },
      items: [
        /*   {
          showDialog: false,
          type: "Продажа",
          id: "16",
          title: "Продается 1-комн. апартаменты, 47,07 м²",
          address: "Москва, Космодамианская наб.",
          lat: null,
          lon: null,
          fullPrice: "75 594 420",
          fullPricexls: "75594420",
          mapPrice: "75,5",
          squarePrice: "1606000",
          currency: "₽",
          rooms: "1",
          residense: "Клубный дом Космо 4/22",
          residenceID: "1",
          street: null,
          square: "47.07",
          bedroom: "1",
          status: "Новостройка",
          floor: "2",
          floors: "6",
          wc: null,
          otc: "",
          coordinates: ["37.644252", "55.739493"],
          discriptions: "Объявление снято с публикации, поищите ещё что-нибудь",
          assigned: {
            name: "Арзыкаев Эльяр Эльчин-оглы",
            position: "Брокер",
            avatar: "https://avatars.githubusercontent.com/u/91216500?v=4",
            phone: "+79137921801",
            email: "ee.arzikaev@ya.ru",
          },
          commision: null,
          actualDate: "2024-08-22 13:57:15",
          mainPhoto: {
            id: "241",
            url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_0.jpg",
            width: null,
            height: null,
          },
          photos: [
            {
              id: "242",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_2.jpg",
              width: null,
              height: null,
            },
            {
              id: "243",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_3.jpg",
              width: null,
              height: null,
            },
            {
              id: "244",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_4.jpg",
              width: null,
              height: null,
            },
            {
              id: "245",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_5.jpg",
              width: null,
              height: null,
            },
            {
              id: "246",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_6.jpg",
              width: null,
              height: null,
            },
            {
              id: "247",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_7.jpg",
              width: null,
              height: null,
            },
            {
              id: "248",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_8.jpg",
              width: null,
              height: null,
            },
            {
              id: "249",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_9.jpg",
              width: null,
              height: null,
            },
            {
              id: "250",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_10.jpg",
              width: null,
              height: null,
            },
            {
              id: "251",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_11.jpg",
              width: null,
              height: null,
            },
            {
              id: "252",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_12.jpg",
              width: null,
              height: null,
            },
            {
              id: "253",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_13.jpg",
              width: null,
              height: null,
            },
            {
              id: "254",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_14.jpg",
              width: null,
              height: null,
            },
            {
              id: "255",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_15.jpg",
              width: null,
              height: null,
            },
            {
              id: "256",
              url: "https://spa-bitrix.ru/liss/parser/images/lot/img_16_16.jpg",
              width: null,
              height: null,
            },
          ],
        },*/
      ],
    };
  },
  methods: {
    async getObjs() {
      try {
        this.items = [];
        console.log(this.objIDs, "getObj");
        let formData = new FormData();
        for (const index in this.objIDs) {
          console.log({ index });
          console.log(this.objIDs[index]);
          formData.append(`id[${index}]`, this.objIDs[index]);
        }
        formData.append(`params`, "getSelection");

        const objData = await axios.post(
          "https://lissearch.ru/backend/selection/",
          formData
        );
        console.log({ objData });
        for (const item of objData.data) {
          console.log({ item });
          this.assigned = {
            name: "Арзыкаев Эльяр Эльчин-оглы",
            position: "Брокер",
            avatar: "https://avatars.githubusercontent.com/u/91216500?v=4",
            phone: "+79137921801",
            email: "ee.arzikaev@ya.ru",
          }; //item[0]

          const photos = item[0].lot_photo_url.split(";");
          console.log({ photos });
          this.items.push({
            showDialog: false,
            type: "Продажа",
            id: item[0].id,
            title: item[0].lot_name,
            address: item[0].lot_adress,
            lat: item[0].lat,
            lon: item[0].lon,
            fullPrice: new Intl.NumberFormat("ru-RU").format(
              Number(item[0].lot_price)
            ),
            fullPricexls: Number(item[0].lot_price),
            mapPrice: new Intl.NumberFormat("ru-RU").format(
              Number(item[0].lot_price)
            ),
            squarePrice: new Intl.NumberFormat("ru-RU").format(
              Number(item[0].lot_price_m2)
            ),
            currency: "₽",
            rooms: item[0].lot_bedroom,
            residense: item.jk_name,
            residenceID: item[0].jk_id,
            street: null,
            square: item[0].lot_square,
            bedroom: item[0].lot_bedroom,
            status: "Новостройка",
            floor: item[0].lot_floor.split(":")[0],
            floors: item[0].lot_floor.split(":")[1].trim(),
            wc: null,
            otc: item[0].lot_otc,
            coordinates: [item[0].lon, item[0].lat],
            discriptions: item[0].lot_description,
            commision: null,
            assigned: this.assigned,
            actualDate: item[0].lot_date_update,
            photos: photos,
          });
        }
        console.log(this.items, "items");
      } catch (error) {
        console.log({ error });
      }
    },
  },
  async created() {
    const width = window.screen.width;
    console.log(width);
    this.isMobile = width > 700 ? false : true;
    this.objIDs = this.$route.query.id;
    console.log(this.objIDs);
    await this.getObjs();
  },
};
</script>
