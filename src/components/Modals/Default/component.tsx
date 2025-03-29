import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay
} from "@chakra-ui/react";
import {Default as DefaultProps} from "./interface";

export function Default({onCancel}: DefaultProps) {
  return (
    <Modal
      blockScrollOnMount={false}
      closeOnOverlayClick={false}
      isOpen={true}
      onClose={onCancel}
      size="full"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(20px) hue-rotate(90deg)"
      />
      <ModalContent bgColor="background.700" h="full">
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
}
