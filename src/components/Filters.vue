<template>
  <div class="filters">
    <v-container>
      <v-row align="center">
        <v-col>
          <div class="filters__title-block">
            <span class="filters__title">Объявлений {{ itemsLength }}</span>
            <div class="map-switch" @click="toggle">
              <span class="map-switch__label">На карте</span>
              <div
                class="map-switch__track"
                :class="{ 'map-switch__track--on': modelValue }"
              >
                <div class="map-switch__thumb"></div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="filters__sort">
            <div class="filters__sort-top">
              <div class="filters__switch-type">
                <div
                  class="filters__switch-type-item"
                  :class="{
                    'filters__switch-type-item--active': sort.type === 'sale',
                  }"
                >
                  <span class="filters__switch-type-item-label">Продажа</span>
                </div>
                <div
                  class="filters__switch-type-item"
                  :class="{
                    'filters__switch-type-item--active': sort.type === 'rent',
                  }"
                >
                  <span class="filters__switch-type-item-label">Аренда</span>
                </div>
              </div>

              <input
                placeholder="Поиск"
                type="text"
                class="filters__query-input"
              />
            </div>
            <div class="filters__sort-bottom">
              <div class="filters__sort-bottom-item">
                <span class="filters__sort-bottom-item-label">1</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FiltersComponent",
  props: {
    itemsLength: Number,
    modelValue: {
      type: Boolean,
      default: false,
    },
    sort: {
      type: Object,
      default: () => ({
        type: "sale",
      }),
    },
  },
  emits: ["update:modelValue"],
  methods: {
    toggle() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
.filters {
  padding: 20px;
}

.filters__sort-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filters__query-input {
  all: unset;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  height: 46px;
  background: #f4f6f9;
  width: 320px;
  padding: 11.5px 16px;
}
.filters__query-input::placeholder {
  font-family: var(--font-regular-family);
  font-weight: var(--font-regular-weight);
  font-style: normal;
  font-size: 14px;
  color: #474849;
}
.filters__title {
  font-family: var(--font-semibold-family);
  font-weight: var(--font-semibold-weight);
  font-style: normal;
  font-size: 28px;
  line-height: 23px;
  letter-spacing: 0px;
  color: #474849;
}

.map-switch {
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  user-select: none;
}

.map-switch__label {
  font-family: var(--font-medium-family);
  font-weight: var(--font-medium-weight);
  font-size: 16px;
  color: #474849;
}

.filters__switch-type {
  display: flex;
  align-items: center;
  gap: 25px;
}

.filters__switch-type-item {
  cursor: pointer;
  font-family: var(--font-medium-family);
  font-weight: var(--font-medium-weight);
  font-size: 16px;
  color: #474849;
}

.filters__switch-type-item--active {
  color: #ff8351;
  border-bottom: 1px solid #ff8351;
}
.filters__sort {
  background-color: #fff;
  padding: 20px;
  border-radius: 14px;
}

.filters__title-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.map-switch__track {
  position: relative;
  width: 50px;
  height: 28px;
  border-radius: 14px;
  background-color: #e0e0e0;
  transition: background-color 0.25s ease;
  flex-shrink: 0;
}

.map-switch__track--on {
  background-color: #ff8351;
}

.map-switch__thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease;
}

.map-switch__track--on .map-switch__thumb {
  transform: translateX(22px);
}
</style>
