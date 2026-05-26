<template>
  <v-container fluid>
    <HeaderComponent />
    <FiltersComponent v-model="showMap" :items-length="items.length" />
    <!--  <div class="card assigned mb-6 flex">
     <v-card width="100%" class="card">
        <v-card-title>Ваш менеджер</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="auto" class="assigned__photo">
              <v-avatar size="140">
                <v-img :src="assigned.avatar" cover></v-img>
              </v-avatar>
            </v-col>
            <v-col>
              <p class="gray-text assigned__doljnost mb-2">
                {{ assigned.position }}
              </p>
              <p class="assined__name mb-12">{{ assigned.name }}</p>
              <v-row class="assigned__contact__block align-center">
                <v-col cols="auto" class="assigned__phone">
                  <p class="gray-text">Телефон</p>
                  <a href="tel:+79137921801">{{ assigned.phone }}</a>
                </v-col>
                <v-col class="assigned__mail">
                  <p class="assigned__text_gray">Email</p>
                  <a href="mailto:ee.arzikaev@ya.ru">{{ assigned.email }}</a>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>-->
    <div class="title align-center flex">
      <v-col cols="auto"> <h2>Подборка</h2></v-col>
      <v-col>{{ items.length }} объект(а)</v-col>
    </div>
    <template v-for="item in items" :key="item.id">
      <Card
        :item="item"
        :isMobile="isMobile"
        class="mb-4 obj"
        @click="item.showDialog = !item.showDialog"
      >
      </Card>
      <Transition name="fade" class="modal__block">
        <div class="modal" v-if="item.showDialog">
          <CardView :item="item" v-model="item.showDialog" />
        </div>
      </Transition>
    </template>
  </v-container>
</template>

<script>
import Card from "../components/Card";
import CardView from "./CardView.vue";
import HeaderComponent from "../components/Header.vue";
import FiltersComponent from "../components/Filters.vue";
export default {
  name: "Selection-list",
  components: { Card, CardView, HeaderComponent, FiltersComponent },
  props: {
    url: String,
    items: Array,
    isMobile: Boolean,
    assigned: Object,
  },
  data() {
    return {
      showMap: false,
    };
  },
};
</script>
<style scoped>
.card {
  border: 1px solid #e5e5e5;
  border-radius: 20px;
}
.obj {
  cursor: pointer;
}
</style>
