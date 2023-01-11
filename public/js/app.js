const { createApp } = Vue;

const myApp = {
  data() {
    return {
      immos: undefined,
      editP: undefined,
      editI: undefined,
    };
  },
  methods: {
    async getData() {
      const { data } = await axios.get('http://localhost:3000/immos');
      this.immos = data;
    },
    async delData(id) {
      await axios.delete(`http://localhost:3000/immos/${id}`);
      this.getData();
    },
    async editData(price, id) {
      this.editP = price;
      this.editI = id;
    },
    async editConfirm() {
      await axios.patch(`http://localhost:3000/immos/${editI}`, {
        price: Number(this.editP),
      });
      this.getData();
      this.editI = undefined;
    },
  },
};

createApp(myApp).mount('#app');
