import { ref } from "vue";

export function useModal() {
  const modalIsOpen = ref(false);

  const openModal = () => {
    modalIsOpen.value = true;
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    modalIsOpen.value = false;
    document.body.classList.remove("overflow-hidden");
  };

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
}
