import { onMounted, onUnmounted, computed, ref } from "vue";
import { faker } from "@faker-js/faker";

function useData() {
  const peopleList = ref([]);

  function genPeople() {
    const name = faker.name.fullName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    return {
      name,
      email,
      phone,
    };
  }

  function genPeopleList() {
    const newList = [];
    for (let i = 0; i < 20; i++) {
      newList.push(genPeople());
    }
    return newList;
  }

  onMounted(() => {
    peopleList.value = genPeopleList();
  });

  onUnmounted(() => {
    peopleList.value = [];
  });

  const peopleListWithIndex = computed(() =>
    peopleList.map((people, index) => ({ ...people, index }))
  );

  return { peopleList, peopleListWithIndex };
}

export default useData;
